import { KinopoinskAllUnofficial, KinopoinskProps } from '#ui/cards/card-props';
import { createSlice } from '@reduxjs/toolkit';

const AllPostsSlice = createSlice({
  name: 'AllPosts',
  initialState: {
    allPosts: {
      total: 0,
      totalPages: 0,
      items: [],
    } as KinopoinskAllUnofficial,

    currentPage: 2,
    currentScroll: 1300,
    allPostsIsLoading: false,
  },
  reducers: {
    getAllPosts(state, action: { payload: { page: number } }) {
      state.allPostsIsLoading = true;
    },
    getAllPostsSuccess(state, action: { payload: typeof state.allPosts }) {
      state.allPostsIsLoading = false;
      const itemsArr = [...state.allPosts.items, ...action.payload.items];
      state.allPosts = { ...state.allPosts, items: itemsArr };
    },
    getAllPostsFailure(state) {
      state.allPostsIsLoading = false;
    },
  },
});

export const {
  actions: {
    getAllPosts,
    getAllPostsSuccess,
    getAllPostsFailure,
  },
  reducer: AllPostsReducer,
} = AllPostsSlice;
