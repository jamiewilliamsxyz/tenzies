export const Die = (props) => {
  return (
    <button className={`die ${props.isHeld && "die-held"}`}>
      {props.value}
    </button>
  );
};
