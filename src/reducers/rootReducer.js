import { combineReducers } from "redux";
import modalDetails from "./modalDetailsReducer";
import userProfile from "./userProfileReducer";
import flags from "./flagsReducer";
import auth from "./authReducer";

const rootReducer = combineReducers({
	modalDetails,
	userProfile,
	flags,
	auth,
});

export default rootReducer;
