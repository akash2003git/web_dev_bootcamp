import "./App.css";
import Greeter from "./Greeter";
import Die from "./Die";
import DiceGame from "./DiceGame";
import ColorList from "./ColorList";
import Slots from "./Slots";

// Props are like arguments we can provide to our compnents.
// We use props to make our configurable components.

function App() {
  return (
    <div>
      {/* <Greeter person="Akash" from="Jimmy" /> */}
      {/* <Greeter /> */}
      {/* <Die numSides={20} /> */}
      {/* <DiceGame /> */}
      {/* <DiceGame /> */}
      {/* <DiceGame /> */}
      {/* <ColorList colors={["red", "green", "blue"]} /> */}
      <Slots val1="$" val2="$" val3="$" />
      <Slots val1="$" val2="#" val3="$" />
    </div>
  );
}

// we can also pass arrays and objects inside {}
// example of array: {[1, 2, 3]}
// example of object: {[1:"a", 2:"b", 3:"c"]}

export default App;
