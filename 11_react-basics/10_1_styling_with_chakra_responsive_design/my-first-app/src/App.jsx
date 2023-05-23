import { Heading, Flex } from "@chakra-ui/react";
import { useState } from "react";
import { DrinkChoice } from "./components/DrinkChoice.jsx";
import { DrinkSearch } from "./components/DrinkSearch";

export const App = () => {
  const greeting = "Welcome to our cafe!";
  const [userDrink, setUserDrink] = useState();
  return (
    <Flex direction={["column"]} align="center" px={4} py={10} size={"full"}>
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
    </Flex>
  );
};
