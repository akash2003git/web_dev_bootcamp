function handleClick() {
  console.log("BUTTON CLICKED!");
}

function handleHover() {
  console.log("BUTTON HOVERED OVER!");
}

export default function Clicker() {
  return (
    <div>
      <p>Click the button</p>
      <button onClick={handleClick} onMouseOver={handleHover}>
        Click me!
      </button>
    </div>
  );
}
