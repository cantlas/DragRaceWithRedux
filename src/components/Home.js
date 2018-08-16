import React from "react";
import { Link } from "react-router-dom";

const Home = () => (
  <div>
    <h1 style={{ marginTop: "40px", color: "#FF62B0" }}>
      RuPaul's Drag Race Fantasy Draft
    </h1>
    <br />
    <Link
      style={{ textDecoration: "none", color: "black" }}
      to="/BuildYourTeam"
    >
      <strong>PLAY</strong>
    </Link>
  </div>
);

export default Home;
