"use client";

import { useState, useEffect } from "react";
import Scoreboard from "./Scoreboard";

type Card = {
  index: number;
  value: string;
};

const initialLetters: string[] = [
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
  const [shuffledLetters, setShuffledLetters] = useState<string[]>([]);

  useEffect(() => {
    randomiseLetters();
  }, []);

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
    const shuffledLetters = [...initialLetters].sort(() => Math.random() - 0.5);
    setShuffledLetters(shuffledLetters);
    setCards([]);
    setMatchedPairs([]);
    setScore(0);
    setMoves(0);
    setGameStatus("");
  };

  const handleShowCard = (index: number) => {
    if (
      matchedPairs.includes(index) ||
      cards.some((card) => card.index === index)
    ) {
      return;
    }

    const newCard = { index, value: shuffledLetters[index] };
    setCards((prev) => [...prev, newCard]);
  };

  useEffect(() => {
    if (matchedPairs.length === initialLetters.length) {
      setGameStatus(`Well done! You matched the letters in ${moves} moves`);
    }
  }, [matchedPairs, moves]);

  return (
    <>
      <div className=" lg:grid lg:grid-cols-2  ">
        <div className="grid lg:grid-cols-4 xs:grid-cols-4 xs:gap-1 gap-6 p-2">
          {shuffledLetters.map((letter, index) => (
            <div
              key={index}
              className="text-black rounded-md cursor-pointer p-1 flex items-center justify-center border-grey-200"
              onClick={() => handleShowCard(index)}
            >
              {matchedPairs.includes(index) ||
              cards.some((card) => card.index === index) ? (
                <span className="letter">{letter}</span>
              ) : (
                <span className="text-black">?</span>
              )}
            </div>
          ))}
        </div>
        <div className="flex flex-col items-center justify-center p-4">
          <h1 className="lg:text-6xl xs:text-4xl xs:pt-4 font-bold mb-2">
            Match the Letters
          </h1>

          <button
            onClick={randomiseLetters}
            className="px-4 py-2 lg:mt-5 xs:mt-4 lg:text-2xl xs:text-[12px] border border-gray-300 rounded-3xl"
          >
            Restart Game
          </button>
          <Scoreboard score={score} moves={moves} />
          {gameStatus && (
            <div className="game-status-message pt-5 lg:text-2xl xs:text-[18px]">
              {gameStatus}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default GameBoard;
