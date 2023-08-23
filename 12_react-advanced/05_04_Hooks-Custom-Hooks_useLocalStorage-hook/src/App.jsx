import { useState, useEffect } from "react";

const App = () => {
  // use a setter function to get value that belongs to the KEY 'name'
  // set a def value as well with the `||` operator
  const [name, setName] = useState(
    () => window.localStorage.getItem("name") || "Name-o",
  );

  // use useEffect to update 'name' in localStorage
  // since our component has to be synced with an external system (Web Storage API)
  useEffect(() => {
    window.localStorage.setItem("name", name);
  }, [name]);

  return (
    <div className="App">
      <h1>Welcome {name}!</h1>
      <input type={"text"} onChange={(e) => setName(e.target.value)}></input>
    </div>
  );
};

export default App;
