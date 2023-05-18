/* eslint-disable react/react-in-jsx-scope */
// interactive drink coice will come in future exercise (R. state)
import { Heading } from "@chakra-ui/react";
import { useState } from "react";
import "./App.css";
import { DrinkChoice } from "./components/DrinkChoice.jsx";
import { DrinkSearch } from "./components/DrinkSearch";

export const App = () => {
  const greeting = "Welcome to our cafe!";
  const [userDrink, setUserDrink] = useState();
  return (
    <div className="App">
      {userDrink ? (
        <DrinkChoice drink={userDrink} clickFn={setUserDrink} />
      ) : (
        <>
          <Heading mb={8} fontSize="4xl" color="purple.900">
            {greeting}
          </Heading>
          <DrinkSearch clickFn={setUserDrink} />
        </>
      )}
    </div>
  );
};
