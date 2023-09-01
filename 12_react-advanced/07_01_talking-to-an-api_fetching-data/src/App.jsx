import { useState, useEffect } from "react";

const App = () => {
  const [userList, setUserList] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:3003/users");
      const json = await response.json();
      console.log(json);
      setUserList(json);
    };
    fetchData();
  }, []);

  return (
    <div className="App">
      <h1>Blogging site exercise </h1>
      <p>(Exercise for Module-12/07 - Talking to an API)</p>
      <ul>
        {userList.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
