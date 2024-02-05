"use client";

import { useState, useEffect } from "react";

type Card = {
  index: number;
  value: string;
};

const letters: string[] = [
  "A",
  "A",
  "B",
  "B",
  "C",
  "C",
  "D",
  "D",
  "E",
  "E",
  "F",
  "F",
  "G",
  "G",
  "H",
  "H",
];

const GameBoard: React.FC = () => {
  const [cards, setCards] = useState<Card[]>([]);
  const [matchedPairs, setMatchedPairs] = useState<number[]>([]);
  const [score, setScore] = useState<number>(0);
  const [moves, setMoves] = useState<number>(0);
  const [gameStatus, setGameStatus] = useState<string>("");

  useEffect(() => {
    if (cards.length === 2) {
      setMoves((prevMoves) => prevMoves + 1);
      const [firstCard, secondCard] = cards;
      if (firstCard.value === secondCard.value) {
        setMatchedPairs((prevMatchedPairs) => [
          ...prevMatchedPairs,
          firstCard.index,
          secondCard.index,
        ]);
        setScore((prevScore) => prevScore + 1);
      }
      setTimeout(() => setCards([]), 1000); // Clear cards after 1 second
    }
  }, [cards]);

  const randomiseLetters = () => {
    const shuffledLetters = [...letters].sort(() => Math.random() - 0.5);
    return shuffledLetters;
  };

  useEffect(() => {
    randomiseLetters();
  }, []);

  return (
    <>
      <div className="grid grid-cols-4 gap-8 p-11">
        {letters.map((letter, i) => (
          <div key={i}>{letter}</div>
        ))}
      </div>
    </>
  );
};

export default GameBoard;
