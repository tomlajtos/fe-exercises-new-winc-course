import { createContext, useContext, useState, useReducer } from "react";
import { collection } from "./collection";

export const LibraryContext = createContext({});

LibraryContext.displayName = "LibraryContext";

export const LibraryContextProvider = ({ children }) => {
  // const [books, setBooks] = useState(collection.books);
  const [books, dispatch] = useReducer(libraryReducer, collection.books);

  // const borrowBook = (id) => {
  //   const newBooks = books.map((book) =>
  //     book.id === id ? { ...book, available: false } : book,
  //   );
  //   return setBooks(newBooks);
  // };
  const borrowBook = (id) => {
    dispatch({ type: "borrow_book", id });
  };

  // const returnBook = (id) => {
  //   const newBooks = books.map((book) =>
  //     book.id === id ? { ...book, available: true } : book,
  //   );
  //   return setBooks(newBooks);
  // };
  const returnBook = (id) => {
    dispatch({ type: "return_book", id });
  };

  const removeBook = (id) => {
    dispatch({ type: "remove_book", id });
  };

  return (
    <LibraryContext.Provider
      value={{ books, borrowBook, returnBook, removeBook }}
    >
      {children}
    </LibraryContext.Provider>
  );
};

export const useLibrary = () => {
  const context = useContext(LibraryContext);
  if (!context) {
    throw new Error("useLibrary must be used within a LibraryContextProvider");
  }
  return context;
};

const libraryReducer = (state, action) => {
  switch (action.type) {
    case "borrow_book": {
      return state.map((item) => {
        if (item.id === action.id) {
          return {
            ...item,
            available: false,
          };
        }
        return item;
      });
    }
    case "return_book": {
      return state.map((item) => {
        if (item.id === action.id) {
          return {
            ...item,
            available: true,
          };
        }
        return item;
      });
    }
    case "remove_book": {
      return state.filter((item) => item.id !== action.id);
    }
    default: {
      return state;
    }
  }
};
