import React from "react";
import { connect } from "react-redux";
import { updateTeam } from "../actions";

class BuildYourTeam extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      team: [],
      cost: 0,
      queens: props.queens
    };
    this.addQueen = this.addQueen.bind(this);
    this.removeQueen = this.removeQueen.bind(this);
    this.continue = this.continue.bind(this);
  }
  continue() {
    console.log("continue");
    this.props.updateTeam(this.state.team);
    this.props.history.push("/CategoryIs");
  }
  addQueen(event) {
    let selected_queen = this.state.queens.filter(
      queen => queen.name == event.target.value
    );
    selected_queen = selected_queen[0];
    console.log(selected_queen);
    let newTeam = this.state.team;
    newTeam.push(selected_queen);
    console.log(newTeam);
    this.setState(
      {
        team: newTeam,
        cost: this.state.cost + selected_queen.price
      },
      () => console.log(this.state)
    );
  }
  removeQueen(event) {
    const index = this.state.team.findIndex(
      queen => queen.name == event.target.value
    );
    let updatedTeam = this.state.team;
    updatedTeam.splice(index, 1);
    console.log(updatedTeam);
    let queenToRemove = this.state.queens.filter(
      queen => queen.name == event.target.value
    );
    queenToRemove = queenToRemove[0];
    this.setState({
      team: updatedTeam,
      cost: this.state.cost - queenToRemove.price
    });
  }
  render() {
    return (
      <div>
        <h1 style={{ color: "#FF62B0" }}>
          <i>Who's on your team?</i>
        </h1>
        <select onChange={this.addQueen}>
          {this.state.queens.map(queen => (
            <option value={queen.name}>
              {queen.name} - {queen.price},000
            </option>
          ))}
        </select>
        <br />
        <h2 style={{ color: "grey" }}>
          Funds spent: <span>${this.state.cost},000</span>
        </h2>
        {this.state.cost > 1000 ? (
          <h3 style={{ color: "#FF4848" }}>
            Salary cap exceeded by ${this.state.cost - 1000},000
          </h3>
        ) : (
          <h3 style={{ color: "#27DE55" }}>
            ${1000 - this.state.cost},000 remaining.
          </h3>
        )}
        <ul style={{ paddingTop: "20px", paddingBottom: "20px" }}>
          {this.state.team.map(queen => {
            let color = "#D19C67";
            if (queen.price > 50) color = "#FFB428";
            if (queen.price > 100) color = "#06DCFB";
            if (queen.price > 200) color = "#01F33E";
            return (
              <div style={{ display: "inline-block" }}>
                <li
                  style={{
                    borderRadius: "5px",
                    display: "inline-block",
                    background: color,
                    color: "white",
                    margin: "0 5px 10px 10px",
                    padding: "5px 10px 5px 10px"
                  }}
                >
                  {queen.name}
                </li>
                <button
                  style={{
                    background: "lightgrey",
                    color: "white",
                    borderRadius: "100px",
                    cursor: "pointer"
                  }}
                  value={queen.name}
                  onClick={this.removeQueen}
                >
                  X
                </button>
              </div>
            );
          })}
        </ul>
        <h3 style={{ color: "#FF62B0" }}>
          {this.state.team.length > 13
            ? "You can only draft 12 Queens"
            : 12 - this.state.team.length + " " + "Queens left to draft"}
        </h3>
        <button onClick={this.continue}>Continue</button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    queens: state.queens
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateTeam: team => {
      dispatch(updateTeam(team));
    }
  };
};

BuildYourTeam = connect(
  mapStateToProps,
  mapDispatchToProps
)(BuildYourTeam);

console.log(BuildYourTeam);

export default BuildYourTeam;
