import { useState } from "react";

function SignupForm() {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");

  const updateFirstName = (evt) => {
    // console.log(evt);
    setFirstName(evt.target.value);
  };

  const updateLastName = (evt) => {
    // console.log(evt);
    setLastName(evt.target.value);
  };

  const handleSubmit = () => {
    console.log(firstname, lastname);
  };

  return (
    <div>
      <label htmlFor="firstname">Firstname: </label>
      <input
        type="text"
        id="firstname"
        placeholder="firstname"
        value={firstname}
        onChange={updateFirstName}
      />
      <br />
      <label htmlFor="lastname">Lastname: </label>
      <input
        type="text"
        id="lastname"
        placeholder="lastname"
        value={lastname}
        onChange={updateLastName}
      />
      <br />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default SignupForm;
