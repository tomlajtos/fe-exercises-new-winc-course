import { Category } from "./Category";

export const Books = ({ books, borrowBook, returnBook }) => {
  const programmingBooks = books.filter((book) =>
    book.category.includes("programming"),
  );
  return (
    <>
      <h2>Books: {books.length}</h2>
      <Category
        books={programmingBooks}
        borrowBook={borrowBook}
        returnBook={returnBook}
      />
    </>
  );
};
