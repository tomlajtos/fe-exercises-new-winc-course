import { Button } from "./Button";
export const Book = ({ book, borrowBook, returnBook }) => {
  const { id, title, author, available } = book;
  const titleColor = available ? "#00c853" : "#d50000";
  const buttonColor = available ? "#1b5e20" : "#b71c1c";
  return (
    <>
      <h4 style={{ color: titleColor }}>{title}</h4>
      <p>{author}</p>
      {available ? (
        <Button
          text={"Borrow"}
          color={buttonColor}
          onClick={() => borrowBook(id)}
        />
      ) : (
        <Button
          text={"Return"}
          color={buttonColor}
          onClick={() => returnBook(id)}
        />
      )}
    </>
  );
};
