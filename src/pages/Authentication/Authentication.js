/* eslint-disable react/jsx-curly-brace-presence */
/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from "react";
import styled from "styled-components";
import { PropTypes } from "prop-types";
import { useSelector } from "react-redux";
import { GoogleLogin } from "react-google-login";
import { Grid, IconButton, Typography, Snackbar, useTheme } from "@material-ui/core";
import { BigTextField } from "@Src/components/TextField";
import BackgroundWrapper from "@Components/Background";
import GoogleIcon from "@Src/assets/images/google-icon.svg";
import { BigButton, SmallButton } from "@Src/components/Button";
import HomeIcon from "@material-ui/icons/Home";
import CircularProgress from "@material-ui/core/CircularProgress";
import clsx from "clsx";
import { RESPONSE_CODE } from "@Src/services/networkServices";
// import OverlayTrigger from "@Src/components/OverlayTrigger";
import { useAuthUtilities } from "./authUtils";
import { useAuthPageStyles } from "./AuthenticationStyles";
import { GOOGLE_CLIENT_ID } from "../../utils/globalConstants";

const AuthenticationPageWrapper = styled.div``;
const Header = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;
const AuthCard = styled.div`
	height: 100%;
	width: 100%;
	display: flex;
	flex-direction: column;
`;

const GoogleSignInButton = (props) => {
	const classes = useAuthPageStyles();
	return (
		<BigButton
			startIcon={<img src={GoogleIcon} className={classes.googleBtnSize} alt="googleIcon" />}
			margin={[5, 5, 5, 5]}
			{...props}
		>
			Google
		</BigButton>
	);
};

