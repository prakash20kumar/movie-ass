import { all } from "redux-saga/effects";
import { waitForFetchMovies } from "./sagas/movies.saga";
import { waitForFetchMovieDetails } from "./sagas/moviesDetails.saga";

export default function* rootSaga(id) {
  yield all([waitForFetchMovies(), waitForFetchMovieDetails(id)]);
}
