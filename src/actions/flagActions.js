/* eslint-disable import/prefer-default-export */
export const FLAG_ACTION_TYPES = {
	SET_FLAG: "SET_FLAG",
	RESET_FLAG: "RESET_FLAG",
	TOGGLE_FLAG: "TOGGLE_FLAG",
};

export const setFlag = (flagName) => ({
	type: FLAG_ACTION_TYPES.SET_FLAG,
	payload: flagName,
});

export const resetFlag = (flagName) => ({
	type: FLAG_ACTION_TYPES.RESET_FLAG,
	payload: flagName,
});

export const toggleFlag = (flagName) => ({
	type: FLAG_ACTION_TYPES.TOGGLE_FLAG,
	payload: flagName,
});
