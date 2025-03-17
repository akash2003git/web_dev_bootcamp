// export default function Greeter(props) {
//   // console.log(props.person);
//   return <h1>Hi there, {props.person}!!!</h1>;
// }

export default function Geeter({ person = "everyone", from = "anon" }) {
  return (
    <>
      <h1>Hi there, {person}!!!</h1>
      <h2>-{from}</h2>
    </>
  );
}

// Props are like arguments we can provide to our compnents.
// We use props to make our configurable components.
