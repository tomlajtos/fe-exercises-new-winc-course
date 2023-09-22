import { useLoaderData, Link } from "react-router-dom";

export const PostList = () => {
  const { users, posts } = useLoaderData();
  console.log(users, posts);

  return (
    <div className="post-list">
      {posts.map((post) => (
        <div className={"post"} key={post.id}>
          <Link to={`/post/:${post.id}`}>
            <h2>{post.title}</h2>
          </Link>
          {users.map((user) =>
            user.id === post.userId ? (
              <h3 key={user.id}>
                <i>By {user.name}</i>
              </h3>
            ) : null,
          )}
          <p>{post.body.slice(0, 20)}...</p>
        </div>
      ))}
    </div>
  );
};

export const loader = async function () {
  const users = await (await fetch("http://localhost:3003/users")).json();
  const posts = await (await fetch("http://localhost:3003/posts")).json();

  return { users, posts };
};
