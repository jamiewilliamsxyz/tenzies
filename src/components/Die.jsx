export const Die = (props) => {
  return (
    <button
      onClick={props.hold}
      className={`die ${props.isHeld && "die-held"}`}
    >
      {props.value}
    </button>
  );
};
