import { SET_MOVIES } from "../types/movies.types";

export const movieInitialState = [];

const movieReducer = (state = movieInitialState, action) => {
  switch (action.type) {
    case SET_MOVIES:
      return [...action.payload];
    default:
      return state;
  }
};

export default movieReducer;
