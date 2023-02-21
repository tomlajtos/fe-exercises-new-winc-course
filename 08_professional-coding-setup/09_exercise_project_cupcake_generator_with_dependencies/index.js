"use strict";

/////////////////////////////////////////////////////////////////
// Cupcake generator v2
const prompt = require("prompt-sync")();

const generateRecipe = function(flavor, frosting, topping) {
    const cupcakeFlavor = ["Vanilla", "Chocolate", "Strawberry", "Lemon"];
    const frostings = ["cream cheese", "buttercreme", "meringue", "tiramisu"];
    const toppings = ["chocolate sauce", "blueberries", "strawberries", "nuts"];

    if (flavor === "") {
        flavor = cupcakeFlavor[Math.floor(Math.random() * 4)];
    }
    if (frosting === "") {
        frosting = frostings[Math.floor(Math.random() * 4)];
    }
    if (topping === "") {
        topping = toppings[Math.floor(Math.random() * 4)];
    }

    console.log(
        `${flavor} cupcake with ${frosting} frosting and ${topping} as topping. \n`
    );
};

console.log(
    "Note: just press enter if you don't have an ingredient in mind \n"
);

const weekDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
for (const day of weekDays) {
    console.log(day);
    const flavor = prompt("What flavor?");
    const frosting = prompt("What frosting?");
    const topping = prompt("What topping?");
    generateRecipe(flavor, frosting, topping);
}
