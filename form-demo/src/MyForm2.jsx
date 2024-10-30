import React, { useState } from "react";

const MyForm2 = () => {
  const [formData, setFormData] = useState({ name: "", age: "" });
  function handleInputChange(e) {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  }
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setFormData({ name: "", age: "" });
        console.log(formData);
      }}
    >
      <label>
        Enter your Name:
        <input
          name="name"
          type="text"
          onChange={handleInputChange}
          value={formData.name}
        />
      </label>
      <br />
      <label>
        Enter your Age:
        <input
          type="number"
          name="age"
          onChange={handleInputChange}
          value={formData.age}
        />
      </label>
      <br />
      <input type="submit" />
    </form>
  );
};

export default MyForm2;
