import { useLocalStorage } from "./useLocalStorage.js";

const App = () => {
  const [name, setName] = useLocalStorage("name", "Name-o");

  return (
    <div className="App">
      <h1>Welcome {name}!</h1>
      <input type={"text"} onChange={(e) => setName(e.target.value)}></input>
    </div>
  );
};

export default App;
