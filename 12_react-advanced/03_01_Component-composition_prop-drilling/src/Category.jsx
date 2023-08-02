import { Book } from "./Book";

export const Category = ({ books, borrowBook, returnBook }) => {
  return (
    <>
      <h3>Programming: {books.length}</h3>
      {books.map((book) => (
        <Book
          book={book}
          key={book.id}
          borrowBook={borrowBook}
          returnBook={returnBook}
        />
      ))}
    </>
  );
};
