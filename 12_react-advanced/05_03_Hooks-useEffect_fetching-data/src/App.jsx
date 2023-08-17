/*eslint no-unused-vars: 0 */
import { useEffect, useState } from "react";
// import fetchers > backend emulation
import { fetchPeople, fetchPerson } from "./fetchers.js";

const App = () => {
  const [people, setPeople] = useState([]);
  const [person, setPerson] = useState(null);
  const [id, setId] = useState(null);
  useEffect(() => {
    console.log("using Effect to fetch people");
    async function getPeople() {
      const json = await fetchPeople();
      setPeople(json);
    }
    getPeople();
  }, []);
  return (
    <div className="App">
      <h1>React Hooks Exercise Starter</h1>
      {people &&
        people.map((person) => (
          <button key={person.id} onClick={() => setId(person.id)}>
            {person.name}
          </button>
        ))}
      {person && (
        <div>
          <h2>{person.name}</h2>
          <p>Age: {person.age}</p>
          <p>Hobbies: {person.hobbies}</p>
        </div>
      )}
    </div>
  );
};

export default App;
