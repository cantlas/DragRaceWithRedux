import React from "react";
import { connect } from "react-redux";
import database from "../firebase";
import uuid from "uuid/v4";

class Battle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      battles: [],
      user: "Adam",
      current_battle: null,
      challenger: null,
      user_team: props.user_team,
      user_queen: null,
      challenger_queen: null
    };
    this.startBattle = this.startBattle.bind(this);
  }
  componentDidMount() {
    database.ref("battles").on("value", snapshot => {
      let battles = snapshot.val();
      let newState = [];
      for (let battle in battles) {
        newState.push({ id: battle, user: battles[battle].user });
      }
      this.setState({ battles: newState });
    });
  }
  startBattle() {
    const id = uuid();
    this.setState(
      {
        current_battle: id
      },
      () => {
        database.ref(`battles/${id}`).set({
          user: this.state.user,
          id
        });
        database.ref(`battles/${id}/challenger`).on("value", snapshot => {
          this.setState({
            challenger: snapshot.val()
          });
        });
      }
    );
  }
  render() {
    console.log("battle state");
    console.log(this.state);
    return (
      <div>
        <h2>Users ready to battle:</h2>
        {this.state.battles.map(battle => battle.user)} <br />
        <br />
        <button onClick={this.startBattle}>Start Battle</button>
        {this.state.current_battle && !this.state.challenger ? (
          <h2>Waiting for a challenger...</h2>
        ) : (
          ""
        )}
        {this.state.challenger ? (
          <h1>You are now battling {this.state.challenger}</h1>
        ) : (
          ""
        )}
        <div style={{ textAlign: "center" }}>
          <ul style={{ padding: 0 }}>
            {this.state.user_team.map(queen => {
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
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user_team: state.team,
    challenges: state.challenges,
    user: state.user
  };
};

Battle = connect(mapStateToProps)(Battle);

export default Battle;
