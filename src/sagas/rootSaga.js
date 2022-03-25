import { all, fork } from "redux-saga/effects";
import { authenticationSagas } from "./authenticationSaga";
import { modalDetailsSagas } from "./modalDetailsSaga";

export default function* rootSaga() {
	// eslint-disable-next-line redux-saga/no-unhandled-errors
	yield all([fork(modalDetailsSagas), fork(authenticationSagas)]);
}
