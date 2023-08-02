//TODO: inline styles should be moved to index.css or a more specific css file
export const Button = ({ text, color, onClick }) => {
  return (
    <button
      type={"button"}
      style={{ backgroundColor: color }}
      onClick={onClick}
    >
      {text}
    </button>
  );
};
