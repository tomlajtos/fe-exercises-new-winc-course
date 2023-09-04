import { useState, useEffect } from "react";

export const UserDetail = ({ user }) => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    let ignore = false;
    const fetchPosts = async () => {
      const response = await fetch(
        `http://localhost:3003/users/${user.id}/posts`,
      );
      const posts = await response.json();
      if (!ignore) {
        console.log(posts);
        setPosts(posts);
      }
    };
    fetchPosts();

    return () => (ignore = true);
  }, [user]);

  return user ? (
    <div className="userDetail">
      <h2>{user.name}</h2>
      <p className="userData">
        <span className="userDataType">email:</span> {user.email}
      </p>
      <p className="userData">
        <span className="userDataType">website:</span> {user.website}
      </p>
      <p className="userData">
        <span className="userDataType">company:</span> {user.company.name}
      </p>
      <hr />
      <h3>Posts</h3>
      <ul className="posts">
        {posts &&
          posts.map((post) => (
            <li key={post.id}>
              <article>
                <h4>{post.title}</h4>
                <p>{post.body}</p>
              </article>
            </li>
          ))}
      </ul>
    </div>
  ) : null;
};
