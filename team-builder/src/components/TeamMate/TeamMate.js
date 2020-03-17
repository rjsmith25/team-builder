import React from "react";

function TeamMate({ name, email, role }) {
  return (
    <div className="teamMate">
      <p>Name: {name}</p>
      <p>Email: {email}</p>
      <p>Role: {role}</p>
    </div>
  );
}

export default TeamMate;
