import { useState } from "react";

const createInitialState = () => new Date().getFullYear() - 1945;

const App = () => {
  const [name, setName] = useState("eman ym");
  const [age, setAge] = useState(createInitialState);
  console.log(age);
  const handleClick = () => {
    setName((n) => n + "o");
    console.log(name);
    setName((n) => n + "o");
    console.log(name);
  };

  const addOneYear = () => {
    setAge((a) => a + 1);
  };

  return (
    <div className="App">
      <h1>React Hooks Exercise Starter</h1>
      <p>Name: {name}</p>
      <button type={"button"} onClick={handleClick}>
        Change name
      </button>
      <p>Age: {age}</p>
      <button type={"button"} onClick={addOneYear}>
        Birthday
      </button>
    </div>
  );
};

export default App;
