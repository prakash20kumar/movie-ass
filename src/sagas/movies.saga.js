import { call, put, takeEvery } from "redux-saga/effects";
import { setMovies } from "../actions/movies.actions";
import movieService from "../service/index.service";
import { FETCH_MOVIES } from "../types/movies.types";

function* fetchMovies() {
  try {
    const movies = yield call(movieService.getAllMovies);
    yield put(setMovies(movies));
  } catch (err) {
    console.log(err);
  }
}

export function* waitForFetchMovies() {
  yield takeEvery(FETCH_MOVIES, fetchMovies);
}
