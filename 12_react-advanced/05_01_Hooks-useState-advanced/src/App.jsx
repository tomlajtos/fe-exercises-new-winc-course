import { useState } from "react";

crateInitialState = () => {};

const App = () => {
  const [name, setName] = useState("eman ym");

  const handleClick = () => {
    setName((n) => n + "o");
    console.log(name);
    setName((n) => n + "o");
    console.log(name);
  };

  return (
    <div className="App">
      <h1>React Hooks Exercise Starter</h1>
      <button type={"button"} onClick={handleClick}>
        Change name
      </button>
      <p>{name}</p>
    </div>
  );
};

export default App;
