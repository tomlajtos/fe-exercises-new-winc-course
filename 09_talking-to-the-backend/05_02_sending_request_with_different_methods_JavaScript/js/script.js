const sendRequest = async(methodStr, path, resId = "") => {
    const baseUrl = "http://localhost:3000/"
    const response = await fetch(new URL(`${path}/${resId}`, baseUrl), {method: methodStr});
    const json = await response.json();
    return json;
};

const randomIndex = arr => Math.floor(Math.random() * arr.length - 2);
///////////////////////////////////////////////////////////////////////////////
// All reservations.
let reservations = await sendRequest("GET", "reservations");
console.table(reservations);

// A specific reservation.
const reservationId = reservations[randomIndex(reservations)]["id"];
console.log(`I am going to delete reservation ${reservationId}.`);

// Delete the specific reservation
await sendRequest("DELETE", "reservations", reservationId);

// Check if it was deleted.
reservations = await sendRequest(reservationId);
// This should show one reservation less.
console.table(reservations);
