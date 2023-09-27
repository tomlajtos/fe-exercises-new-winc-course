import { useLoaderData, Link, Form, redirect } from "react-router-dom";

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

      <Form method={"post"}>
        <h3>Write a comment</h3>
        <textarea name="comment" />
        <span>Select a user</span>
        <select name="userId">
          <option>Choose from the users in the list...</option>
          {users.map((user) => (
            <option key={user.id} value={user.id}>
              {user.name}
            </option>
          ))}
        </select>
        <button type="submit">Comment</button>
      </Form>
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
  /**
   * BUG:(RESOLVED): for some reason `params.postId` returns a string starting with a colon (find out why?),
   * when id is grabbed as URL param from router in main.jsx (but why?) >> ACTUALLY: it wass grabbed from PostList...
   * NOTE: The REASON : error in link to Post in PostList component's `Link`-s
   * !wrong link: <Link to={`/post/:${post.id}`}> -- no colon is needed before the id variable when passing it from params with str literal
   * NOTE: Incomplate exercise instruction: only talking about fetching posts/post, users/user
   */

  const post = await (
    await fetch(`http://localhost:3003/posts/${params.postId}`)
  ).json();

  const users = await (await fetch("http://localhost:3003/users")).json();

  /**
   * NOTE: it would be nince if the module material mentioned the syntax for chacking if there is any comments for specific posts
   * as a reminder from module 10 async/await exercises
   */
  const comments = await (
    await fetch(`http://localhost:3003/comments?postId=${params.postId}`)
  ).json();

  return { post, users, comments };
};

// action to add new comments to a post
export const addCommentAction = async function ({ request, params }) {
  const formData = {
    postId: params.postId,
    ...Object.fromEntries(await request.formData()),
  };

  // console.log("formData", formData);

  const response = await fetch(`http://localhost:3003/comments`, {
    method: "POST",
    body: JSON.stringify(formData),
    headers: {
      "Content-Type": "application/json;charset=UTF-8",
    },
  });

  const data = await response.json();
  // console.log("comment data", data);

  redirect(`/comments/${params.postId}`);

  /**
   * NOTE: without returning something from the action React throws an error
   * do not recall that this was mentioned in the course material
   */
  return null;
};
