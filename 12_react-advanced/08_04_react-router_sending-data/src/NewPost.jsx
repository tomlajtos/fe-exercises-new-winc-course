// NOTE: no form validation or authentication will be done to keep the focus on the basics

import { Form, useLoaderData, redirect } from "react-router-dom";

export const NewPost = () => {
  const { users } = useLoaderData();

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

// action to add new comments to a post
export const action = async function ({ request }) {
  const formData = Object.fromEntries(await request.formData());
  // console.log("formData", formData);

  const response = await fetch("http://localhost:3003/posts", {
    method: "POST",
    body: JSON.stringify(formData),
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
  });

  const data = await response.json();
  // console.log("response", data);

  redirect(`/post/${data.userId}`);

  /**
   * NOTE: without returning something from the action React throws an error
   * do not recall that this was mentioned in the course material
   */
  return null;
};
