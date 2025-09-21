export const Die = (props) => {
  return (
    <button
      onClick={props.hold}
      className={`die ${props.isHeld && "die-held"}`}
      aria-pressed={props.isHeld}
      aria-label={`Die with value ${props.value}, ${
        props.isHeld ? "Held" : "Not held"
      }`}
    >
      {props.value}
    </button>
  );
};
