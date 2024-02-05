"use client";

import { useState, useEffect } from "react";

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
