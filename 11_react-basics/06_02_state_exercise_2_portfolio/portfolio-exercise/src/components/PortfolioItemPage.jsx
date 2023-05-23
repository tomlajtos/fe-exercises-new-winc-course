export const PortfolioItemPage = ({ item }) => {
  return (
    <>
      <h2>{item.title}</h2>
      <p>{item.description}</p>
      <img src={item.imageUrl} alt={item.title} style={{ width: "350px" }} />
    </>
  );
};
