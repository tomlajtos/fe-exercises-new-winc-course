import { useState } from "react";

const createInitialAge = () => new Date().getFullYear() - 1945;

export const Person = ({ reset }) => {
  const [name, setName] = useState("eman ym");
  const [age, setAge] = useState(createInitialAge);

  const handleClick = () => {
    setName((n) => n + "o");
    setName((n) => n + "o");
  };

  const handleBirthdayClick = () => {
    setAge((a) => a + 1);
  };

  return (
    <>
      <p>Name: {name}</p>
      <button type={"button"} onClick={handleClick}>
        Change name
      </button>
      <p>Age: {age}</p>
      <button type={"button"} onClick={handleBirthdayClick}>
        Birthday
      </button>
      <hr />
      <button type={"button"} onClick={reset} style={{ marginTop: "5px" }}>
        Reset
      </button>
    </>
  );
};
