/* eslint-disable redux-saga/no-unhandled-errors */
/* eslint-disable import/prefer-default-export */
import { setProfileExists } from "@Src/actions/authActions";
import {
	MODAL_DETAILS_ACTION_TYPES,
	setProfileData,
	setProfileDataFailure,
	setProfileDataLoading,
	setActiveModalId,
	fetchProfileData,
} from "@Src/actions/modalDetailsActions";
import {
	addOrEditProfileDetails,
	getProfileDetails,
	RESPONSE_CODE,
} from "@Src/services/networkServices";
import { all, call, fork, put, select, takeLatest } from "redux-saga/effects";
import { MODAL_CONFIG } from "@Src/components/Sidebar/configs";

const getReqParamsFromAuthState = (state) => state.auth;
function* workerForFetchProfileData({ payload: navigate }) {
	try {
		const {
			userId,
			JWTToken: token,
			method: signInMethod,
		} = yield select(getReqParamsFromAuthState);
		const response = yield call(getProfileDetails, userId, signInMethod, token);

		if (response.code === RESPONSE_CODE.SUCCESS_PROFILE_NOT_EXISTS) {
			yield put(setProfileDataLoading(false));
			yield put(setProfileDataFailure(false));
			yield put(setProfileExists(false));
			yield put(setActiveModalId(MODAL_CONFIG.CREATE_PROFILE.ID));
			navigate("/create-profile");
		} else if (response.code === RESPONSE_CODE.SUCCESS_PROFILE_EXISTS) {
			yield put(setProfileExists(true));
			yield put(setActiveModalId(MODAL_CONFIG.VIEW_PROFILE.ID));
			navigate("/view-profile");
			yield put(setProfileData(response.data));
		} else if (response.code === RESPONSE_CODE.HTTP_FORBIDDEN) {
			console.log("FORBIDDEN");
		} else {
			yield put(setProfileDataFailure(true));
		}
	} catch (err) {
		console.log(err);
		yield put(setProfileDataFailure(true));
	}
}

function* watcherForFetchProfileDetails() {
	yield takeLatest(MODAL_DETAILS_ACTION_TYPES.FETCH_PROFILE_DATA, workerForFetchProfileData);
}

function* workerForSaveProfileDetails({ payload }) {
	const { data, navigator } = payload;
	try {
		const {
			userId,
			JWTToken: token,
			method: signInMethod,
		} = yield select(getReqParamsFromAuthState);
		const reqObj = { ...data, userId, signInMethod };
		const response = yield call(addOrEditProfileDetails, reqObj, token);

		if (response.code === RESPONSE_CODE.SUCCESS) {
			yield put(fetchProfileData(navigator));
		} else if (response.code === RESPONSE_CODE.HTTP_FORBIDDEN) {
			console.log("FORBIDDEN");
		}
	} catch (err) {
		console.log(err);
	}
}

function* watcherForSaveProfileDetails() {
	yield takeLatest(MODAL_DETAILS_ACTION_TYPES.SAVE_PROFILE_DATA, workerForSaveProfileDetails);
}

export function* modalDetailsSagas() {
	yield all([fork(watcherForFetchProfileDetails), fork(watcherForSaveProfileDetails)]);
}
