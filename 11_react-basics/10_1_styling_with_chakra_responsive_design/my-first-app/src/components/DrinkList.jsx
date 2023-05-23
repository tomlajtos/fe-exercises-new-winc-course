import { SimpleGrid } from "@chakra-ui/react";
import { DrinkItem } from "./DrinkItem.jsx";

export const DrinkList = ({ drinks, clickFn }) => {
  return (
    <SimpleGrid columns={[1, 2, 3]} spacing={[4, null, null, 8]}>
      {drinks.map((drink) => (
        <DrinkItem key={drink.id} drink={drink} clickFn={clickFn} />
      ))}
    </SimpleGrid>
  );
};
