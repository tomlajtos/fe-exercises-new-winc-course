import { useState, useEffect } from "react";

export const UserDetail = ({ user }) => {
  useEffect(() => {
    let ignore = false;
    const fetchPosts = async () => {
      const response = await fetch(
        `http://localhost:3003/users/${user.id}/posts`,
      );
      const posts = await response.json();
      if (!ignore) {
        console.log(posts);
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
    </div>
  ) : null;
};
