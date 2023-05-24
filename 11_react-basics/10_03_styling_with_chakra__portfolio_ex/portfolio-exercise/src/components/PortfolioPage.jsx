import { Container, Wrap, Heading, Text } from "@chakra-ui/react";
import { PortfolioItemCard } from "./PortfolioItemCard";

export const PortfolioPage = ({ items, handleSelection }) => {
  return (
    <Container w="100%" minW="80vw" minH="100vh" bg="gray.50">
      <Heading fontSize={"2xl"}>This is the Portfolio Page (WIP)</Heading>
      <Wrap>
        {items.map((item) => {
          return (
            <PortfolioItemCard
              key={item.id}
              item={item}
              handleSelection={handleSelection}
            />
          );
        })}
      </Wrap>
    </Container>
  );
};
