import React, { useState } from "react";
import "./App.css";
import { portfolioItems } from "./utils/data";
import { PortfolioItemPage } from "./components/PortfolioItemPage";

export const App = () => {
  console.log(portfolioItems); // Check console to see how portfolioItems look like. You can delete this after.
  const [selectedItem, setSelectedItem] = useState(portfolioItems[0]);
  return (
    <>
      <div className="App">
        <PortfolioItemPage item={selectedItem} />
      </div>
    </>
  );
};
