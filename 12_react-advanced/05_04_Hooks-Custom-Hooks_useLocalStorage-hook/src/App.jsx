import { useState } from "react";

const App = () => {
  const [name, setName] = useState("Name-o");
  return (
    <div className="App">
      <h1>Welcome {name}!</h1>
      <input type={"text"} onChange={(e) => setName(e.target.value)}></input>
    </div>
  );
};

export default App;
