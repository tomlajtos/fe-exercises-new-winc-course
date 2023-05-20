import { Flex, Spacer, Text, Image } from "@chakra-ui/react";
import { UiButton } from "./ui/Button.jsx";
import { availableDrinks } from "../utils/data";

export const DrinkChoice = ({ drink, clickFn }) => {
  return (
    <>
      <Flex direction="column" align="center" gap={8}>
        <Text fontSize="3xl">Your choice: {drink.name}</Text>
        <Image w={250} h={250} src={drink.imgUrl} alt={drink.alt} />
        <Text fontSize="xl">
          Your drink will be ready in a couple of minutes...
        </Text>
        <Spacer />
        <UiButton text={"Change selection"} clickFn={() => clickFn()} />
      </Flex>
    </>
  );
};
