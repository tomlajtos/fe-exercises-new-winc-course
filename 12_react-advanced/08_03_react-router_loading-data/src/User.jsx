import { Link } from "react-router-dom";

export const User = () => {
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
