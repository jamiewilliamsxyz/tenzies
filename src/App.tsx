import { useState } from "react";
import { JSX } from "react";
import { useWindowSize } from "react-use";
import Confetti from "react-confetti";
import { Die } from "./components/Die";
import { Button } from "./components/Button";
import type { DieType } from "./types";
import { generateAllNewDice, generateDieValue } from "./utils";

export const App = (): JSX.Element => {
  const rollDice = (): void => {
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

  const hold = (id: string): void => {
    setDice((prevDice) =>
      prevDice.map((die) =>
        die.id === id ? { ...die, isHeld: !die.isHeld } : die
      )
    );
  };

  const [dice, setDice] = useState<DieType[]>(() => generateAllNewDice());

  const { width, height }: { width: number; height: number } = useWindowSize();

  const allHeld = dice.every((die) => die.isHeld);
  const allSameValue = dice.every((die) => die.value === dice[0].value);
  const gameWon = allHeld && allSameValue;

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
            id={dieObj.id}
            value={dieObj.value}
            isHeld={dieObj.isHeld}
            hold={hold}
          />
        ))}
      </div>

      <Button onClick={rollDice}>{gameWon ? "New Game" : "Roll"}</Button>
    </main>
  );
};
