import { JSX } from "react";

type DieProps = {
  id: string;
  hold: (id: string) => void;
  isHeld: boolean;
  value: number;
};

export const Die = ({ id, hold, isHeld, value }: DieProps): JSX.Element => {
  return (
    <button
      onClick={() => hold(id)}
      className={`die ${isHeld ? "die-held" : ""}`}
      aria-pressed={isHeld}
      aria-label={`Die with value ${value}, ${isHeld ? "Held" : "Not held"}`}
    >
      {value}
    </button>
  );
};
