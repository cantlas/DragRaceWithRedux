import React from "react";
import { connect } from "react-redux";

let Queen = ({ selected_queen }) => <h1>{selected_queen}</h1>;

const mapStateToProps = state => {
  return {
    selected_queen: state.selected_queen
  };
};

Queen = connect(mapStateToProps)(Queen);

export default Queen;
