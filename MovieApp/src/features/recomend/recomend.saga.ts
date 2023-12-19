import { takeLatest, call, put } from 'typed-redux-saga';
import {
  getRecommendation,
  getRecommendationFailure,
  getRecommendationSuccess,
} from './recomend.slice';
import { api } from './api';

export function* recommendationSaga() {
  yield takeLatest(
    getRecommendation,
    function* allPostsHundler({ payload: { page } }) {
      try {
        const data = yield* call(api.recommendation, page);
        yield put(getRecommendationSuccess(data));
      } catch {
        yield put(getRecommendationFailure());
      }
    }
  );
}