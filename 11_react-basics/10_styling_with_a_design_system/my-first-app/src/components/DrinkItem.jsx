import { Center, Image, Text } from "@chakra-ui/react";

export const DrinkItem = ({ drink, clickFn }) => {
  return (
    <>
      <Center
        my={2}
        p={4}
        w={250}
        border="1px"
        borderColor="transparent"
        boxSizing="border-box"
        _hover={{
          border: "1px",
          borderColor: "purple.100",
          borderRadius: "lg",
          cursor: "pointer",
        }}
        onClick={() => clickFn(drink)}
      >
        <Image w={50} h={50} mr={4} src={drink.imgUrl} alt={drink.alt} />
        <Text fontSize="lg">{drink.name}</Text>
      </Center>
    </>
  );
};
