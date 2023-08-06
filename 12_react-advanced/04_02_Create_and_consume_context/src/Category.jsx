import { Book } from "./Book";

export const Category = ({ title, books, borrowBook, returnBook }) => {
  return (
    <>
      <h3>
        {title} ({books.length}):
      </h3>
      {books.map((book) => (
        <Book
          key={book.id}
          book={book}
          borrowBook={borrowBook}
          returnBook={returnBook}
        />
      ))}
    </>
  );
};
