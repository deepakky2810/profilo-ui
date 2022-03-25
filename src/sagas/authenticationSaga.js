import {
	AUTH_ACTION_TYPES,
	resetAuthenticationState,
	setAuthenticationAction,
	setAuthenticationInProgress,
	setAuthenticationParams,
	SIGN_IN_METHODS,
} from "@Src/actions/authActions";
import { RESPONSE_CODE, sendGoogleToken, signin, signup } from "@Src/services/networkServices";
import { all, call, fork, put, takeLatest } from "redux-saga/effects";

function* workerForAuthStart({ payload }) {
	const { credentials, redirectToViewProfile, redirectToSignIn, action } = payload;

	try {
		let response;
		yield put(resetAuthenticationState());
		yield put(setAuthenticationAction(action));
		yield put(setAuthenticationInProgress(true));
		if (action === "SIGN_IN") {
			response = yield call(signin, credentials);
			if (response.code === RESPONSE_CODE.SUCCESS) {
				const { email, userId } = JSON.parse(atob(response.data.split(".")[1]));
				yield put(
					setAuthenticationParams({
						email,
						userId,
						authFailed: false,
						isSignedIn: true,
						authSuccess: true,
						JWTToken: response.data,
						method: SIGN_IN_METHODS.MANUAL,
					})
				);
				yield call(redirectToViewProfile);
			} else if (response.code === RESPONSE_CODE.FAILURE_INVALID_CREDENTIALS) {
				yield put(
					setAuthenticationParams({
						authFailed: true,
						isSignedIn: false,
						authSuccess: false,
						errorCode: response.code,
					})
				);
			}
		} else if (action === "SIGN_UP") {
			response = yield call(signup, credentials);
			if (response.code === RESPONSE_CODE.SUCCESS) {
				yield put(
					setAuthenticationParams({
						authFailed: false,
						authSuccess: true,
					})
				);
				yield call(redirectToSignIn);
			} else if (response.code === RESPONSE_CODE.FAILURE_EMAIL_ALREADY_EXISTS) {
				yield put(
					setAuthenticationParams({
						authFailed: true,
						authSuccess: false,
						errorCode: response.code,
					})
				);
			}
		}
	} catch (err) {
		yield put(
			setAuthenticationParams({
				authFailed: true,
				isSignedIn: false,
				authSuccess: false,
				errorCode: -1,
			})
		);
	} finally {
		yield put(setAuthenticationInProgress(false));
	}
}

function* watcherForAuthStart() {
	yield takeLatest(AUTH_ACTION_TYPES.SET_AUTHENTICATION_START, workerForAuthStart);
}

export function* workerForSignInUsingGoogle({ payload }) {
	try {
		const { tokenId, redirectToViewProfile, action } = payload;
		yield put(resetAuthenticationState());
		yield put(setAuthenticationAction(action));
		yield put(setAuthenticationInProgress(true));
		const reqObj = { tokenId };
		const response = yield call(sendGoogleToken, reqObj);

		if (response.code === RESPONSE_CODE.SUCCESS) {
			const { email, userId } = JSON.parse(atob(response.data.split(".")[1]));
			yield put(
				setAuthenticationParams({
					email,
					userId,
					authFailed: false,
					isSignedIn: true,
					authSuccess: true,
					JWTToken: response.data,
					method: SIGN_IN_METHODS.GOOGLE,
				})
			);
			yield call(redirectToViewProfile);
		} else {
			yield put(
				setAuthenticationParams({
					authFailed: true,
					isSignedIn: false,
					authSuccess: false,
					errorCode: response.code,
				})
			);
		}
	} catch (err) {
		console.log(err);
	} finally {
		yield put(setAuthenticationInProgress(false));
	}
}

export function* watcherForSignInGoogle() {
	yield takeLatest(AUTH_ACTION_TYPES.SIGN_IN_USING_GOOGLE, workerForSignInUsingGoogle);
}

export function* authenticationSagas() {
	// eslint-disable-next-line redux-saga/no-unhandled-errors
	yield all([fork(watcherForAuthStart), fork(watcherForSignInGoogle)]);
}
