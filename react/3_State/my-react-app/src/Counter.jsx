import { useState } from "react";

export default function Counter() {
  const [num, setNum] = useState(5);
  console.log("COMPONENT HAS BEEN EXECUTED AGAIN!");
  console.log(`num: ${num}`);
  const changeNum = () => {
    setNum(num + 1); // This is queued till changeNum has finished execution
    console.log("SET NUM HAS RUN!");
    console.log(`num: ${num}`);
  };
  return (
    <div>
      <p>The count is: {num}</p>
      <button onClick={changeNum}>Increment</button>
    </div>
  );
}

// Within a component if you have data that needs to be changed you need to use
// state

// useState() is hook we use that comes with react to add a state variable
// into a component
// useState() needs to be called in a react component only
// It returns an array with two elements. This first element is the value or the
// piece of state and the second element is a fucntion to change the piece of
// state.

// React state updates are asynchronous.
// Logging inside the same function where setState is called will show the old value.
// Use useEffect to log the updated value after re-render.
// Use functional updates (setNum(prev => prev + 1)) to work with the latest state.
