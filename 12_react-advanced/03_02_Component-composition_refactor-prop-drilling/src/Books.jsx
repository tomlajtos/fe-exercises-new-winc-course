import { Category } from "./Category";

export const Books = ({ books, borrowBook, returnBook }) => {
  const programmingBooks = books.filter((book) =>
    book.category.includes("programming"),
  );
  return (
    <>
      <h2>Books</h2>
      <p>{`(there are ${books.length} books in the library)`}</p>
      <hr style={{ opacity: 0.4 }} />

      <Category
        books={programmingBooks}
        title={"Programming"}
        borrowBook={borrowBook}
        returnBook={returnBook}
      />
    </>
  );
};
