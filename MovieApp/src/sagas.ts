import { allPostsSaga } from "#features/all-posts/all-posts.saga";
import { registerSaga } from "#features/auth/registration.sagas";
import { filterSaga } from "#features/filter/filter.sagas";
import { recommendationSaga } from "#features/recomend/recomend.saga";
import { searchSaga } from "#features/search/search.saga";
import { selectedPostsSaga } from "#features/selected-posts/selected-posts.saga";
import { TrendsSaga } from "#features/trends/trends.sagas";
import { all } from "typed-redux-saga";

export function* rootSaga() {
    yield all([
      allPostsSaga(), registerSaga(), selectedPostsSaga(), filterSaga(), searchSaga(), TrendsSaga(), recommendationSaga()]);
  }