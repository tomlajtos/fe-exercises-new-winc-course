// A global variable which we pass into every function that needs it to keep
// them more pure.
const ROOT_URL = "http://localhost:3000/";

const sendRequest = async (method, root_url, url_part = "", body = false) => {
    const options = {};
    let response = {};
    let json = {};

    if (body && method !== "GET") {
        options.method = method;
        options.body = JSON.stringify(body);
        options.headers = {
            "Content-Type": "application/json;charset=utf-8"
        };
    } else {
        options.method = "GET";
    }

    response = await fetch(`${root_url}${url_part}`, options);

    switch (response.status) {
        case 200:
        case 201:
            json = await response.json();
            break;
        default: console.error(`Response code: ${response.status}`);
    }

    return json;
};

const showReservations = async root_url => {
    let reservations = await sendRequest("GET", root_url, "reservations");

    // Only show reservations in 2024 to make it easier to see the reservations
    // we care about.
    reservations = reservations.filter(r => r.date.includes("2024"));
    console.group("Reservations");
    console.table(reservations);
    console.groupEnd();
};

const addReservation = async function(root_url, body) {
    console.group(`Making a new reservation for ${body.name}, date: ${body.date}, time: ${body.time}...`);

    let newRes = await sendRequest("POST", root_url, "reservations", body);
    let resSuccess = Object.keys(newRes).length ? true : false;

    if (resSuccess) {
        console.table(newRes);
        console.groupEnd();
        console.log(`Reservation sucessful:%c ${resSuccess}, ID: ${newRes.id}`, "color: green");
        return newRes
    }
    console.groupEnd();
    console.log(`Reservation sucessful:%c ${resSuccess}, ID: ${newRes.id}`, "color: red");
}

const updateReservation = async function(method, root_url, id, body) {
    const endpoint = `reservations/${id}`;
    let reservation = await sendRequest("GET", root_url, endpoint);
    console.group(`Updating reservation ID: ${reservation.id}...`);
    console.group("Current reservation:");
    console.table(reservation);
    console.groupEnd();

    console.group("Updated reservation:");
    console.table(Object.keys(reservation)
        .reduce((currRes, key) => {
            if (key in body) {
                currRes[key] = body[key];
            }
            else {
                currRes[key] = reservation[key];
            }
            return currRes;
        }, {})
    );
    console.groupEnd();

    let update = await sendRequest(method, root_url, endpoint, body);
    let updateSuccess = Object.keys(update).length ? true : false;
    if (updateSuccess) {
        console.groupEnd();
        console.log(`Update successful:%c ${updateSuccess}`, "color: green");
        return update;
    }
    console.groupEnd();
    console.log(`Update successful:%c ${updateSuccess}`, "color: red");

}
///////////////////////////////////////////////////////////////////////////////
// Show all reservations
await showReservations(ROOT_URL);
///////////////////////////////////////////////////////////////////////////////
// Create a new reservation.
const huanRes = { "name": "Sam Huan", "people": 6, "date": "12/12/2024", "time": "20:00" };
let huanResResult = await addReservation(ROOT_URL, huanRes);
// await showReservations(ROOT_URL);

//////////////////////////////////////////////////////////////////////////////
// Create another new reservation.
const boRes = { "name": "Bim Bo", "people": 2, "date": "22/10/2024", "time": "18:00" };
let boResResult = await addReservation(ROOT_URL, boRes);
await showReservations(ROOT_URL);

///////////////////////////////////////////////////////////////////////////////
// Update Sam Huan's reservation using PUT.
const huanResUpdate = { ...huanResResult, "name": "Mr. Sam Huan", "time": "21:00" };
let huanResUpdateResult = await updateReservation("PUT", ROOT_URL, huanResResult.id, huanResUpdate);
// await showReservations(ROOT_URL);

///////////////////////////////////////////////////////////////////////////////
// Update Bim Bo's reservation using PACH.
const boResUpdate = { "people": 4, "date": "22/10/2024", "time": "19:00" };
let boResUpdateResult = await updateReservation("PATCH", ROOT_URL, boResResult.id, boResUpdate);
await showReservations(ROOT_URL);
