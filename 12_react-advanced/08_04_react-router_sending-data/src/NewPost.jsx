// NOTE: no form validation or authentication will be done to keep the focus on the basics

import { Form, useLoaderData, redirect } from "react-router-dom";

export const NewPost = () => {
  const { users } = useLoaderData();

  return (
    <>
      <Form method="post">
        <span>Title:</span>
        <input type="text" aria-label="Title" name="title"></input>
        <span>Post:</span>
        <textarea name="body" aria-label="Body" rows={5} />
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
  return await (await fetch("http://localhost:3003/users")).json();
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
   * IT IS actually requested in the exercise instructions, but it is not discussed
   * in the concept explanation.
   */
  return null;
};

/**
 * Alternate way of writing the action using chained promisses (from solution posted at Winc's Github)
 *
 * export const action = async ({ request }) => {
 * const formData = Object.fromEntries(await request.formData());
 * const newId = await fetch("http://localhost:3000/posts", {
 *   method: "POST",
 *   body: JSON.stringify(formData),
 *   headers: { "Content-Type": "application/json" },
 * })
 *   .then((res) => res.json())
 *   .then((json) => json.id);
 * return redirect(`/post/${newId}`);
 *};
 */
