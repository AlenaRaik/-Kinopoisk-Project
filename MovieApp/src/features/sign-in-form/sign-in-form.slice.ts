import { UserProps } from '#ui/cards/card-props';
import { createSlice } from '@reduxjs/toolkit';

const signInFormSlice = createSlice({
  name: 'signInForm',
  initialState: {
    //name: '',
    // email: '',
    // password: '',
    nameEmail: '',
    token: '',
    id: '',
  } as UserProps,
  reducers: {
    // setName(state, action: { payload: (typeof state)['name'] }) {
    //   state.name = action.payload;
    // },
      setUser(state, action: { payload: UserProps }) {
        state.nameEmail = action.payload.nameEmail;
        state.token = action.payload.token;
        state.id = action.payload.id;
        // state.password = action.payload.password;
      },
      removeUser(state) {
        state.nameEmail = '';
        state.token = '';
        state.id = '';
        // state.password = null;
      },
  },
});

export const {
  // actions: { setName },
  actions: { setUser, removeUser },
  reducer: signInFormReducer,
} = signInFormSlice;
