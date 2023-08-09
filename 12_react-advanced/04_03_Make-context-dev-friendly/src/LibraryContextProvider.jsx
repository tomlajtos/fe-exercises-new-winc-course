import { useState } from "react";
import { LibraryContext } from "./LibraryContext";
import { collection } from "./collection";

export const LibraryContextProvider = ({ children }) => {
  const [books, setBooks] = useState(collection.books);

  const borrowBook = (id) => {
    const newBooks = books.map((book) =>
      book.id === id ? { ...book, available: false } : book,
    );
    return setBooks(newBooks);
  };

  const returnBook = (id) => {
    const newBooks = books.map((book) =>
      book.id === id ? { ...book, available: true } : book,
    );
    return setBooks(newBooks);
  };

  const value = { books, borrowBook, returnBook };

  return (
    <LibraryContext.Provider value={value}>{children}</LibraryContext.Provider>
  );
};
