console.log("Let's get started!");

import camelcaseKeys from "camelcase-keys";

let person = {
    first_name: "John",
    last_name: "Deer",
    phone_number: "+13433489893",
}

person = camelcaseKeys(person);
console.log(person);
