import { useState, useEffect } from "react";

let letters = [
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
  "H",
  "H",
];

const GameBoard: React.FC = () => {
  return (
    <>
      <div>
        {letters.map((letter, i) => (
          <div key={i}>{letter}</div>
        ))}
      </div>
    </>
  );
};

export default GameBoard;
