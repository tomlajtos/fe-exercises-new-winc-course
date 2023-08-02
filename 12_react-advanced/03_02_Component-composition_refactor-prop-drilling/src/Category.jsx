import { Book } from "./Book";

export const Category = ({ books, title, borrowBook, returnBook }) => {
  return (
    <>
      <h3>{title}</h3>
      <p>{`(there are ${books.length} books in this category)`}</p>
      <hr style={{ opacity: 0.2 }} />
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
