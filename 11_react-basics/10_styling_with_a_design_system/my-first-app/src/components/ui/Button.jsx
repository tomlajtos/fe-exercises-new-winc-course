import { useState } from "react";
import { Flex, Text, FormLabel } from "@chakra-ui/react";
import { TextInput } from "./ui/TextInput.jsx";
import { DrinkList } from "./DrinkList.jsx";
import { availableDrinks } from "../utils/data.js";

export const DrinkSearch = ({ clickFn }) => {
  const [searchField, setSearchField] = useState("");
  const handleChange = (event) => setSearchField(event.target.value);
  const matchedDrinks = availableDrinks.filter((drink) => {
    return drink.name.toLowerCase().includes(searchField.toLowerCase());
  });

  return (
    <Flex mt={4} direction="column" align="center" gap={4}>
      <FormLabel fontSize="md" color="gray.600">
        You can search for available drinks here:
      </FormLabel>
      <TextInput changeFn={handleChange} mb={8} w={400} />
      {searchField ? (
        <>
          <Text>Search results: </Text>
          <DrinkList drinks={matchedDrinks} clickFn={clickFn} />
        </>
      ) : (
        <DrinkList drinks={availableDrinks} clickFn={clickFn} />
      )}
    </Flex>
  );
};
