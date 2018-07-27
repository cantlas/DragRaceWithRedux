import React from "react";
import { connect } from "react-redux";
import { selectQueen } from "../actions";
import Queen from "./Queen";

let SelectQueen = ({ team, selectQueen, history }) => (
  <div style={{ textAlign: "center" }}>
    <ul style={{ padding: 0 }}>
      {team.map(queen => {
        let color = "#D19C67";
        if (queen.price > 50) color = "#FFB428";
        if (queen.price > 100) color = "#06DCFB";
        if (queen.price > 200) color = "#01F33E";
        return (
          <li
            style={{
              display: "inline-block",
              borderRadius: "5px",
              background: color,
              color: "white",
              margin: "10px 10px 10px 10px",
              padding: "5px 10px 5px 10px",
              cursor: "pointer"
            }}
            onClick={() => selectQueen(queen.name, history)}
          >
            {queen.name}
          </li>
        );
      })}
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
