import { put, takeEvery } from "redux-saga/effects";
import { setMovieDetails } from "../actions/movies.actions";
import movieService from "../service/index.service";
import { FETCH_MOVIE_DETAILS } from "../types/movies.types";

function* fetchMovieDetails(action) {
  try {
    const movieDetails = yield movieService.getMovieDetails(action.payload);
    const movieVideos = yield movieService.getMovieVideos(action.payload);
    const movieCasts = yield movieService.getMovieCasts(action.payload);
    yield put(setMovieDetails(movieDetails, movieVideos, movieCasts));
  } catch (error) {
    console.log(error);
  }
}

export function* waitForFetchMovieDetails() {
  yield takeEvery(FETCH_MOVIE_DETAILS, fetchMovieDetails);
}
