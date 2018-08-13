import firebase from "../firebase";

export const getBattles = battles => ({
  type: "GET_BATTLES",
  battles
});

export function getBattlesThunk() {
  return dispatch => {
    const battles = [];
    database
      .ref("/battles")
      .once("value", snap => {
        snap.forEach(data => {
          let battle = data.val();
          battles.push(battle);
        });
      })
      .then(() => dispatch(getBattles(battles)));
  };
}

export const selectQueen = id => {
  return {
    type: "SELECT_QUEEN",
    id
  };
};

export const updateTeam = team => {
  return {
    type: "UPDATE_TEAM",
    team
  };
};

export const updateChallenge = challenge => {
  return {
    type: "UPDATE_CHALLENGE",
    challenge
  };
};
