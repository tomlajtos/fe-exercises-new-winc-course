import { Container, Wrap, Heading, Text } from "@chakra-ui/react";
import { PortfolioItemCard } from "./PortfolioItemCard";

export const PortfolioPage = ({ items, handleSelection }) => {
  return (
    <Container
      minW="100%"
      minH="100vh"
      display={"flex"}
      flexDir={"column"}
      alignItems={"center"}
      rowGap={4}
      p={[0, 0, 2]}
    >
      <Heading py={6} fontSize={["2xl", "3xl", "4xl"]}>
        This Is a Portfolio Page
      </Heading>
      <Wrap spacing={4} p={[0, 2, 6]} justify={"center"}>
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
