import { allPostsSaga } from "#features/all-posts/all-posts.saga";
import { registerSaga } from "#features/auth/registration.sagas";
import { all } from "typed-redux-saga";

export function* rootSaga() {
    yield all([
      allPostsSaga(), registerSaga()]);
  }