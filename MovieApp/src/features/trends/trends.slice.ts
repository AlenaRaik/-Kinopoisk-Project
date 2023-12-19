import { KinopoinskAllUnofficial, KinopoinskProps } from '#ui/cards/card-props';
import { createSlice } from '@reduxjs/toolkit';

const TrendsSlice = createSlice({
  name: 'TrendsSLice',
  initialState: {
    trends: {
      total: 0,
      totalPages: 0,
      items: [],
    } as KinopoinskAllUnofficial,
    setCards: {} as KinopoinskProps,
    currentPage: 2,
    isLoading: false,
  },
  reducers: {
    getTrends(state, action: { payload: { page: number } }) {
      state.isLoading = true;
    },
    getTrendsSuccess(
      state,
      action: { payload: typeof state.trends }
    ) {
      state.isLoading = false;
      const itemsArr = [...state.trends.items, ...action.payload.items];
      state.trends = { ...state.trends, items: itemsArr };
    },
    getTrendsFailure(state) {
      state.isLoading = false;
    },
  },
});

export const {
  actions: {
    getTrends,
    getTrendsSuccess,
    getTrendsFailure,
  },
  reducer: TrendsReducer,
} = TrendsSlice;