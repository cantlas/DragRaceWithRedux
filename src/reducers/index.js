import queens from "./complete_queens_list";

const initialState = {
  queens: queens,
  selected_queen: null
};

const dragRace = (state = initialState, action) => {
  switch (action.type) {
    case "SELECT_QUEEN":
      return Object.assign({}, state, {
        selected_queen: action.id
      });
    default:
      return state;
  }
};

export default dragRace;
