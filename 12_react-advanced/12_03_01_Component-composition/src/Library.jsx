import { useState } from "react";
import { collection } from "./collection";

export default () => {
  const [books, setBooks] = useState(collection.books);

  const borrowBook = (id) => {
    setBooks(() =>
      books.map((book) => {
        if (id === book.id) {
          return { ...book, available: false };
        }
        return book;
      }),
    );
  };

  const returnBook = (id) => {
    setBooks(() =>
      books.map((book) => {
        if (id === book.id) {
          return { ...book, available: true };
        }
        return book;
      }),
    );
  };

  return (
    <div className="App">
      <h1>Prop Drilling and Component Composition</h1>
    </div>
  );
};
