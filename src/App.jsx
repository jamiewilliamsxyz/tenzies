import { useState } from "react";
import { nanoid } from "nanoid";
import { Die } from "./components/Die";
import { Button } from "./components/Button";

export const App = () => {
  const generateAllNewDice = () => {
    return new Array(10)
      .fill(0)
      .map(() => ({
        value: Math.ceil(Math.random() * 6),
        isHeld: true,
        id: nanoid(),
      }));
  };

  const [newDice, setNewDice] = useState(generateAllNewDice());

  return (
    <main>
      <div className="dice-container">
        {newDice.map((dieObj) => (
          <Die key={dieObj.id} value={dieObj.value} />
        ))}
      </div>
      <Button onClick={() => setNewDice(generateAllNewDice)}>Roll</Button>
    </main>
  );
};
