import React, { useState } from "react";

const MyForm = () => {
  const [name, setName] = useState("");
  console.log(name);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setName("");
        alert(`The name is ${name}`);
      }}
    >
      <label>
        Enter Your Name:{" "}
        <input
          type="text"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <input type="submit" />
      </label>
    </form>
  );
};

export default MyForm;
