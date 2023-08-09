import { useContext } from "react";
import { LibraryContext } from "./LibraryContext";

export const useLibrary = () => {
  const context = useContext(LibraryContext);
  if (!context) {
    throw new Error("useLibrary muxt be used within a LibraryContextProvider");
  }
  return context;
};
