import { addEventListeners } from "./events.js";
import { addItem, getItem, getItems, updateItem, deleteItem } from "./io.js";

addEventListeners();

// test imported io functions
// console.log("Flavours:", await getItems("flavours"));
//
// const vanilla = await getItem("flavours", 1);
// console.log("Vanilla:", vanilla);
//
// const coffee = {
// 	"name": "coffee",
// 	"price": 2.1
// };
//
// const addCoffeeFlavour = await addItem("flavours", coffee);
// console.log("new flavour added:", addCoffeeFlavour);

// console.log("Flavours:", await getItems("flavours"));

// const newCoffee = {
// 	"name": "coffee",
// 	"price": 1.95,
// 	"id": 4
// };
//
// const updatedCoffee = await updateItem("flavours", addCoffeeFlavour.id, newCoffee);
// console.log("coffee flavour updated:", updatedCoffee); 
//
// console.log("Flavours:", await getItems("flavours"));
//
// deleteItem("flavours", addCoffeeFlavour.id);
// console.log(`deleting flavour: ${addCoffeeFlavour.name}, id: ${addCoffeeFlavour.id}`);
//
// console.log("Flavours:", await getItems("flavours"));
// console.log("Customers:", await getItems("customers"));
// console.log("Orders:", await getItems("orders"));
