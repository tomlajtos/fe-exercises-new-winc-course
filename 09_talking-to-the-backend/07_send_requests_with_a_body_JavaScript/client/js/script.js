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
    console.table(reservations);
};

const addReservation = async function(root_url, body) {
    console.log(`Making a new reservation for ${body.name} date:${body.date} time:${body.time}`);

    let newRes = await sendRequest("POST", root_url, "reservations", body);

    console.table(newRes)
    Object.keys(newRes).length ? console.log("res successful:", true) : console.log("res successful:", false);
    return newRes;
}
///////////////////////////////////////////////////////////////////////////////
// Show all reservations
await showReservations(ROOT_URL);

///////////////////////////////////////////////////////////////////////////////
// Create a new reservation.
const huanRes = { "name": "Sam Huan", "people": 6, "date": "12/12/2024", "time": "20:00" };
let huanResResult = await addReservation(ROOT_URL, huanRes);
console.log("Huan reservation ID:", huanResResult.id);
await showReservations(ROOT_URL);

//////////////////////////////////////////////////////////////////////////////
// Create another new reservation.

///////////////////////////////////////////////////////////////////////////////
// Update Bim Bo's reservation using PUT.

///////////////////////////////////////////////////////////////////////////////
// Update Sam Huan's reservation using PATCH.
