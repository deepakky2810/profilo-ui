import React from "react";
import Icon from "@mdi/react";
import { useGoogleLogout } from "react-google-login";
import { mdiAccountEdit, mdiAccount, mdiLogoutVariant } from "@mdi/js";
import MenuIcon from "@material-ui/icons/Menu";
import { useDispatch } from "react-redux";
import { toggleFlag } from "@Src/actions/flagActions";
import { FLAGS } from "@Reducers/flagsReducer";
import { fetchProfileData, setActiveModalId } from "@Actions/modalDetailsActions";
import { useNavigate } from "react-router-dom";
import { resetAuthenticationState, SIGN_IN_METHODS } from "@Src/actions/authActions";
import { useSelector } from "react-redux";
import { GOOGLE_CLIENT_ID } from "../../utils/globalConstants";

export const MODAL_CONFIG = {
	LOGOUT: {
		ID: -1,
		TITLE: "LOGOUT",
		ROUTE: "",
	},
	MENU: {
		ID: 0,
		TITLE: "MENU",
		ROUTE: "",
	},
	VIEW_PROFILE: {
		ID: 1,
		TITLE: "View Profile",
		ROUTE: "view-profile",
	},
	EDIT_PROFILE: {
		ID: 2,
		TITLE: "Edit Profile",
		ROUTE: "edit-profile",
	},
	CREATE_PROFILE: {
		ID: 3,
		TITLE: "Create Profile",
		ROUTE: "create-profile",
	},
};

export const useModalConfig = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { signOut } = useGoogleLogout({
		clientId: GOOGLE_CLIENT_ID,
		onLogoutSuccess: () => {
			console.log("Signed out from google");
		},
	});
	const { method: signInMethod } = useSelector((state) => state.auth);

	const modalConfig = [
		{
			label: MODAL_CONFIG.LOGOUT.TITLE,
			id: MODAL_CONFIG.LOGOUT.ID,
			icon: <Icon path={mdiLogoutVariant} size="1.5em" />,
			classes: [],
			hidden: false,
			onClickHandler: () => {
				if (signInMethod === SIGN_IN_METHODS.GOOGLE) {
					signOut();
				}
				dispatch(resetAuthenticationState());
				navigate("/");
			},
		},
		{
			label: MODAL_CONFIG.MENU.TITLE,
			id: MODAL_CONFIG.MENU.ID,
			icon: <MenuIcon />,
			classes: [],
			hidden: false,
			onClickHandler: () => dispatch(toggleFlag(FLAGS.SIDEBAR_OPEN)),
		},
		{
			label: MODAL_CONFIG.VIEW_PROFILE.TITLE,
			id: MODAL_CONFIG.VIEW_PROFILE.ID,
			icon: <Icon path={mdiAccount} size="1.5em" />,
			classes: [],
			hidden: false,
			onClickHandler: () => {
				dispatch(fetchProfileData(navigate));
			},
		},
		{
			label: MODAL_CONFIG.EDIT_PROFILE.TITLE,
			id: MODAL_CONFIG.EDIT_PROFILE.ID,
			icon: <Icon path={mdiAccountEdit} size="1.5em" />,
			classes: [],
			hidden: false,
			onClickHandler: () => {
				navigate("/edit-profile");
				dispatch(setActiveModalId(MODAL_CONFIG.EDIT_PROFILE.ID));
			},
		},
		{
			label: MODAL_CONFIG.CREATE_PROFILE.TITLE,
			id: MODAL_CONFIG.CREATE_PROFILE.ID,
			hidden: true,
			onClickHandler: () => {
				navigate("/create-profile");
				dispatch(setActiveModalId(MODAL_CONFIG.EDIT_PROFILE.ID));
			},
		},
	];

	return modalConfig;
};
