import React from "react";
import { connect } from "react-redux";
import BattleResults from "./BattleResults";

const randomiseQueen = (competitors, all_queens) => {
  let random_competitor =
    competitors[Math.floor(Math.random() * competitors.length)];
  random_competitor = all_queens.filter(
    queen => queen.name == random_competitor
  );
  random_competitor = random_competitor[0];
  return random_competitor;
};

const setChallenger = (all_queens, selected_queen) => {
  let challenger = all_queens.filter(queen => queen.name == selected_queen);
  return challenger[0];
};

class BattleScreen extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <h1>
          {this.props.challenger.name}
          <br />
          <span style={{ color: "grey", fontSize: "14px" }}>V</span>
          <br />
          {this.props.competitor.name}
        </h1>
        <BattleResults
          challenger={this.props.challenger}
          competitor={this.props.competitor}
          challenge={this.props.challenge}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    challenger: setChallenger(state.queens, state.selected_queen),
    competitor: randomiseQueen(state.challenge.competitors, state.queens),
    challenge: state.challenge
  };
};

BattleScreen = connect(mapStateToProps)(BattleScreen);

export default BattleScreen;
