import { useState } from "react";
import { nanoid } from "nanoid";
import { useWindowSize } from "react-use";
import Confetti from "react-confetti";
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
    if (!gameWon) {
      setDice((prevDice) =>
        prevDice.map((die) =>
          die.isHeld ? die : { ...die, value: generateDieValue() }
        )
      );
    } else {
      setDice(generateAllNewDice);
    }
  };

  const hold = (id) => {
    setDice((prevDice) =>
      prevDice.map((die) =>
        die.id === id ? { ...die, isHeld: !die.isHeld } : die
      )
    );
  };

  const [dice, setDice] = useState(() => generateAllNewDice());
  const { width, height } = useWindowSize();
  const gameWon =
    dice.every((die) => die.isHeld) &&
    dice.every((die) => die.value === dice[0].value);

  return (
    <main>
      {gameWon && <Confetti width={width} height={height} />}
      <div aria-live="polite" className="sr-only">
        {gameWon && (
          <p>Congratulations! You won! Press "New Game" to start again.</p>
        )}
      </div>

      <header>
        <h1>Tenzies</h1>
        <p>
          Roll until all dice are the same. Click each die to freeze it at its
          current value between rolls.
        </p>
      </header>

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

      <Button onClick={rollDice}>{gameWon ? "New Game" : "Roll"}</Button>
    </main>
  );
};
