// NOTE: no form validation or authentication will be done to keep the focus on the basics

import { useLoaderData } from "react-router-dom";

export const NewPost = () => {
  const { users } = useLoaderData();
  console.log(users);
  return (
    <>
      <div>new post</div>
    </>
  );
};

export const loader = async function () {
  const users = await (await fetch("http://localhost:3003/users")).json();
  return { users };
};
