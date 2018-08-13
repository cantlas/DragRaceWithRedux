import queens from "./complete_queens_list";
import challenges from "./challenges";

const initialState = {
  battles: [{ name: "adam" }],
  queens: queens,
  selected_queen: null,
  team: [],
  challenges: challenges,
  challenge: null,
  competitor: null
};

const dragRace = (state = initialState, action) => {
  switch (action.type) {
    case "SELECT_QUEEN":
      return Object.assign({}, state, {
        selected_queen: action.id
      });
    case "UPDATE_TEAM":
      return Object.assign({}, state, {
        team: action.team
      });
    case "UPDATE_CHALLENGE":
      return Object.assign({}, state, {
        challenge: action.challenge
      });
    default:
      return state;
  }
};

export default dragRace;
