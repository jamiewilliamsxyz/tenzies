import { useState } from "react";
import { Die } from "./components/Die";
import { Button } from "./components/Button";

export const App = () => {
  const generateAllNewDice = () => {
    return new Array(10).fill(0).map(() => Math.ceil(Math.random() * 6));
  };

  const [newDice, setNewDice] = useState(generateAllNewDice());

  return (
    <main>
      <div className="dice-container">
        {newDice.map((num) => (
          <Die value={num} />
        ))}
      </div>
      <Button onClick={() => setNewDice(generateAllNewDice)}>Roll</Button>
    </main>
  );
};
