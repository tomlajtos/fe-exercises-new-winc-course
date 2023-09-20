import { Link } from "react-router-dom";

export const Navigation = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/post/new"}>New Post</Link>
        </li>
      </ul>
    </div>
  );
};
