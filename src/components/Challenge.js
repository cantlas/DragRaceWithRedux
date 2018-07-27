import React from "react";

let Challenge = ({ challenge, description, skills }) => (
  <div>
    <h1>"{challenge}"</h1>
    <p>{description}</p>
    <ul style={{ paddingLeft: 0 }}>
      {skills.map(skill => (
        <li
          style={{
            display: "inline-block",
            fontSize: "16px",
            margin: "0 5px 0 5px",
            padding: "2px 10px 4px 10px",
            color: "white",
            background: "#FF62B0",
            borderRadius: "5px"
          }}
        >
          {skill}
        </li>
      ))}
    </ul>
  </div>
);

export default Challenge;
