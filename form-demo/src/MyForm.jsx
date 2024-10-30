import React, { useState } from "react";

const MyForm = () => {
  const [name, setName] = useState("");
  return (
    <form>
      <label>
        Enter Your Name:{" "}
        <input
          type="text"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <button
          onClick={(e) => {
            e.preventDefault();
            alert(`The name is ${name}`);
          }}
        >
          Submit
        </button>
      </label>
    </form>
  );
};

export default MyForm;
