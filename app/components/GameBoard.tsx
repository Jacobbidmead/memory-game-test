"use client";

import { useState, useEffect } from "react";

interface Icons {
  index: number;
  value: number;
}

let letters: string[] = [
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
  const [icons, setIcons] = useState([]);
  const [showIcons, setShowIcons] = useState<number[]>([]);
  const [matchedPairs, setMatchedPairs] = useState<number[]>([]);
  const [countMovies, setCountMoves] = useState<number>(0);
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
