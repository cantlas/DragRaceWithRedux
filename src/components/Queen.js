import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

let Queen = ({ selected_queen }) => (
  <div style={{ paddingTop: "20px" }}>
    You have selected:<br />
    <h1 style={{ color: "#FF62B0" }}>{selected_queen}</h1>
    <h3 style={{ color: "grey" }}>
      <i>Goodluck... and DON'T FUCK IT UP!</i>
    </h3>
    <br />
    <Link style={{ textDecoration: "none", color: "black" }} to="/Battle">
      <strong>START</strong>
    </Link>
  </div>
);

const mapStateToProps = state => {
  return {
    selected_queen: state.selected_queen
  };
};

Queen = connect(mapStateToProps)(Queen);

export default Queen;
