import { FETCH_MOVIE_DETAILS, SET_MOVIE_DETAILS } from "../types/movies.types";

const movieDetailReducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_MOVIE_DETAILS:
      return [action.payload.id];
    case SET_MOVIE_DETAILS:
      return action.payload;
    default:
      return state;
  }
};

export default movieDetailReducer;
