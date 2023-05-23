import React, { useState } from "react";

import { portfolioItems } from "./utils/data";

import { PortfolioItemPage } from "./components/PortfolioItemPage";
import { PortfolioPage } from "./components/PortfolioPage";

export const App = () => {
  console.log(portfolioItems); // Check console to see how portfolioItems look like. You can delete this after.
  const [selectedItem, setSelectedItem] = useState();
  return (
    <>
      <div className="App">
        {selectedItem ? (
          <PortfolioItemPage item={selectedItem} />
        ) : (
          <PortfolioPage />
        )}
      </div>
    </>
  );
};
