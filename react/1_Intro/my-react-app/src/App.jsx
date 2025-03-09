import "./styles.css";
import "./Alg.css";
import Greeter from "./Greeter";
import Dog from "./Dog";
import { Add, Sub } from "./Alg";
import LoginForm from "./LoginForm";
import RandomPokemon from "./RandomPokemon";

const add = Add(1, 2);
const sub = Sub(2, 1);

export default function App() {
  return (
    <div className="App">
      <Greeter />
      <Dog />
      <LoginForm />
      <br />
      <p className="Alg">1 + 2 = {add}</p>
      <p className="Alg">2 - 1 = {sub}</p>
      <br />
      <RandomPokemon />
      <RandomPokemon />
    </div>
  );
}
