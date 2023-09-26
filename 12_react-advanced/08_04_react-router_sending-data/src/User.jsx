import { Link, useLoaderData } from "react-router-dom";

export const User = () => {
  const { user, posts, comments } = useLoaderData();

  return (
    <div className="user">
      <h1>{user.name}</h1>

      {posts.length > 0 && (
        <>
          <h2>Posts:</h2>
          {posts.map((post) => (
            <div key={post.id}>
              <Link to={`/post/${post.id}`}>{post.title}</Link>
            </div>
          ))}
        </>
      )}

      {comments.length > 0 && (
        <>
          <h2>Comments:</h2>
          {comments.map((comment) => (
            <div key={comment.id}>
              <Link to={`/post/${comment.postId}`}>{comment.comment}</Link>
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export const loader = async function ({ params }) {
  // TODO: for some reason `params.userId` returns a string starting with a colon (find out why?),
  // when id is grabbed as URL param from router in main.jsx (but why?) >> ACTUALLY: it is from PostList...
  // NOTE: The REASON : error in link to Post in PostList component `Link`-s
  // !wrong link: <Link to={`/user/:${post.userId}`}> -- no colon is needed before the id variable when
  // passing from params with str literal

  const user = await (
    await fetch(`http://localhost:3003/users/${params.userId}`)
  ).json();

  //NOTE: it would be nince if the module material mentioned the syntax for chacking if there is any posts/comments for specific user
  // as a reminder from module 10 async/await exercises
  const posts = await (
    await fetch(`http://localhost:3003/posts?userId=${params.userId}`)
  ).json();

  const comments = await (
    await fetch(`http://localhost:3003/comments?userId=${params.userId}`)
  ).json();

  return { user, posts, comments };
};
