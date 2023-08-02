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
