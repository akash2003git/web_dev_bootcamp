import { useState } from "react";
import "./ColorBox.css";

export default function ColorBox({ colors }) {
  const randomColor = () => colors[Math.floor(Math.random() * colors.length)];
  const [c, setC] = useState(randomColor());
  const changeColor = () => setC(randomColor());
  return (
    <div
      className="ColorBox"
      style={{ backgroundColor: c }}
      onClick={changeColor}
    ></div>
  );
}
