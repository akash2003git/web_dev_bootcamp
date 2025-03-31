import { useState, useEffect } from "react";

function Counter() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  useEffect(
    function myEffect() {
      console.log("MY EFFECT WAS CALLED!");
    },
    [count1],
  );

  // Normally effect is run whenever the component re-renders
  // Here we specified a dependency for count1. so now myEffect() is only run for count1
  // If we provide an empty array [], effect only is run once

  const increment1 = () => {
    setCount1((c) => c + 1);
  };

  const increment2 = () => {
    setCount2((c) => c + 1);
  };

  return (
    <div>
      <h1>{count1}</h1>
      <button onClick={increment1}>+1</button>
      <h1>{count2}</h1>
      <button onClick={increment2}>+1</button>
    </div>
  );
}

export default Counter;
