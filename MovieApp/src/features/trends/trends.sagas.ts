import { call, put, takeLatest } from 'typed-redux-saga';
import {
  getTrends,
  getTrendsFailure,
  getTrendsSuccess,
} from './trends.slice';
import { api } from './api';

export function* TrendsSaga() {
  yield takeLatest(
    getTrends,
    function* trendsHundler({ payload: { page } }) {
      try {
        const data = yield* call(api.getTrendsMovies, page);
        yield put(getTrendsSuccess(data));
      } catch {
        yield put(getTrendsFailure());
      }
    }
  );
}