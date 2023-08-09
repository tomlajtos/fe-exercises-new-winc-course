//TODO: book is also in context acording to course material, will learn more about it later

import { useLibrary } from "./useLibrary";
// import { LibraryContext } from "./LibraryContext";

export const Book = ({ book }) => {
  const { borrowBook, returnBook } = useLibrary();
  return (
    <>
      <h4>📖 {book.title}</h4>
      <p>✍ {book.author}</p>
      {book.available ? (
        <button type="button" onClick={() => borrowBook(book.id)}>
          ⇩ Borrow
        </button>
      ) : (
        <button type="button" onClick={() => returnBook(book.id)}>
          ⏎ Return
        </button>
      )}
    </>
  );
};
