import { createContext, useContext, useReducer } from "react";
import { collection } from "./collection";

export const LibraryContext = createContext({});

LibraryContext.displayName = "LibraryContext";

const libraryReducer = (state, action) => {
  switch (action.type) {
    case "borrow_book": {
      return state.map((item) =>
        item.id === action.id ? { ...item, available: false } : item,
      );
    }
    case "return_book": {
      return state.map((item) =>
        item.id === action.id ? { ...item, available: true } : item,
      );
    }
    case "remove_book": {
      return state.filter((item) => item.id !== action.id);
    }
    case "add_book": {
      const lastItem = state.at(-1);
      const newId = lastItem ? lastItem.id + 1 : 1;
      const item = {
        id: newId,
        title: action.title,
        author: action.author,
        category: action.category.toLowerCase(),
        available: true,
      };
      return [...state, item];
    }
    default: {
      return state;
    }
  }
};

export const LibraryContextProvider = ({ children }) => {
  const [books, dispatch] = useReducer(libraryReducer, collection.books);

  const borrowBook = (id) => {
    dispatch({ type: "borrow_book", id });
  };

  const returnBook = (id) => {
    dispatch({ type: "return_book", id });
  };

  const removeBook = (id) => {
    dispatch({ type: "remove_book", id });
  };

  const addBook = (props) => {
    dispatch({ type: "add_book", ...props });
  };

  const actions = { borrowBook, returnBook, removeBook, addBook };

  return (
    <LibraryContext.Provider value={{ books, actions }}>
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
