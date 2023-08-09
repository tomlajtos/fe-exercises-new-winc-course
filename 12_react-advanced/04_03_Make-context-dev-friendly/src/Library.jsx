// TODO: clarify Context import comment in course material
// reffering to files importing things from eachother? -
// description on how to import L.context is super unclear and results in an error as well

import { useState } from "react";
import { collection } from "./collection";
import { LibraryContext } from "./LibraryContext";
import { Books } from "./Books";

function Library() {
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
  return (
    <div className="App">
      <h1>Library</h1>
      <LibraryContext.Provider value={{ books, borrowBook, returnBook }}>
        <Books />
      </LibraryContext.Provider>
    </div>
  );
}

export default Library;
