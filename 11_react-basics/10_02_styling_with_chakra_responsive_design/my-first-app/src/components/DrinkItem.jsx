import { Flex, Spacer, Image, Text } from "@chakra-ui/react";

export const DrinkItem = ({ drink, clickFn }) => {
  return (
    <>
      <Flex
        direction={["row", null, "column"]}
        align={"center"}
        gap={[4]}
        py={4}
        w={["90vw", null, 250]}
        border="2px"
        borderColor="transparent"
        _hover={{
          border: "2px",
          borderColor: "purple.100",
          borderRadius: "lg",
          cursor: "pointer",
        }}
        onClick={() => clickFn(drink)}
      >
        <Spacer />
        <Image
          w={[50, null, 75]}
          h={[50, null, 75]}
          src={drink.imgUrl}
          alt={drink.alt}
        />
        <Text fontSize={["lg", null, "xl"]}>{drink.name}</Text>
        <Spacer />
      </Flex>
    </>
  );
};
