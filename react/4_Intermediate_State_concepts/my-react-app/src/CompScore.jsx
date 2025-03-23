import { useState } from "react";

export default function CompScore({ numPlayers, target }) {
  const [scores, setScores] = useState(
    Array.from({ length: numPlayers }, (_, i) => ({ id: i, score: 0 })),
  );

  const incrementScore = ()
  return (
    <div>
      <ul>
        {scores.map((s) => (
          <li>
            Player {s.id + 1}: {s.score}
            <button>+1</button>
          </li>
        ))}
      </ul>
      <button>Reset</button>
    </div>
  );
}
