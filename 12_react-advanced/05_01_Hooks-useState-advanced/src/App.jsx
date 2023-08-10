import { useState } from "react";
import { Person } from "./Person";

const App = () => {
  const [version, setVersion] = useState(0);

  const handleReset = () => {
    setVersion(version + 1);
    console.log(version);
  };

  return (
    <div className="App">
      <h1>React Hooks - useState advanced exercise</h1>
      <Person key={version} reset={handleReset} />
    </div>
  );
};

export default App;
