import { AUTH_ACTION_TYPES } from "@Src/actions/authActions";

const initialState = {
	action: null,
	isSignedIn: false,
	JWTToken: null,
	method: null,
	userId: null,
	email: null,
	profileExists: false,
	authFailed: false,
	authInProgress: false,
	authSuccess: false,
	errorCode: null,
};

const authReducer = (state = initialState, action) => {
	switch (action.type) {
		case AUTH_ACTION_TYPES.SET_SIGNED_IN:
			return { ...state, isSignedIn: action.payload };
		case AUTH_ACTION_TYPES.SET_METHOD:
			return { ...state, isSignedIn: action.payload };
		case AUTH_ACTION_TYPES.SET_PROFILE_EXISTS:
			return { ...state, profileExists: action.payload };
		case AUTH_ACTION_TYPES.SET_AUTHENTICATION_FAILED:
			return { ...state, authFailed: action.payload };
		case AUTH_ACTION_TYPES.SET_AUTHENTICATION_IN_PROGRESS:
			return { ...state, authInProgress: action.payload };
		case AUTH_ACTION_TYPES.SET_AUTHENTICATION_SUCCESS:
			return { ...state, authSuccess: action.payload };
		case AUTH_ACTION_TYPES.SET_AUTHENTICATION_PARAMS:
			return { ...state, ...action.payload };
		case AUTH_ACTION_TYPES.SET_JWT_TOKEN:
			return { ...state, JWTToken: action.payload };
		case AUTH_ACTION_TYPES.SET_ERROR_CODE:
			return { ...state, errorCode: action.payload };
		case AUTH_ACTION_TYPES.SET_AUTHENTICATION_ACTION:
			return { ...state, action: action.payload };
		case AUTH_ACTION_TYPES.RESET_AUTHENTICATION_STATE:
			return { ...initialState };
		default:
			return state;
	}
};

export default authReducer;
