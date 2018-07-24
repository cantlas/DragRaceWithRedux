import React from "react";
import { connect } from "react-redux";

const randomiseQueen = queens => {
  return queens[Math.floor(Math.random() * queens.length)];
};

class BattleScreen extends React.Component {
  constructor() {
    super();
  }
  render() {
    console.log(this.props.random_queen);
    return (
      <h1>
        {this.props.selected_queen} <i>versus</i> {this.props.random_queen.name}
      </h1>
    );
  }
}

const mapStateToProps = state => {
  return {
    selected_queen: state.selected_queen,
    random_queen: randomiseQueen(state.queens)
  };
};

BattleScreen = connect(mapStateToProps)(BattleScreen);

export default BattleScreen;
