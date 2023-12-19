import { KinopoinskAllUnofficial } from '#ui/cards/card-props';
import { createSlice } from '@reduxjs/toolkit';

const RecommendationSlice = createSlice({
  name: 'RecommendationSlice',
  initialState: {
    recommendation: {
      total: 0,
      totalPages: 0,
      items: [],
    } as KinopoinskAllUnofficial,
    isLoading: false,
  },
  reducers: {
    getRecommendation(state, action: { payload: { page: number } }) {
      state.isLoading = true;
    },
    getRecommendationSuccess(
      state,
      action: { payload: typeof state.recommendation }
    ) {
      state.isLoading = false;
      state.recommendation = action.payload;
    },
    getRecommendationFailure(state) {},
  },
});

export const {
  actions: {
    getRecommendation,
    getRecommendationSuccess,
    getRecommendationFailure,
  },
  reducer: RecommendationReducer,
} = RecommendationSlice;
