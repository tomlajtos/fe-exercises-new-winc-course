import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import { Root } from "./Root";
import { NewPost } from "./NewPost";
import { Post } from "./Post";
import { PostList } from "./PostList";
import { User } from "./User";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      // PostList has the same path as its parent, Root '/' >>> PostList
      // will render in place of Outlet in Root by default
      { path: "/", element: <PostList /> },
      { path: "/user/:userId", element: <User /> },
      { path: "/post/:postId", element: <Post /> },
      { path: "/post/new", element: <NewPost /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("app")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
