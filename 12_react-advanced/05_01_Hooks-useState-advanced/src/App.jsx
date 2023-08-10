import { useState } from "react";
import { Person } from "./Person";

const App = () => {
  const [version, setVersion] = useState(0);

  const handleReset = () => {
    setVersion((v) => v + 1);
  };

  return (
    <div className="App">
      <h1>React Hooks - useState advanced exercise</h1>
      <Person />
    </div>
  );
};

export default App;
