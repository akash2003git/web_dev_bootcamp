import { useState } from "react";

export default function ScoreKeeper() {
  const [scores, setScores] = useState({ p1Score: 0, p2Score: 0 });
  function increaseP1Score() {
    setScores((oldScore) => {
      return { ...oldScore, p1Score: oldScore.p1Score + 1 };
    });
  }
  // Remember, the spread operator (...) creates a completely new object with a unique reference.
  // If we mutated the existing state object directly, React wouldn’t detect a change because
  // state updates rely on detecting new object references. By making a copy and modifying it,
  // React correctly identifies the update and triggers a re-render.
  function increaseP2Score() {
    setScores((oldScore) => {
      return { ...oldScore, p2Score: oldScore.p2Score + 1 };
    });
  }
  return (
    <div>
      <p>Player 1: {scores.p1Score}</p>
      <p>Player 2: {scores.p2Score}</p>
      <button onClick={increaseP1Score}>+1 Player 1</button>
      <button onClick={increaseP2Score}>+2 Player 2</button>
    </div>
  );
}
