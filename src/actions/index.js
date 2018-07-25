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
