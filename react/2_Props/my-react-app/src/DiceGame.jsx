export default function DiceGame() {
  const a = Math.floor(Math.random() * 3) + 1;
  const b = Math.floor(Math.random() * 3) + 1;
  const isWinner = a === b;
  const styles = { color: isWinner ? "green" : "red" };

  return (
    <div style={styles}>
      <h2>Dice Game</h2>
      {isWinner ? <h3>You Win!</h3> : <h3>You Lose :(</h3>}
      {/* {a === b && <h3>You Win!</h3>} */}
      <p>Num1 = {a}</p>
      <p>Num2 = {b}</p>
    </div>
  );
}

// Remeber in css if we have 'font-size' in js we will have to do camel case
// Hence we will be using 'fontSize'
