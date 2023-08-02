export const Category = ({ title, amount, children }) => {
  return (
    <>
      <h3>{title}</h3>
      <p>{`(there are ${amount} books in this category)`}</p>
      <hr style={{ opacity: 0.2 }} />
      {children}
    </>
  );
};
