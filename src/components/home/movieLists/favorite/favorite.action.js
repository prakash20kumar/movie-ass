import { ADD_TO_FAVORITE, HIDE_FAVORITE, REMOVE_MOVIE_FROM_FAVORITE, SHOW_FAVORITE } from "./favorite.types";

export const addToFavorite = (favMovies) => ({
  type: ADD_TO_FAVORITE,
  payload: favMovies,
});

export const showFavoriteMovies = () => ({
  type: SHOW_FAVORITE,
});

export const hideFavoriteMovies = () => ({
  type: HIDE_FAVORITE,
});

export const removeMovieFromFavorite = (movieId) => ({
  type: REMOVE_MOVIE_FROM_FAVORITE,
  payload: movieId,
});
