import { call, put, takeLatest } from 'typed-redux-saga';
import {
  getFilters,
  getFiltersSuccess,
} from './filter.slice';
import { api } from './api';

export function* filterSaga() {
  yield takeLatest(getFilters, function* filtersHundler({ payload }) {
    try {
      const data = yield* call(api.getFiltersArr, payload);

      yield put(getFiltersSuccess(data));
    } catch {
    }
  });
}