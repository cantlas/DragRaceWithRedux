import React from "react";

let Challenge = ({ challenge, description, skills }) => (
  <div>
    <h1>{challenge}</h1>
    <p>{description}</p>
    <ul>{skills.map(skill => <li>{skill}</li>)}</ul>
  </div>
);

export default Challenge;
