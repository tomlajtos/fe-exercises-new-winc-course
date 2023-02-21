// A global variable which we pass into every function that needs it to keep
// them more pure.
const ROOT_URL = "http://localhost:3000/";

const sendRequest = async (root_url, url_part = "", body = false) => {
};

const showReservations = async root_url => {
    let reservations = await sendRequest("GET", root_url, "reservations");

    // Only show reservations in 2024 to make it easier to see the reservations
    // we care about.
    reservations = reservations.filter(r => r.date.includes("2024"));
    console.table(reservations);
    console.log(update.status)
};

///////////////////////////////////////////////////////////////////////////////
// Show all reservations
await showReservations(ROOT_URL);

///////////////////////////////////////////////////////////////////////////////
// Create a new reservation.

//////////////////////////////////////////////////////////////////////////////
// Create another new reservation.

///////////////////////////////////////////////////////////////////////////////
// Update Bim Bo's reservation using PUT.

///////////////////////////////////////////////////////////////////////////////
// Update Sam Huan's reservation using PATCH.
