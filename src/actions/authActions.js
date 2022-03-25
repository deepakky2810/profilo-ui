export const AUTH_ACTION_TYPES = {
	SET_SIGNED_IN: "SET_SIGNED_IN",
	SET_METHOD: "SET_METHOD",
	SET_PROFILE_EXISTS: "SET_PROFILE_EXISTS",
	SET_AUTHENTICATION_START: "SET_AUTHENTICATION_START",
	SET_AUTHENTICATION_IN_PROGRESS: "SET_AUTHENTICATION_IN_PROGRESS",
	SET_AUTHENTICATION_SUCCESS: "SET_AUTHENTICATION_SUCCESS",
	SET_AUTHENTICATION_PARAMS: "SET_AUTHENTICATION_PARAMS",
	SET_AUTHENTICATION_FAILED: "SET_AUTHENTICATION_FAILED",
	SET_AUTHENTICATION_ACTION: "SET_AUTHENTICATION_ACTION",
	RESET_AUTHENTICATION_STATE: "RESET_AUTHENTICATION_STATE",
	SIGN_IN_USING_GOOGLE: "SIGN_IN_USING_GOOGLE",
	SET_JWT_TOKEN: "SET_JWT_TOKEN",
};

export const SIGN_IN_METHODS = {
	MANUAL: "MANUAL",
	GOOGLE: "GOOGLE",
};

export const setSignedIn = (flag) => ({
	type: AUTH_ACTION_TYPES.SET_SIGNED_IN,
	payload: flag,
});

export const setMethod = (method) => ({
	type: AUTH_ACTION_TYPES.SET_METHOD,
	payload: method,
});

export const setProfileExists = (flag) => ({
	type: AUTH_ACTION_TYPES.SET_PROFILE_EXISTS,
	payload: flag,
});

export const setAuthenticationStart = (data) => ({
	type: AUTH_ACTION_TYPES.SET_AUTHENTICATION_START,
	payload: data,
});

export const setAuthenticationInProgress = (flag) => ({
	type: AUTH_ACTION_TYPES.SET_AUTHENTICATION_IN_PROGRESS,
	payload: flag,
});

export const setAuthenticationInSuccess = (flag) => ({
	type: AUTH_ACTION_TYPES.SET_AUTHENTICATION_SUCCESS,
	payload: flag,
});

export const setAuthenticationParams = (data) => ({
	type: AUTH_ACTION_TYPES.SET_AUTHENTICATION_PARAMS,
	payload: data,
});

export const setAuthenticationFailed = (flag) => ({
	type: AUTH_ACTION_TYPES.SET_AUTHENTICATION_FAILED,
	payload: flag,
});

export const setJWTToken = (data) => ({
	type: AUTH_ACTION_TYPES.SET_JWT_TOKEN,
	payload: data,
});

export const setAuthenticationAction = (data) => ({
	type: AUTH_ACTION_TYPES.SET_AUTHENTICATION_ACTION,
	payload: data,
});

export const resetAuthenticationState = () => ({
	type: AUTH_ACTION_TYPES.RESET_AUTHENTICATION_STATE,
});

export const setSignInUsingGoogle = (data) => ({
	type: AUTH_ACTION_TYPES.SIGN_IN_USING_GOOGLE,
	payload: data,
});
