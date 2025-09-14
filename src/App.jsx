import { useState } from "react";
import { nanoid } from "nanoid";
import { Die } from "./components/Die";
import { Button } from "./components/Button";

export const App = () => {
  const generateDieValue = () => {
    return Math.ceil(Math.random() * 6);
  };

  const generateAllNewDice = () => {
    return new Array(10).fill(0).map(() => ({
      value: generateDieValue(),
      isHeld: false,
      id: nanoid(),
    }));
  };

  const rollDice = () => {
    setDice((prevDice) =>
      prevDice.map((die) =>
        die.isHeld ? die : { ...die, value: generateDieValue() }
      )
    );
  };

  const hold = (id) => {
    setDice((prevDice) =>
      prevDice.map((die) =>
        die.id === id ? { ...die, isHeld: !die.isHeld } : die
      )
    );
  };

  const [dice, setDice] = useState(generateAllNewDice());

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
      <Button onClick={rollDice}>Roll</Button>
    </main>
  );
};
