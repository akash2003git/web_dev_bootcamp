import "./App.css";
import Greeter from "./Greeter";
import Die from "./Die";
import DiceGame from "./DiceGame";
import ColorList from "./ColorList";
import Slots from "./Slots";
import ShoppingList from "./ShoppingList";
import PropertyList from "./PropertyList";
import Clicker from "./Clicker";
import Form from "./Form";

// Props are like arguments we can provide to our compnents.
// We use props to make our configurable components.

const data = [
  { id: 1, item: "milk", quantity: 2, completed: false },
  { id: 2, item: "bread", quantity: 1, completed: true },
  { id: 3, item: "apples", quantity: 6, completed: false },
  { id: 4, item: "chicken", quantity: 1, completed: true },
  { id: 5, item: "rice", quantity: 2, completed: false },
];

const properties = [
  { id: 101, name: "Mountain Cabin", rating: 4.7, price: 120 },
  { id: 102, name: "Lakeview Lodge", rating: 4.8, price: 200 },
  { id: 103, name: "Beachfront Bungalow", rating: 4.9, price: 250 },
  { id: 104, name: "Forest Treehouse", rating: 4.6, price: 180 },
  { id: 105, name: "Urban Loft", rating: 4.5, price: 130 },
  { id: 106, name: "Desert Yurt", rating: 4.9, price: 150 },
];

function App() {
  return (
    <div>
      <Clicker />
      <br />
      <Form />
      {/* <PropertyList properties={properties} /> */}
      {/* <ShoppingList items={data} /> */}
      {/* <Greeter person="Akash" from="Jimmy" /> */}
      {/* <Greeter /> */}
      {/* <Die numSides={20} /> */}
      {/* <DiceGame /> */}
      {/* <DiceGame /> */}
      {/* <DiceGame /> */}
      {/* <ColorList colors={["red", "green", "blue"]} /> */}
      {/* <Slots val1="$" val2="$" val3="$" /> */}
      {/* <Slots val1="$" val2="#" val3="$" /> */}
    </div>
  );
}

// we can also pass arrays and objects inside {}
// example of array: {[1, 2, 3]}
// example of object: {[1:"a", 2:"b", 3:"c"]}

export default App;
