import "./App.css";
import Counter from "./Counter";
import Dumbo from "./Dumbo";
import ScoreKeeper from "./ScoreKeeper";
import EmojiClicker from "./EmojiClicker";
import CompScore from "./CompScore";

function App() {
  return (
    <div>
      {/* <Counter /> */}
      {/* <Dumbo /> */}
      {/* <ScoreKeeper /> */}
      {/* <EmojiClicker /> */}
      <CompScore numPlayers={3} target={5} />
    </div>
  );
}

export default App;
