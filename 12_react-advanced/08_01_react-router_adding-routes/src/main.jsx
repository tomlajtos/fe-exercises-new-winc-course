import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import "./index.css";

const router = createBrowserRouter([
  { path: "/", element: <PostList /> },
  { path: "/user/:userId", element: <User /> },
  { path: "/post/:postId", element: <Post /> },
  { path: "/post/new", element: <NewPost /> },
]);

ReactDOM.createRoot(document.getElementById("app")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
