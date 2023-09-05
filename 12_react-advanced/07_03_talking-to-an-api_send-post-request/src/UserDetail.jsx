import { useState, useEffect } from "react";

export const UserDetail = ({ user }) => {
  const { id: userId, name, email, website, company } = user;
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    let ignore = false;
    setPosts([]); // reset posts state

    const fetchPosts = async () => {
      const response = await fetch(
        `http://localhost:3003/users/${userId}/posts`,
      );
      const userPosts = await response.json();
      if (!ignore) {
        console.log(userPosts);
        setPosts(userPosts);
      }
    };
    fetchPosts();

    return () => (ignore = true);
  }, [user]);

  return user ? (
    <div className="userDetail">
      <h2>{name}</h2>
      <p className="userData">
        <span className="userDataType">email:</span> {email}
      </p>
      <p className="userData">
        <span className="userDataType">website:</span> {website}
      </p>
      <p className="userData">
        <span className="userDataType">company:</span> {company.name}
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
