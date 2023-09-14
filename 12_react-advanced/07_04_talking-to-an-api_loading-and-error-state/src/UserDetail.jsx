import { useState, useEffect } from "react";

// Unreliable, alternative fetch method to test Error and Loading states
const flakyFetch = async (url) => {
  // Sleep for a bit to simulate loading.
  await new Promise((r) => setTimeout(r, 1000));

  // 1/6 requests throw a JavaScript error
  const randomValue = Math.random() * 100;
  if (randomValue <= 16) {
    throw new Error("The server did not respond");
  }

  // 1/6 responses return an invalid response
  let response = await fetch(url);
  if (randomValue <= 32) {
    const data = { error: "Server error" };
    const blob = new Blob([JSON.stringify(data, null, 2)], {
      type: "application/json",
    });

    const init = { status: 500, statusText: "Server Error" };
    response = new Response(blob, init);
  }
  return response;
};

export const UserDetail = ({ user }) => {
  const { id: userId, name, email, website, company } = user;
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState({ happened: false, msg: "" });

  useEffect(() => {
    let ignore = false;
    // reset states
    setPosts([]);
    setIsLoading(true);
    setError({ happened: false, msg: "" });

    const fetchPosts = async () => {
      try {
        // use flakyFetch for testing purposes
        const response = await flakyFetch(
          `http://localhost:3003/users/${userId}/posts`,
        );
        const userPosts = await response.json();
        if (ignore) {
          return;
        }
        if (!response.ok) {
          setError({
            happened: true,
            msg: `${response.status}, ${response.statusText}`,
          });
          setIsLoading(false);
          return;
        }
        console.log(userPosts);

        setPosts(userPosts);
        setIsLoading(false);
      } catch (error) {
        setError({ happened: true, msg: error.message });
        setIsLoading(false);
        return;
      }
    };
    fetchPosts();

    return () => (ignore = true);
  }, [user]);

  if (error.happened) {
    return (
      <div>
        <h2>Error!</h2>
        <p>{error.msg}</p>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div>
        <h2>Loading...</h2>
      </div>
    );
  }

  return user ? (
    <div className="userDetail">
      <h2 className="userName">{name}</h2>
      <p className="userData">
        <span className="userDataType">email:</span> {email}
      </p>
      <p className="userData">
        <span className="userDataType">website:</span> {website}
      </p>
      <p className="userData">
        <span className="userDataType">company:</span> {company?.name}
      </p>
      <hr />
      <h3 className="postsSectionTitle">Posts</h3>
      <ul className="posts">
        {posts &&
          posts.map((post) => (
            <li className={"postContainer"} key={post.id}>
              <article className="post">
                <h4 className={"postTitle"}>{post.title}</h4>
                <p className={"postBody"}>{post.body}</p>
              </article>
            </li>
          ))}
      </ul>
    </div>
  ) : null;
};
