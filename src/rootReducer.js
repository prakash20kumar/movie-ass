import { combineReducers } from "redux";
import favoriteReducer from "./components/home/movieLists/favorite/favorite.reducer";
import movieReducer from "./reducers/movie.reducer";
import movieDetailReducer from "./reducers/movieDetails.reducer";

const rootReducer = combineReducers({
  movies: movieReducer,
  movieDetails: movieDetailReducer,
  favorite: favoriteReducer,
});

export default rootReducer;
