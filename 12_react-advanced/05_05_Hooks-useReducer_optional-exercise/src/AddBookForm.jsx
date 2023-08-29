import { useLibrary } from "./LibraryContext";

export const AddBookForm = () => {
  const {
    actions: { addBook },
  } = useLibrary();

  const submitForm = (event) => {
    event.preventDefault();
    addBook({
      title: event.target.elements.title.value,
      author: event.target.elements.author.value,
      category: event.target.elements.category.value,
    });
  };

  return (
    <form onSubmit={submitForm}>
      <label htmlFor="author">Author:</label>
      <input type="text" name="author" />
      <label htmlFor="title">Title:</label>
      <input type="text" name="title" />
      <label htmlFor="category">Category:</label>
      <input type="text" name="category" />
      <button type="submit">+ Add book</button>
    </form>
  );
};
