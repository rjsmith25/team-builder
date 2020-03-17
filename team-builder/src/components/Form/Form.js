import React, { useState } from "react";

function Form(props) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: ""
  });

  function onInputChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }

  function onSubmitData(e) {
    e.preventDefault();
    if (formData.name && formData.email && formData.role) {
      props.setTeam([...props.team, formData]);
      setFormData({ name: "", email: "", role: "" });
    }
  }

  return (
    <form onSubmit={onSubmitData} className="teamMate-Form">
      <input
        name="name"
        value={formData.name}
        type="text"
        placeholder="Enter Name"
        onChange={onInputChange}
      />
      <input
        name="email"
        value={formData.email}
        type="text"
        placeholder="Enter Email"
        onChange={onInputChange}
      />
      <input
        name="role"
        value={formData.role}
        type="text"
        placeholder="Enter Role"
        onChange={onInputChange}
      />
      <button className="submit">Add New TeamMate</button>
    </form>
  );
}

export default Form;
