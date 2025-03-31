import { useState } from "react";

function UsernameForm() {
  const [username, setUsername] = useState("timmy");

  const updateUsername = (evt) => {
    console.log(evt);
    setUsername(evt.target.value);
  };

  return (
    <div>
      <label htmlFor="username">Enter a username: </label>
      <input
        type="text"
        id="username"
        placeholder="username"
        value={username}
        onChange={updateUsername}
      />
      <br />
      <button>Submit</button>
    </div>
  );
}

export default UsernameForm;

// onChange updates the state when the user types.
// value ensures the input always reflects the state.
// This makes the input a controlled component, giving React full control over its behavior.
