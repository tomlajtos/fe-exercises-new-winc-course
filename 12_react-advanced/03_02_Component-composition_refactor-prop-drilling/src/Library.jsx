import { useState } from "react";
import { collection } from "./collection";

import { Books } from "./Books";
import { Category } from "./Category";
import { Book } from "./Book";

export default () => {
  const [books, setBooks] = useState(collection.books);
  const programmingBooks = books.filter((book) =>
    book.category.includes("programming"),
  );

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
      <h1>Library (Component Composition)</h1>
      <Books amount={books.length}>
        <Category title={"Programming"} amount={programmingBooks.length}>
          {programmingBooks.map((book) => (
            <Book
              book={book}
              key={book.id}
              borrowBook={borrowBook}
              returnBook={returnBook}
            />
          ))}
        </Category>
      </Books>
    </div>
  );
};
