import { useContext } from "react";
import { BooksBorrowedContext } from "./Contexts";

export const Books = ({ amount, children }) => {
  const { booksBorrowed } = useContext(BooksBorrowedContext);
  console.log(booksBorrowed);
  const borrowedPer = booksBorrowed.length
    ? (booksBorrowed.length / amount) * 100
    : 0;
  return (
    <>
      <h2>Books ({amount}):</h2>
      <p>Borrowed {borrowedPer}%</p>
      {children}
    </>
  );
};
