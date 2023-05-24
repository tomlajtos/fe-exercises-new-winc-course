import {
  Heading,
  Button,
  Flex,
  Container,
  Image,
  Text,
} from "@chakra-ui/react";

export const PortfolioItemPage = ({ item, handleClick }) => {
  return (
    <Flex minW="90%" direction={"column"} alignItems={"center"} gap={4} p={4}>
      <Heading fontSize={["2xl", "3xl", "4xl"]} mb={4}>
        {item.title}
      </Heading>
      <Image
        src={item.imageUrl}
        alt={item.title}
        style={{ maxWidth: "550px" }}
      />
      <Text py={4} maxWidth={"550px"}>
        {item.description}
      </Text>
      <Button
        mt={"4"}
        variant={"outline"}
        size={"lg"}
        colorScheme={"telegram"}
        onClick={() => handleClick(null)}
      >
        Go Back
      </Button>
    </Flex>
  );
};
