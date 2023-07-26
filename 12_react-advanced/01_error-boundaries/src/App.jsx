import "./App.css";
import { ComponentThatErrors } from "./ComponentThatErrors";

export default function App() {
  return (
    <div className="App">
      <h1>Error Boundary Exercise</h1>
      <ComponentThatErrors />
    </div>
  );
}
