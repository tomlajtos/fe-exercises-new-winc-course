import { useLibrary } from "./useLibrary";
// import { LibraryContext } from "./LibraryContext";
import { Category } from "./Category";

export const Books = () => {
  const { books } = useLibrary();
  return (
    <>
      <h2>Books ({books.length}):</h2>
      <Category category={"programming"} />
    </>
  );
};
