import { KinopoinskAllUnofficial, KinopoinskProps } from '#ui/cards/card-props';
import { createSlice } from '@reduxjs/toolkit';

const SelectedPostsSlice = createSlice({
  name: 'SelectedPosts',
  initialState: {
    setCards: {} as KinopoinskProps,
    currentPage: 2,
    currentScroll: 1300,
    allPostsIsLoading: false,
    idSelectedMovie: Number(localStorage.getItem('id')),
  },
  reducers: {

    setCards(state, action: { payload: number }) {
      state.allPostsIsLoading = true;
      state.idSelectedMovie = action.payload;
    },
    setCardsSuccess(
      state,
      action: { payload: KinopoinskProps }
    ) {
      state.allPostsIsLoading = false;
      state.setCards = action.payload;
    },
    setCardsFailure(state) {
      state.allPostsIsLoading = false;
    },
  },
});

export const {
  actions: {
    setCards,
    setCardsSuccess,
    setCardsFailure
  },
  reducer: SelectedPostsReducer,
} = SelectedPostsSlice;
