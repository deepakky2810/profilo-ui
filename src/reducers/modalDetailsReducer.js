import { MODAL_DETAILS_ACTION_TYPES } from "@Actions/modalDetailsActions";

const initialState = {
	id: -1,
	profileDataLoading: false,
	profileDataFailure: false,
	profileData: null,
};

const modalDetails = (state = initialState, action) => {
	switch (action.type) {
		case MODAL_DETAILS_ACTION_TYPES.SET_ACTIVE_MODAL_ID:
			return { ...state, id: action.payload };
		case MODAL_DETAILS_ACTION_TYPES.FETCH_PROFILE_DATA:
			return { ...state, profileDataLoading: true };
		case MODAL_DETAILS_ACTION_TYPES.SET_PROFILE_DATA:
			return {
				...state,
				profileData: action.payload,
				profileDataLoading: false,
				profileDataFailure: false,
			};
		case MODAL_DETAILS_ACTION_TYPES.RESET_PROFILE_DATA:
			return { ...state, profileData: undefined };
		case MODAL_DETAILS_ACTION_TYPES.SET_PROFILE_DATA_FAILURE:
			return { ...state, profileDataFailure: action.payload };
		case MODAL_DETAILS_ACTION_TYPES.SET_PROFILE_DATA_LOADING:
			return { ...state, profileDataLoading: action.payload };
		default:
			return state;
	}
};

export default modalDetails;
