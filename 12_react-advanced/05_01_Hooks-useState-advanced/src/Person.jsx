import { useState } from "react";

const createInitialState = () => new Date().getFullYear() - 1945;

export const Person = () => {
  const [name, setName] = useState("eman ym");
  const [age, setAge] = useState(createInitialState);

  const handleClick = () => {
    setName((n) => n + "o");
    console.log(name);
    setName((n) => n + "o");
    console.log(name);
  };

  const addOneYear = () => {
    setAge((a) => a + 1);
  };

  const resetAge = () => {
    setAge(createInitialState);
  };

  return (
    <>
      <p>Name: {name}</p>
      <button type={"button"} onClick={handleClick}>
        Change name
      </button>
      <p>Age: {age}</p>
      <button type={"button"} onClick={addOneYear}>
        Birthday
      </button>
      <hr />
      <button type={"button"} onClick={resetAge}>
        Reset Age
      </button>
    </>
  );
};
