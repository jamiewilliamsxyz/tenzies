import { nanoid } from "nanoid";
import type { DieType } from "./types";

export const generateAllNewDice = (): DieType[] => {
  return new Array(10).fill(0).map(() => ({
    value: generateDieValue(),
    isHeld: false,
    id: nanoid(),
  }));
};

export const generateDieValue = (): number => {
  return Math.ceil(Math.random() * 6);
};
