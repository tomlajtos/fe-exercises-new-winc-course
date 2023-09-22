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
  const postId = params.postId.slice(1);
  const post = await (
    await fetch(`http://localhost:3003/posts/${postId}`)
  ).json();
  const users = await (await fetch("http://localhost:3003/users")).json();
  const comments = await (await fetch("http://localhost:3003/comments")).json();

  return { post, users, comments };
};
