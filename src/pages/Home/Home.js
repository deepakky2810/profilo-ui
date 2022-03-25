import React from "react";
import BackgroundWrapper from "@Components/Background";
import { BigButton } from "@Components/Button/";
import {
	LEFT_COMPONENT_WIDTH,
	USABLE_SCREEN_HEIGHT_IN_PX,
	USABLE_SCREEN_WIDTH_IN_PX,
} from "@Src/utils/globalConstants";
import styled from "styled-components";
import { makeStyles, Typography } from "@material-ui/core";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
	root: {
		height: theme.typography.pxToVh(USABLE_SCREEN_HEIGHT_IN_PX),
		width: theme.typography.pxToVw(USABLE_SCREEN_WIDTH_IN_PX),
		display: "flex",
		marginLeft: theme.typography.pxToVw(LEFT_COMPONENT_WIDTH.CLOSED),
	},
	header: {
		display: "flex",
		justifyContent: "space-between",
		width: "100%",
	},
	rightSection: {
		display: "flex",
		"& > button": {
			marginLeft: theme.spacing(20),
		},
	},
}));

const HomePageWrapper = styled.div``;

const Home = () => {
	const classes = useStyles();
	const navigate = useNavigate();

	const handleSignInBtnClick = () => {
		navigate("/sign-in");
	};
	const handleSignUpBtnClick = () => {
		navigate("/sign-up");
	};
	return (
		<HomePageWrapper className={classes.root}>
			<BackgroundWrapper>
				<div className={classes.header}>
					<Typography variant="h5">Welcome to Profilo</Typography>
					<div className={classes.rightSection}>
						<BigButton onClick={handleSignUpBtnClick}>SIGN UP</BigButton>
						<BigButton onClick={handleSignInBtnClick}>SIGN IN</BigButton>
					</div>
				</div>
				<div>
					{/* <Typography variant="body1">Wanna create your profile ?</Typography> */}
				</div>
			</BackgroundWrapper>
		</HomePageWrapper>
	);
};

export default Home;
