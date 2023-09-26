import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import { Root } from "./Root";
import { NewPost, loader as newPostLoader } from "./NewPost";
import { Post, loader as postLoader } from "./Post";
import { PostList, loader as postListLoader } from "./PostList";
import { User, loader as userLoader } from "./User";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      // PostList has the same path as its parent, Root '/' >>> PostList
      // will render in place of Outlet in Root by default
      { path: "/", element: <PostList />, loader: postListLoader },
      { path: "/user/:userId", element: <User />, loader: userLoader },
      { path: "/post/:postId", element: <Post />, loader: postLoader },
      { path: "/post/new", element: <NewPost />, loader: newPostLoader },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("app")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
