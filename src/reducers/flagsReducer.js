const { FLAG_ACTION_TYPES } = require("@Src/actions/flagActions");

export const FLAGS = {
	SIDEBAR_OPEN: "SIDEBAR_OPEN",
};

const initialState = {
	[FLAGS.SIDEBAR_OPEN]: false,
};

const flagsReducer = (state = initialState, action) => {
	switch (action.type) {
		case FLAG_ACTION_TYPES.SET_FLAG:
			return { ...state, [action.payload]: true };
		case FLAG_ACTION_TYPES.RESET_FLAG:
			return { ...state, [action.payload]: false };
		case FLAG_ACTION_TYPES.TOGGLE_FLAG:
			return { ...state, [action.payload]: !state[action.payload] };
		default:
			return state;
	}
};

export default flagsReducer;
