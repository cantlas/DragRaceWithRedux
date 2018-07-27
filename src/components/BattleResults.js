import React from "react";

class BattleResults extends React.Component {
  constructor() {
    super();
    this.state = {
      winner: { name: "Winner" },
      loser: { name: "Loser" },
      resultsVisible: false
    };
    this.calculateWinner = this.calculateWinner.bind(this);
  }
  calculateWinner() {
    const skill1 = this.props.challenge.skills[0];
    const skill2 = this.props.challenge.skills[1];
    const skill3 = this.props.challenge.skills[2];
    let competitor_score =
      this.props.competitor[skill3] * 2 +
      this.props.competitor[skill2] +
      this.props.competitor[skill3] +
      this.props.competitor.CUNT +
      Math.random() * 20;
    let challenger_score =
      this.props.challenger[skill1] * 2 +
      this.props.challenger[skill2] +
      this.props.challenger[skill3] +
      this.props.challenger.CUNT +
      Math.random() * 20;
    console.log(this.props.challenger.name, challenger_score);
    console.log(this.props.competitor.name, competitor_score);
    const blue_moon = Math.random();
    let winner;
    let loser;
    if (challenger_score > competitor_score) {
      winner = this.props.challenger;
      loser = this.props.competitor;
    } else {
      winner = this.props.competitor;
      loser = this.props.challenger;
    }
    if (blue_moon > 0.95 && challenger_score > competitor_score) {
      winner = this.props.competitor;
      loser = this.props.challenger;
    }
    if (blue_moon > 0.95 && competitor_score > challenger_score) {
      winner = this.props.challenger;
      loser = this.props.competitor;
    }
    this.setState({
      winner,
      loser,
      resultsVisible: true
    });
  }
  render() {
    return (
      <div>
        <button onClick={this.calculateWinner}>Who wins?</button>
        {this.state.resultsVisible ? (
          <div>
            <h1 style={{ color: "#FF62B0" }}>
              {this.state.winner.name} shanté you stay.
            </h1>
            <h3 style={{ color: "grey" }}>
              {this.state.loser.name} sashay away.
            </h3>
          </div>
        ) : (
          <h3>Now THAT is what you call a lipsync for your life.</h3>
        )}
      </div>
    );
  }
}

export default BattleResults;
