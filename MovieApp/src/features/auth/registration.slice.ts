import { createSlice } from '@reduxjs/toolkit'
import { RegistrationPayload } from './types';

const registrationSlice = createSlice ({
name: 'registrationSlice',
initialState: {
    isInProgress: false,
    isCompleted: false,
},
reducers: {
    register(state, action: { payload: RegistrationPayload}) {
        state.isInProgress = true;
    },
    registerSucces(state) {
        state.isInProgress = false;
        state.isCompleted = true;
    },
    registerFailure(state) {
        state.isInProgress = false;
    }
}
});

export const { 
    actions: {register, registerSucces, registerFailure}, 
    reducer: registrationReducer,
} = registrationSlice;