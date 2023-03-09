import { addEventListeners } from "./events.js";
import {addItem, getItem, getItems, updateItem, deleteItem  } from "./io.js";

addEventListeners();

const flavours =  await getItems("flavours");
console.log("Flavours:", flavours);

const vanilla = await getItem("flavours", 1);
console.log("Vanilla:", vanilla);
