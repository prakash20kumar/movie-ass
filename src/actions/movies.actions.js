import { FETCH_MOVIES, FETCH_MOVIE_DETAILS, SET_MOVIES, SET_MOVIE_DETAILS } from "../types/movies.types";

export const fetchMovies = () => {
  return { type: FETCH_MOVIES };
};

export const setMovies = (movies = null) => {
  if (movies) {
    return {
      type: SET_MOVIES,
      payload: movies,
    };
  }
};

export const fetchMovieDetails = (id) => {
  return { type: FETCH_MOVIE_DETAILS, payload: id };
};

export const setMovieDetails = (moviesDetail, movieVideos, movieCasts) => {
  if (moviesDetail && movieVideos && movieCasts) {
    return {
      type: SET_MOVIE_DETAILS,
      payload: { detail: moviesDetail, videos: movieVideos, casts: movieCasts },
    };
  }
};
