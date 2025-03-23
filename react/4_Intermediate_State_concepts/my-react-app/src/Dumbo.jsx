import { useState } from "react";

function generateGameBoard() {
  console.log("MAKING A GAMEBOARD!");
  return Array(5000);
}

export default function Dumbo() {
  const [board, setBoard] = useState(generateGameBoard); // runs generateGameBoard only once
  // const [board, setBoard] = useState(generateGameBoard()); // runs generateGameBoard on every re-render
  return (
    <button onClick={() => setBoard("hello")}>
      Click me to change the state
    </button>
  );
}
