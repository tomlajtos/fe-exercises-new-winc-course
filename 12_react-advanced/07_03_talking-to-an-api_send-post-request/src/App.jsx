import { useState, useEffect } from "react";
import { UserDetail } from "./UserDetail";
import { AddUserForm } from "./AddUserForm";

const App = () => {
  const [userList, setUserList] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch("http://localhost:3003/users");
      const users = await response.json();
      console.log(users);
      setUserList(users);
    };
    fetchUsers();
  }, []);

  const createUser = async (user) => {
    try {
      const response = await fetch("http://localhost:3003/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      const result = await response.json();
      console.log("post successful", result);
      user = { id: result.id, ...user };
      console.log("new user:", user);
      setUserList([...userList, user]);
    } catch (error) {
      console.error("Error", error);
    }
  };

  return (
    <div className="App">
      <h1 className="title">Blogging site exercise </h1>
      <p className="exrDesc">(Exercise for Module-12/07 - Talking to an API)</p>
      <div className="content">
        <div className="usersPane">
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
          <AddUserForm createUser={createUser} />
        </div>
        {selectedUser && <UserDetail user={selectedUser} />}
      </div>
    </div>
  );
};

export default App;
