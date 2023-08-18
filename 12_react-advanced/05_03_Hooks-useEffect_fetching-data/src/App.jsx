/*eslint no-unused-vars: 0 */
import { useEffect, useState } from "react";
// import fetchers > backend emulation
import { fetchPeople, fetchPerson } from "./fetchers.js";

const App = () => {
  const [people, setPeople] = useState([]);
  const [person, setPerson] = useState(null);
  const [id, setId] = useState(null);

  useEffect(() => {
    console.log("App rendered");
  });

  useEffect(() => {
    console.log("Fetching people...");
    async function getPeople() {
      const json = await fetchPeople();
      setPeople(json);
    }
    getPeople();
  }, []);

  useEffect(() => {
    console.log("Fetching person...");
    async function getPerson() {
      if (id) {
        const json = await fetchPerson(id);
        setPerson(json);
      }
    }
    getPerson();
    return () => setPerson(null); //cleanup
  }, [id]);

  return (
    <div className="App">
      <h1>React Hooks Exercise Starter</h1>
      {people &&
        people.map((person) => (
          <button key={person.id} onClick={() => setId(person.id)}>
            {person.name}
          </button>
        ))}
      {person ? (
        <div>
          <h2>{person.name}</h2>
          <p>Age: {person.age}</p>
          <p>
            <span>Hobbies: </span>
            {person.hobbies.map((hobby, i, a) => {
              if (i + 1 !== a.length) {
                return <span key={hobby}>{hobby}, </span>;
              } else {
                return <span key={hobby}>{hobby}</span>;
              }
            })}
          </p>
        </div>
      ) : people.length && !id ? (
        <div>
          <h2>Please select a person</h2>
        </div>
      ) : (
        <div>
          <h2>Loading, please wait...</h2>
        </div>
      )}
    </div>
  );
};

export default App;
