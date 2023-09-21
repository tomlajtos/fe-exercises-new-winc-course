import { useLoaderData } from "react-router-dom";

export const PostList = () => {
  const { users, posts } = useLoaderData();
  console.log(users, posts);

  return (
    <>
      <div>post list</div>
    </>
  );
};

export const loader = async function () {
  const users = await (await fetch("http://localhost:3003/users")).json();
  const posts = await (await fetch("http://localhost:3003/posts")).json();

  return { users, posts };
};
