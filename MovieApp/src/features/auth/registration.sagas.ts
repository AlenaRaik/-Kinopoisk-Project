import { call, put, takeLatest } from "typed-redux-saga";
import { register, registerFailure, registerSucces } from "./registration.slice";
import { api } from "./api";

export function* registerSaga() {
    yield takeLatest(register, function* registerHandler({ payload }){
        const {isOk} = yield* call(api.register, payload)
        if(isOk){
            yield put(registerSucces());
        }
        else yield put(registerFailure());
    });
}