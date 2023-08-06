import { useContext } from "react";
import { LibraryContext } from "./Library";
import { Book } from "./Book";

export const Category = ({ category }) => {
  const { books } = useContext(LibraryContext);
  return (
    <>
      <h3>
        {title} ({books.length}):
      </h3>
      {books
        .filter((book) => book.category === category)
        .map((book) => (
          <Book key={book.id} book={book} />
        ))}
    </>
  );
};
