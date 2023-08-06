import { useContext } from "react";
import { LibraryContext } from "./Library";
import { Category } from "./Category";

export const Books = () => {
  const { books } = useContext(LibraryContext);
  return (
    <>
      <h2>Books ({books.length}):</h2>
      <Category category={"programming"} />
    </>
  );
};
