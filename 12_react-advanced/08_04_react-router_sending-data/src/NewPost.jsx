// NOTE: no form validation or authentication will be done to keep the focus on the basics

import { useLoaderData, Form } from "react-router-dom";

export const NewPost = () => {
  const { users } = useLoaderData();
  console.log(users);
  return (
    <>
      <Form method="post">
        <span>Title:</span>
        <input name="title"></input>
        <span>Post:</span>
        <textarea name="body" />
        <span>Select a user:</span>
        <select name="userId">
          <option value={""}>Choose a user from the list bleow...</option>
          {users.map((user) => (
            <option key={user.id} value={user.id}>
              {user.name}
            </option>
          ))}
        </select>
        <button type="submit">Submit</button>
      </Form>
    </>
  );
};

export const loader = async function () {
  const users = await (await fetch("http://localhost:3003/users")).json();
  return { users };
};
