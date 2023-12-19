import { AllPostsReducer } from '#features/all-posts/all-posts.slice';
import { likeDislikeReducer } from '#features/like-dislike/like-dislike.slice';
import { signInFormReducer } from '#features/sign-in-form/sign-in-form.slice';
import { signUpFormReducer } from '#features/sign-up-form/sign-up-form.slice';
import { burgerOpenReducer } from '#ui/header/burger-menu-slice';
import { tabsSliceReducer } from '#ui/tabs/tabs-slice';
import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { rootSaga } from './sagas';
import { registrationReducer } from '#features/auth/registration.slice';
import { SelectedPostsReducer } from '#features/selected-posts/selected-posts.slice';
import { FilterReducer } from '#features/filter/filter.slice';
import { searchReducer } from '#features/search/search.slice';
import { TrendsReducer } from '#features/trends/trends.slice';
import { RecommendationReducer } from '#features/recomend/recomend.slice';

let sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];
export const store = configureStore({
  reducer: {
    registration: registrationReducer,
    likeDislike: likeDislikeReducer,
    signUpForm: signUpFormReducer,
    signInForm: signInFormReducer,
    allPosts: AllPostsReducer,
    burgerMenu: burgerOpenReducer,
    tabs: tabsSliceReducer,
    selectedMovie: SelectedPostsReducer,
    search: searchReducer,
    filter: FilterReducer,
    trendsPosts: TrendsReducer,
    recommendation: RecommendationReducer,
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(middleware),
});

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
