import { ADD_TO_FAVORITE, HIDE_FAVORITE, REMOVE_MOVIE_FROM_FAVORITE, SHOW_FAVORITE } from "./favorite.types";
import favoriteInitialState from "./FavoriteInitialState";

const favoriteReducer = (state = favoriteInitialState, action) => {
  switch (action.type) {
    case ADD_TO_FAVORITE:
      return { ...state, favMovies: [...state.favMovies, action.payload] };
    case SHOW_FAVORITE:
      return { ...state, show_favorite: true };
    case HIDE_FAVORITE:
      return { ...state, show_favorite: false };
    case REMOVE_MOVIE_FROM_FAVORITE: {
      const favMovies = state.favMovies.filter((movie) => movie.id !== action.payload);
      return { ...state, favMovies };
    }
    default:
      return state;
  }
};

export default favoriteReducer;
