import { useState } from "react";

export default function CompScore({ numPlayers = 3, target = 5 }) {
  const [scores, setScores] = useState(
    Array.from({ length: numPlayers }, (_, i) => ({ id: i, score: 0 })),
  );
  const [hasWon, setHasWon] = useState(false);

  const incrementScore = (id) => {
    if (!hasWon) {
      setScores((prevScores) => {
        return prevScores.map((pScore) => {
          if (pScore.id === id) {
            const newScore = pScore.score + 1;
            if (newScore >= target) {
              setHasWon((prev) => true);
            }
            return { ...pScore, score: newScore };
          } else {
            return pScore;
          }
        });
      });
    }
  };

  const resetScore = () => {
    setScores((prevScores) => {
      return prevScores.map((pScore) => {
        return { ...pScore, score: 0 };
      });
    });
    setHasWon((prev) => false);
  };

  return (
    <div>
      <h1>Score Keeper</h1>
      <ul>
        {scores.map((s) => (
          <li key={s.id}>
            Player {s.id + 1}: {s.score}
            <button onClick={() => incrementScore(s.id)}>+1</button>
            {s.score >= target && " WINNER!"}
          </li>
        ))}
      </ul>
      <button onClick={resetScore}>Reset</button>
    </div>
  );
}
