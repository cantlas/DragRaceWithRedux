import React from "react";
import { connect } from "react-redux";

let ActiveBattles = ({ battles }) => {
  return <div>{battles.map(battle => <div>{battle.name}</div>)}</div>;
};

const mapStateToProps = state => {
  return {
    battles: state.battles
  };
};

ActiveBattles = connect(mapStateToProps)(ActiveBattles);

export default ActiveBattles;
