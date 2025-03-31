import { useState } from "react";

function BetterSignUpForm() {
  const [formData, setFormData] = useState({ username: "", password: "" });

  const handleChange = (evt) => {
    const changedField = evt.target.name;
    const newValue = evt.target.value;
    setFormData((currData) => {
      return {
        ...currData,
        [changedField]: newValue,
      };
    });
  };

  const handleSubmit = (evt) => {
    console.log(`Username: ${formData.username}`);
    console.log(`Password: ${formData.password}`);
  };

  return (
    <div>
      <label htmlFor="username">Username: </label>
      <input
        type="text"
        id="username"
        value={formData.username}
        name="username"
        onChange={handleChange}
      />
      <br />
      <label htmlFor="password">Password: </label>
      <input
        type="password"
        id="password"
        value={formData.password}
        name="password"
        onChange={handleChange}
      />
      <br />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default BetterSignUpForm;
