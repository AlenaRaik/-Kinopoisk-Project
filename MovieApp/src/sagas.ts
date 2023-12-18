import { allPostsSaga } from "#features/all-posts/all-posts.saga";
import { registerSaga } from "#features/auth/registration.sagas";
import { selectedPostsSaga } from "#features/selected-posts/selected-posts.saga";
import { all } from "typed-redux-saga";

export function* rootSaga() {
    yield all([
      allPostsSaga(), registerSaga(), selectedPostsSaga()]);
  }