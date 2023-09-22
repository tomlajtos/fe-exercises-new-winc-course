import { useLoaderData, Link } from "react-router-dom";

export const Post = () => {
  const { post, users, comments } = useLoaderData();
  console.log(post, users);
  return (
    <div className="post-detail">
      <h1>{post.title}</h1>
      <p>
        by{" "}
        <Link to={`/user/${post.userId}`}>
          {users.find((user) => user.id === post.userId).name}
        </Link>
      </p>
      <p>{post.body}</p>
      <hr />

      {comments.length > 0 && (
        <div className="comments">
          <h2>Comments:</h2>
          {comments.map((comment) => {
            const commenter = users.find((user) => user.id === comment.userId);
            return (
              <div key={comment.id} className="comment">
                <p>
                  <Link to={`/user/${comment.userId}`}>
                    {commenter.name} commented:
                  </Link>
                </p>
                <p>{comment.comment}</p>
                <hr />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export const loader = async function ({ params }) {
  // TODO: for some reason `params.postId` returns a string starting with a colon (find out why?),
  // when id is grabbed as URL param from router in main.jsx (but why?) >> ACTUALLY: it is from PostList...
  // NOTE: The REASON : error in link to Post in PostList component <Link to={}>
  // !wrong link: <Link to={`/post/:${post.id}`}> -- no colon is needed before the id variable when passing it from params with str literal

  const post = await (
    await fetch(`http://localhost:3003/posts/${params.postId}`)
  ).json();

  const users = await (await fetch("http://localhost:3003/users")).json();

  //NOTE: it would be nince if the module material mentioned the syntax for chacking if there is any comments for specific posts
  const comments = await (
    await fetch(`http://localhost:3003/comments?postId=${params.postId}`)
  ).json();

  return { post, users, comments };
};
