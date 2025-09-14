import { useState } from "react";
import { nanoid } from "nanoid";
import { Die } from "./components/Die";
import { Button } from "./components/Button";

export const App = () => {
  const generateAllNewDice = () => {
    return new Array(10).fill(0).map(() => ({
      value: Math.ceil(Math.random() * 6),
      isHeld: false,
      id: nanoid(),
    }));
  };

  const [dice, setDice] = useState(generateAllNewDice());

  const hold = (id) => {
    setDice((prevDice) =>
      prevDice.map((die) =>
        die.id === id ? { ...die, isHeld: !die.isHeld } : die
      )
    );
  };

  return (
    <main>
      <div className="dice-container">
        {dice.map((dieObj) => (
          <Die
            key={dieObj.id}
            value={dieObj.value}
            isHeld={dieObj.isHeld}
            hold={() => hold(dieObj.id)}
          />
        ))}
      </div>
      <Button onClick={() => setDice(generateAllNewDice)}>Roll</Button>
    </main>
  );
};
