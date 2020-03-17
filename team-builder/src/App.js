import React, { useState } from "react";
import "./App.css";
import TeamMate from "./components/TeamMate/TeamMate.js";
import Form from "./components/Form/Form.js";

function App() {
  const [team, setTeam] = useState([
    {
      name: "Joe Holt",
      email: "jholt@email.com",
      role: "backend engineer"
    },
    {
      name: "Stacey Patterson",
      email: "spatterson@email.com",
      role: "frontend engineer"
    },
    {
      name: "Marshall Anderson",
      email: "manderson@email.com",
      role: "designer"
    }
  ]);

  return (
    <div className="App">
      <div className="container">
        <Form team={team} setTeam={setTeam} />
      </div>
      <h2 className="title">Team Mates</h2>
      <div className="container">
        {team.map(teamMate => {
          return (
            <TeamMate
              name={teamMate.name}
              email={teamMate.email}
              role={teamMate.role}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
