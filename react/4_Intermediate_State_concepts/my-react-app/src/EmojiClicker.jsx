import { useState } from "react";
import { v4 as uuid } from "uuid";

function randomEmoji() {
  const choices = ["😬", "😘", "😭", "🙄", "🤪", "🤢"];
  return choices[Math.floor(Math.random() * choices.length)];
}
export default function EmojiClicker() {
  const [emojis, setEmojis] = useState([{ id: uuid(), emoji: randomEmoji() }]);
  const addEmoji = () => {
    setEmojis((prevEmojis) => [
      ...prevEmojis,
      { id: uuid(), emoji: randomEmoji() },
    ]);
  };
  const deleteEmoji = (id) => {
    setEmojis((prevEmojis) => {
      return prevEmojis.filter((e) => e.id !== id); // creates a new array that pass the condition
    });
    // use the react dev tools to verify
  };
  const makeAllHearts = () => {
    setEmojis((prevEmojis) => {
      return prevEmojis.map((e) => {
        return { ...e, emoji: "💘" };
      });
    });
  };
  return (
    <div>
      <div>
        {emojis.map((e) => (
          <span
            key={e.id}
            style={{ fontSize: "4rem", cursor: "pointer" }}
            // onClick={deleteEmoji(e.id)} This would immediately execute the function on render
            onClick={() => deleteEmoji(e.id)} // use inline arrow function as callback function
            // This ensures that deleteEmoji(e.id) only runs when the button is clicked
          >
            {e.emoji}
          </span>
        ))}
      </div>
      <button onClick={addEmoji}>Add Emoji</button>
      <button onClick={makeAllHearts}>Make all hearts</button>
    </div>
  );
}
