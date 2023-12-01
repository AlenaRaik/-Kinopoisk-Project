
import { createSlice } from '@reduxjs/toolkit';

const Menu = createSlice({
  name: 'Menu',
  initialState: {
    isBurgerOpen: false
  },
  reducers: {
    open(state) {
      state.isBurgerOpen = true;
    },
    close(state) {
      state.isBurgerOpen = false;
    },
    toggle(state){
        state.isBurgerOpen =!state.isBurgerOpen;
    }
  },
});

export const {
  actions: { open, close },
  reducer: burgerOpenReducer,
} = Menu;