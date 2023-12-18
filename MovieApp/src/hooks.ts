import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import type { RootState, AppDispatch } from './store';

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useAppDispatch = () => useDispatch<AppDispatch>();

export function useAuth(){
    const {nameEmail, token, id} = useAppSelector(state => state.signInForm);
    return{
        isAuth:!!nameEmail,
        nameEmail,
        token,
        id,
    }
}
