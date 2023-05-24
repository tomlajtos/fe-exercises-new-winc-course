import { Button, Flex, Container, Image, Text } from "@chakra-ui/react";

export const PortfolioItemPage = ({ item, handleClick }) => {
  return (
    <>
      <h2>{item.title}</h2>
      <p>{item.description}</p>
      <img src={item.imageUrl} alt={item.title} style={{ width: "350px" }} />
      <Button variant={"outline"} onClick={() => handleClick(null)}>
        Go Back
      </Button>
    </>
  );
};
