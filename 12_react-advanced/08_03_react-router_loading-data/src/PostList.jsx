import { useLoaderData, Link } from "react-router-dom";

export const PostList = () => {
  const { users, posts } = useLoaderData();
  // console.log(users, posts);

  // NOTE: the nested div struct was the exercise requirement (semantic tags would be better IMHO)
  return (
    <div className="post-list">
      {posts.map((post) => (
        <div className={"post"} key={post.id}>
          <Link to={`/post/:${post.id}`}>
            <h2>{post.title}</h2>
          </Link>
          {users.map((user) =>
            user.id === post.userId ? (
              <Link to={`/user/:${post.userId}`} key={user.id}>
                <h3>
                  <i>By {user.name}</i>
                </h3>
              </Link>
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
