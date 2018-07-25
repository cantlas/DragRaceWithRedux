import React from "react";
import { connect } from "react-redux";
import { selectQueen } from "../actions";
import Queen from "./Queen";

let SelectQueen = ({ team, selectQueen, history }) => (
  <div>
    <ul>
      {team.map(queen => (
        <li onClick={() => selectQueen(queen.name, history)}>{queen.name}</li>
      ))}
    </ul>
  </div>
);

const mapStateToProps = state => {
  return {
    team: state.team
  };
};

const mapDispatchToProps = dispatch => {
  return {
    selectQueen: (id, history) => {
      dispatch(selectQueen(id));
      history.push("/Queen");
    }
  };
};

SelectQueen = connect(
  mapStateToProps,
  mapDispatchToProps
)(SelectQueen);

export default SelectQueen;
