import { createSlice } from '@reduxjs/toolkit';

const signInFormSlice = createSlice({
  name: 'signInForm',
  initialState: {
    name: '',
    email: '',
    password: '',
  },
  reducers: {
    setName(state, action: { payload: (typeof state)['name'] }) {
      state.name = action.payload;
    },
  },
});

export const {
  actions: { setName },
  reducer: signInFormReducer,
} = signInFormSlice;
