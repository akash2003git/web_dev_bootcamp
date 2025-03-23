import { useState } from "react";

export default function Counter() {
  console.log("RENDERED!");
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  const addThree = () => {
    setCount(count + 1);
    // console.log(count);
    setCount(count + 1);
    setCount(count + 1);
  };
  // This will only increment count by 1 instead of 3 because React batches state updates
  // when using the same state value (count). Since count does not update immediately,
  // all three setCount calls use the same stale value (i.e. 0) of count.
  // To correctly increment by 3,
  // we should use the functional form of setCount like this:
  const addThreeCorrectly = () => {
    setCount((prevCount) => prevCount + 1);
    // console.log(count);
    setCount((prevCount) => prevCount + 1);
    setCount((prevCount) => prevCount + 1);
  };
  // This function works correctly because React provides the latest state value (prevCount)
  // in each setCount call. Instead of relying on a stale count value, each update receives
  // the most recent state, ensuring the count increments properly by 3.
  // Remember, React batches these updates together, meaning the component does not
  // re-render after each setCount call. Instead, all three updates are processed in one
  // render cycle, so count remains the old value inside the function until the re-render happens.

  const setToTen = () => {
    setCount(10);
  };
  // React won’t trigger a re-render if the new state value is the same as the previous one.
  // If count is already 10, calling setCount(10) again won’t cause a re-render because
  // React optimizes state updates by skipping updates that don’t change the state.

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={incrementCount}>+1</button>
      {/* <button onClick={addThree}>+3</button> */}
      <button onClick={addThreeCorrectly}>+3</button>
      <button onClick={setToTen}>Set to 10</button>
    </div>
  );
}