const Authentication = ({ action }) => {
	const theme = useTheme();
	const classes = useAuthPageStyles();
	const [, setActive] = React.useState(true);
	const [snackbarOpen, setSnackbarOpen] = React.useState(false);
	const {
		isSignedIn,
		authInProgress,
		authFailed,
		errorCode,
		authSuccess,
		action: actionInProgress,
	} = useSelector((state) => state.auth);
	const errorMsgs = {
		[RESPONSE_CODE.FAILURE_EMAIL_ALREADY_EXISTS]: "Email Id already exists",
		[RESPONSE_CODE.FAILURE_INVALID_CREDENTIALS]: "Invalid email Id or password",
	};
	const successMsgs = {
		SIGN_UP: "Signed up successfully. Please login to continue",
		SIGN_IN: "Signed in successfully",
	};
	React.useEffect(() => {
		if (authFailed && errorCode) {
			setSnackbarOpen(true);
		} else if (authSuccess) {
			setSnackbarOpen(true);
		}
	}, [authFailed, errorCode, authSuccess]);

	const {
		cache,
		setCache,
		emailRef,
		passwordRef,
		emailValidator,
		passwordValidator,
		handleGoogleSignInSuccess,
		handleGoogleSignInFailure,
		handleSignInBtnClick,
		handleSignUpBtnClick,
		handleSubmitBtnClick,
		handleHomeBtnClick,
	} = useAuthUtilities(action);

	return (
		<AuthenticationPageWrapper className={classes.root}>
			<BackgroundWrapper>
				<AuthCard>
					<Header className={classes.marginBottom20}>
						<Typography variant="h4">
							{`SIGN ${action === "SIGN_IN" ? "IN" : "UP"}`}
						</Typography>
						<IconButton className={classes.iconColor} onClick={handleHomeBtnClick}>
							<HomeIcon />
						</IconButton>
					</Header>
					<Grid container>
						<Grid item xs={12}>
							<Typography noWrap variant="body2">
								Email
							</Typography>
						</Grid>
						<Grid item xs={12}>
							{/* <OverlayTrigger
								trigger={
									!emailValidator() && document.activeElement !== emailRef.current
								}
								title={`Invalid email`}
							> */}
							<BigTextField
								value={cache.email}
								autoComplete="off"
								inputRef={emailRef}
								onFocus={() => setActive(true)}
								onBlur={() => setActive(false)}
								error={
									!emailValidator() && document.activeElement !== emailRef.current
								}
								onChange={(e) => setCache({ ...cache, email: e.target.value })}
							/>
							{/* </OverlayTrigger> */}
						</Grid>
						<Grid item xs={12}>
							<Typography noWrap variant="body2">
								Password
							</Typography>
						</Grid>
						<Grid item xs={12}>
							{/* <OverlayTrigger
								trigger={action === "SIGN_UP" && !passwordValidator()}
								title={`Passwords must have:
								Minimum four characters, at least one uppercase letter, one lowercase letter and one number`}
							> */}
							<BigTextField
								value={cache.password}
								autoComplete="off"
								type="password"
								inputRef={passwordRef}
								{...(action === "SIGN_UP"
									? {
											error:
												!passwordValidator() &&
												document.activeElement === passwordRef.current,
											onFocus: () => setActive(true),
											onBlur: () => setActive(false),
									  }
									: {})}
								onChange={(e) => setCache({ ...cache, password: e.target.value })}
							/>
							{/* </OverlayTrigger> */}
						</Grid>
						<Grid item xs={12} justifyContent="center">
							{authInProgress ? (
								<CircularProgress
									style={{
										height: theme.typography.pxToRem(35),
										width: theme.typography.pxToRem(35),
										padding: theme.typography.pxToRem(4),
									}}
								/>
							) : (
								<SmallButton
									margin={[10, 5, 10, 5]}
									onClick={handleSubmitBtnClick}
									disabled={
										!emailValidator() ||
										(action === "SIGN_UP" ? !passwordValidator() : false)
									}
								>
									SUBMIT
								</SmallButton>
							)}
						</Grid>
						{/* <Grid item xs={12} className={classes.heightForGap}></Grid> */}
						<Grid item xs={12} justifyContent="center">
							<Typography noWrap variant="body2">
								OR
							</Typography>
						</Grid>
						<Grid item xs={12} justifyContent="center">
							<Typography noWrap variant="subtitle1">
								{`Sign ${action === "SIGN_IN" ? "in" : "up"} with`}
							</Typography>
						</Grid>
						<Grid item xs={12} justifyContent="center">
							<div>
								<GoogleLogin
									clientId={GOOGLE_CLIENT_ID}
									buttonText="Sign In"
									onSuccess={handleGoogleSignInSuccess}
									onFailure={handleGoogleSignInFailure}
									isSignedIn={isSignedIn}
									render={(renderProps) => (
										<GoogleSignInButton onClick={renderProps.onClick} />
									)}
								/>
							</div>
						</Grid>
						<Grid item xs={12} justifyContent="center">
							<Typography noWrap variant="overline">
								{`${
									action === "SIGN_IN"
										? "New to PROFILO"
										: "Already have an account"
								}?`}
								&nbsp;&nbsp;
								<span
									role="button"
									onClick={
										action === "SIGN_IN"
											? handleSignUpBtnClick
											: handleSignInBtnClick
									}
									className={classes.loginLinkStyles}
								>
									{`Sign${action === "SIGN_IN" ? "up" : "in"}`}
								</span>
							</Typography>
						</Grid>
					</Grid>
				</AuthCard>
			</BackgroundWrapper>

			<Snackbar
				anchorOrigin={{
					vertical: "bottom",
					horizontal: "left",
				}}
				ContentProps={{
					classes: {
						root: clsx(classes.snackbarContentRoot, {
							[classes.borderError]: authFailed && errorCode,
						}),
						message: classes.snackBarContentMessage,
					},
				}}
				open={snackbarOpen}
				autoHideDuration={6000}
				onClose={(e, reason) => (reason === "clickaway" ? null : setSnackbarOpen(false))}
				message={authFailed ? errorMsgs[errorCode] : successMsgs[actionInProgress]}
			/>
		</AuthenticationPageWrapper>
	);
};

Authentication.propTypes = {
	action: PropTypes.oneOf(["SIGN_IN", "SIGN_UP"]).isRequired,
};

export default Authentication;
