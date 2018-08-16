import React from "react";
import { connect } from "react-redux";
import database from "../firebase";
import uuid from "uuid/v4";

import Challenge from "./Challenge";
import BattleResults from "./BattleResults";

class Battle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      battles: [],
      user: "Adam",
      current_battle: null,
      current_challenge: null,
      challenger: null,
      user_team: [
        {
          name: "Alaska",
          price: 250,
          CUNT: 10,
          dance: 7,
          sing: 9,
          comedy: 10,
          act: 10,
          runway: 10,
          sew: 8,
          lipsync: 10,
          paint: 8
        },
        {
          name: "Trixie Mattel",
          price: 225,
          CUNT: 10,
          dance: 5,
          sing: 10,
          comedy: 8,
          act: 7,
          runway: 8,
          sew: 7,
          lipsync: 10,
          paint: 8
        }
      ],
      user_queen: null,
      challenger_queen: null
    };
    this.startBattle = this.startBattle.bind(this);
    this.selectQueen = this.selectQueen.bind(this);
    this.calculateWinner = this.calculateWinner.bind(this);
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
          if (snapshot.val()) {
            this.setState({
              challenger: snapshot.val(),
              current_challenge: this.randomChallenge()
            });
          }
        });
      }
    );
  }
  randomChallenge() {
    let challenges = this.props.challenges;
    let challenge = challenges[Math.floor(Math.random() * challenges.length)];
    return challenge;
  }
  selectQueen(queen) {
    this.setState(
      {
        user_queen: queen
      },
      () => {
        database
          .ref(`battles/${this.state.current_battle}/challenger_queen`)
          .on("value", snapshot => {
            if (snapshot.val() && this.state.user_queen) {
              this.setState(
                {
                  challenger_queen: snapshot.val()
                },
                () => {
                  // Timeout
                  setTimeout(() => {
                    this.calculateWinner();
                  }, 3000);
                }
              );
            }
          });
      }
    );
  }
  calculateWinner() {
    this.setState({
      resultsVisible: true,
      challenger_queen: {
        name: "Jinkx Monsoon",
        price: 220,
        CUNT: 10,
        dance: 9,
        sing: 9,
        comedy: 10,
        act: 10,
        runway: 7,
        sew: 8,
        lipsync: 9,
        paint: 6
      }
    });
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
        {this.state.current_challenge ? (
          <Challenge {...this.state.current_challenge} />
        ) : (
          ""
        )}
        {this.state.current_challenge ? (
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
                    onClick={() => this.selectQueen(queen)}
                  >
                    {queen.name}
                  </li>
                );
              })}
            </ul>
          </div>
        ) : (
          ""
        )}
        {this.state.user_queen
          ? "You have chosen " + this.state.user_queen.name
          : ""}
        {this.state.resultsVisible ? (
          <BattleResults
            competitor={this.state.user_queen}
            challenger={this.state.challenger_queen}
            challenge={this.state.current_challenge}
          />
        ) : (
          ""
        )}
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
