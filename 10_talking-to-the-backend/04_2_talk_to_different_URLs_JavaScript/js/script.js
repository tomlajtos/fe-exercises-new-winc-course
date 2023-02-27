const grabRandomId = items => {
    return Math.floor(Math.random() * items.length + 1);
};

const ROOT_URL = "http://localhost:3000";
const path = {
    menu: "/menu",
    tables: "/tables",
    reserv: "/reservations",
}

const sendRequest = async (base, path, id) => {
    let url = "";
    id ? url = `${path}/${id}` : url = path;
    // console.log(url)

    const endpoint = new URL(url, base).toString();
    // console.log(endpoint);

    const response = await fetch(endpoint);
    const json = await response.json();
    return json;
};

///////////////////////////////////////////////////////////////////////////////
// All menu items.
const menuItems = await sendRequest(ROOT_URL, path.menu);
console.table(menuItems);

// Random menu item.
const randomMenuItemId = grabRandomId(menuItems);
console.log("id:", randomMenuItemId);
const menuItem = await sendRequest(ROOT_URL, path.menu, randomMenuItemId);
console.log(menuItem);

///////////////////////////////////////////////////////////////////////////////
// All tables.
const tables = await sendRequest(ROOT_URL, path.tables);
console.table(tables);

// Random table.
const randomTableId = grabRandomId(tables);
console.log("id:", randomTableId);
const table = await sendRequest(ROOT_URL, path.tables, randomTableId);
console.log(table);

///////////////////////////////////////////////////////////////////////////////
// All reservations.
const reservations = await sendRequest(ROOT_URL, path.reserv);
console.table(reservations);

// Random reservation.
const randomReservationId = grabRandomId(reservations);
console.log("id:", randomReservationId);
const reservation = await sendRequest(ROOT_URL, path.reserv, randomReservationId);
console.log(reservation);
