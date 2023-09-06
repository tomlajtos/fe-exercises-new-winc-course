import { useState } from "react";

export const AddUserForm = ({ createUser }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    createUser({ name, email, website });

    // reset form input values
    setName("");
    setEmail("");
    setWebsite("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>{"Name"}</label>
      <input
        type={"text"}
        required="required"
        name={"name"}
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <label>{"Email"}</label>
      <input
        type="email"
        required="required"
        name="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />
      <label>{"Website"}</label>
      <input
        type="url"
        required="required"
        name="website"
        value={website}
        onChange={(event) => setWebsite(event.target.value)}
      />
      <button type="submit">Add User</button>
    </form>
  );
};
