import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

let Queen = ({ selected_queen }) => (
  <div>
    You have selected:<br />
    <h1>{selected_queen}</h1>
    <br />
    GOODLUCK... and DON'T FUCK IT UP!
    <Link to="/Battle">START</Link>
  </div>
);

const mapStateToProps = state => {
  return {
    selected_queen: state.selected_queen
  };
};

Queen = connect(mapStateToProps)(Queen);

export default Queen;
