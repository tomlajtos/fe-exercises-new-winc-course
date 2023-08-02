export const Books = ({ amount, children }) => {
  return (
    <>
      <h2>Books</h2>
      <p>{`(there are ${amount} books in the library)`}</p>
      <hr style={{ opacity: 0.4 }} />
      {children}
    </>
  );
};
