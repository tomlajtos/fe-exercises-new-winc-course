import { useState, useEffect } from "react";
import { UserDetail } from "./UserDetail";

const App = () => {
  const [userList, setUserList] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch("http://localhost:3003/users");
      const users = await response.json();
      setUserList(users);
    };
    fetchUsers();
  }, []);

  return (
    <div className="App">
      <h1>Blogging site exercise </h1>
      <p>(Exercise for Module-12/07 - Talking to an API)</p>
      <div className="container">
        <ul className="userList">
          {userList.map((user) => (
            <li
              className="userListItem"
              key={user.id}
              onClick={() => setSelectedUser(user)}
            >
              {user.name}
            </li>
          ))}
        </ul>
        {selectedUser && <UserDetail user={selectedUser} />}
      </div>
    </div>
  );
};

export default App;
