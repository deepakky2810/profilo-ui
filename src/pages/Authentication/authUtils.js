/* eslint-disable no-useless-escape */
/* eslint-disable import/prefer-default-export */
import React from "react";
import {
	setAuthenticationStart,
	setAuthenticationInProgress,
	setAuthenticationInSuccess,
	setAuthenticationFailed,
	setSignInUsingGoogle,
} from "@Src/actions/authActions";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useModalConfig } from "@Src/components/Sidebar/configs";

export const useAuthUtilities = (action) => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const modalConfig = useModalConfig();
	const initialCacheState = {
		email: "",
		password: "",
	};
	const [cache, setCache] = React.useState(initialCacheState);
	const emailRef = React.useRef(null);
	const passwordRef = React.useRef(null);
	React.useEffect(() => {
		emailRef.current.focus();
		dispatch(setAuthenticationInProgress(false));
		dispatch(setAuthenticationInSuccess(false));
		dispatch(setAuthenticationFailed(false));
		setCache({ ...initialCacheState });

		return () => {
			dispatch(setAuthenticationInProgress(false));
			dispatch(setAuthenticationInSuccess(false));
			dispatch(setAuthenticationFailed(false));
		};
	}, [action]);

	const emailValidator = () =>
		cache.email.match(
			/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
		);

	const passwordValidator = () =>
		cache.password.match(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{4,}$/);

	const handleSignInBtnClick = () => {
		navigate("/sign-in");
	};

	const handleSignUpBtnClick = () => {
		navigate("/sign-up");
	};

	const handleSubmitBtnClick = () => {
		dispatch(
			setAuthenticationStart({
				redirectToSignIn: handleSignInBtnClick,
				redirectToViewProfile: modalConfig[2].onClickHandler,
				credentials: cache,
				action,
			})
		);
	};

	const handleHomeBtnClick = () => {
		navigate("/");
	};

	const handleGoogleSignInSuccess = (res) => {
		dispatch(
			setSignInUsingGoogle({
				redirectToViewProfile: modalConfig[2].onClickHandler,
				tokenId: res.tokenId,
				action,
			})
		);
	};
	const handleGoogleSignInFailure = (res) => console.log("signedIn failed:", res);

	return {
		cache,
		setCache,
		emailRef,
		passwordRef,
		emailValidator,
		passwordValidator,
		handleHomeBtnClick,
		handleSignInBtnClick,
		handleSignUpBtnClick,
		handleSubmitBtnClick,
		handleGoogleSignInSuccess,
		handleGoogleSignInFailure,
	};
};
