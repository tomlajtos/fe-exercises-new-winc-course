import React, { useState } from "react";
import { Container } from "@chakra-ui/react";
import { portfolioItems } from "./utils/data";

import { PortfolioItemPage } from "./components/PortfolioItemPage";
import { PortfolioPage } from "./components/PortfolioPage";

export const App = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  return (
    <Container minW="100%" minH="100vh" bg={"gray.50"} p={[0, 0, 2]}>
      {selectedItem ? (
        <PortfolioItemPage item={selectedItem} handleClick={setSelectedItem} />
      ) : (
        <PortfolioPage
          handleSelection={setSelectedItem}
          items={portfolioItems}
        />
      )}
    </Container>
  );
};
