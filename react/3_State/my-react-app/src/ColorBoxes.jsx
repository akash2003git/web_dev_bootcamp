import ColorBox from "./ColorBox";
import "./ColorBox.css";

export default function ColorBoxes() {
  const colors = [
    "#A32CC4",
    "#F28C28",
    "#2E8B57",
    "#FFD700",
    "#FF4500",
    "#6A5ACD",
    "#20B2AA",
    "#FF1493",
    "#4682B4",
    "#B22222",
  ];
  return (
    <div className="ColorBoxes">
      {Array.from({ length: 25 }).map((_, i) => (
        <ColorBox key={i} colors={colors} />
      ))}
    </div>
  );
}
