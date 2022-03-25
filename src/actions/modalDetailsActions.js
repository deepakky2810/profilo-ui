/* eslint-disable import/prefer-default-export */
export const MODAL_DETAILS_ACTION_TYPES = {
	SET_ACTIVE_MODAL_ID: "SET_ACTIVE_MODAL_ID",
	FETCH_PROFILE_DATA: "FETCH_PROFILE_DATA",
	SET_PROFILE_DATA: "SET_PROFILE_DATA",
	RESET_PROFILE_DATA: "RESET_PROFILE_DATA",
	SET_PROFILE_DATA_FAILURE: "SET_PROFILE_DATA_FAILURE",
	SET_PROFILE_DATA_LOADING: "SET_PROFILE_DATA_LOADING",
	SAVE_PROFILE_DATA: "SAVE_PROFILE_DATA",
};

export const setActiveModalId = (id) => ({
	type: MODAL_DETAILS_ACTION_TYPES.SET_ACTIVE_MODAL_ID,
	payload: id,
});

export const fetchProfileData = (navigator) => ({
	type: MODAL_DETAILS_ACTION_TYPES.FETCH_PROFILE_DATA,
	payload: navigator,
});

export const setProfileData = (data) => ({
	type: MODAL_DETAILS_ACTION_TYPES.SET_PROFILE_DATA,
	payload: data,
});

export const resetProfileData = () => ({
	type: MODAL_DETAILS_ACTION_TYPES.RESET_PROFILE_DATA,
});

export const setProfileDataFailure = (flag) => ({
	type: MODAL_DETAILS_ACTION_TYPES.SET_PROFILE_DATA_FAILURE,
	payload: flag,
});

export const setProfileDataLoading = (flag) => ({
	type: MODAL_DETAILS_ACTION_TYPES.SET_PROFILE_DATA_LOADING,
	payload: flag,
});

export const saveProfileData = (data, navigator) => ({
	type: MODAL_DETAILS_ACTION_TYPES.SAVE_PROFILE_DATA,
	payload: { data, navigator },
});
