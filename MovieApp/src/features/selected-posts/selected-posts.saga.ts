
import { takeLatest, call, put } from 'typed-redux-saga';
import {
    setCards,
    setCardsFailure,
  setCardsSuccess,
} from './selected-posts.slice';
import { kinopoiskApi, kinopoiskBigApi } from '#features/api/api';

export function* selectedPostsSaga() {
  yield takeLatest(
    setCards,
    function* setPostsHundler({ payload:  page  }) {
      try {
        const data = yield* call(kinopoiskBigApi.getSelectedAllPosts, page);
        yield put(setCardsSuccess(data));
      } catch {
        yield put(setCardsFailure());
      }
    }
  );
}
