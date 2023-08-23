import { useState } from "react";

const App = () => {
  // use a setter function to get value that belongs to the KEY 'namej'
  // set a def value as well with the `||` operator
  const [name, setName] = useState(
    () => window.localStorage.getItem("name") || "Name-o",
  );

  return (
    <div className="App">
      <h1>Welcome {name}!</h1>
      <input type={"text"} onChange={(e) => setName(e.target.value)}></input>
    </div>
  );
};

export default App;
