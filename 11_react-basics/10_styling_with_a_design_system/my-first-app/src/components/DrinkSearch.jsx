import { useState } from "react";
import { availableDrinks } from "../utils/data.js";
import "./DrinkSearch.css";
import { TextInput } from "./ui/TextInput.jsx";
import { DrinkList } from "./DrinkList.jsx";

export const DrinkSearch = ({ clickFn }) => {
  const [searchField, setSearchField] = useState("");
  const handleChange = (event) => setSearchField(event.target.value);
  const matchedDrinks = availableDrinks.filter((drink) => {
    return drink.name.toLowerCase().includes(searchField.toLowerCase());
  });

  return (
    <div className="drink-search">
      <label>You can search for available drinks here:</label>
      <TextInput changeFn={handleChange} mb={8} w={400} />
      {searchField ? (
        <>
          <p>Search results: </p>
          <DrinkList
            className="list"
            drinks={matchedDrinks}
            clickFn={clickFn}
          />
        </>
      ) : (
        <DrinkList
          className="list"
          drinks={availableDrinks}
          clickFn={clickFn}
        />
      )}
    </div>
  );
};
