import { Heading, Container } from "@chakra-ui/react";
import { useState } from "react";
import { DrinkChoice } from "./components/DrinkChoice.jsx";
import { DrinkSearch } from "./components/DrinkSearch";

export const App = () => {
  const greeting = "Welcome to our cafe!";
  const [userDrink, setUserDrink] = useState();
  return (
    <Container
      minH={"100vh"}
      minW={"100%"}
      display="flex"
      flexDir={"column"}
      alignItems="center"
      px={4}
    >
      {userDrink ? (
        <DrinkChoice drink={userDrink} clickFn={setUserDrink} />
      ) : (
        <>
          <Heading my={6} fontSize="3xl" color="purple.900">
            {greeting}
          </Heading>
          <DrinkSearch clickFn={setUserDrink} />
        </>
      )}
    </Container>
  );
};
