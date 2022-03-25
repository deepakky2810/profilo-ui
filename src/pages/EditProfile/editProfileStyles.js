/* eslint-disable import/prefer-default-export */
import { makeStyles } from "@material-ui/core";

export const useEditProfileStyles = makeStyles(
	(theme) => ({
		informationWrapperStyles: {
			marginTop: theme.typography.pxToRem(20),
		},
		avatarStyles: {
			height: theme.typography.pxToRem(100),
			width: theme.typography.pxToRem(100),
			border: "1px solid white",
		},
		bigHeaderTextStyles: {
			...theme.typography.h2,
			lineHeight: "1.2",
		},
		externalProfileButtonStyles: {
			height: theme.typography.pxToRem(24),
			width: theme.typography.pxToRem(24),
		},
		workExpWrapperStyle: {
			marginTop: theme.typography.pxToRem(20),
		},
		editProfileModalWrapper: {
			width: "100%",
			height: "100%",
		},
		workExperienceHeaderStyles: {
			color: theme.palette.secondary.grey,
			marginBottom: theme.typography.pxToRem(20),
			marginTop: theme.typography.pxToRem(20),
		},
		companyLogoStyles: {
			maxHeight: theme.typography.pxToRem(55),
			maxWidth: theme.typography.pxToRem(150),
		},
		companyDetailsWrapperStyles: {
			flexDirection: "column",
			justifyContent: "space-between",
			height: theme.typography.pxToRem(100),
		},
		companyName: {
			color: theme.palette.secondary.grey,
		},
		marginLeft20: {
			marginLeft: theme.typography.pxToRem(20),
		},
		scrollWrapper: {
			height: "90%",
			overflowX: "hidden",
			overflowY: "auto",
		},
		scrollWidthAdjust: {
			marginRight: theme.typography.pxToRem(10),
		},
		btnStyles: {
			...theme.typography.overline,
			backgroundColor: theme.palette.background.paper,
			borderRadius: theme.typography.pxToRem(5),
			lineHeight: 1.7,
			padding: `${theme.typography.pxToRem(5)} ${theme.typography.pxToRem(12)}`,
		},
		btnRootStyles: {
			marginTop: theme.typography.pxToRem(15),
		},
		textAreaStyles: {
			width: "100%",
			color: theme.palette.primary.main,
			...theme.typography.subtitle1,
			backgroundColor: "transparent",
			padding: `${theme.typography.pxToRem(5)} ${theme.typography.pxToRem(12)}`,
			borderRadius: `${theme.typography.pxToRem(5)}`,
			border: `${theme.typography.pxToRem(2)} solid ${theme.palette.primary.grey}`,
			"&:hover": {
				border: `${theme.typography.pxToRem(2)} solid ${theme.palette.primary.main}`,
			},
		},
		workExpToolbarWrapper: {
			display: "flex",
			justifyContent: "flex-end",
			alignItems: "center",
		},
		headerRightSction: {
			display: "flex",
			alignItems: "center",
		},
		marginLeft10: {
			margin: "0px",
			marginLeft: theme.typography.pxToRem(10),
		},
		marginBottom10: {
			marginBottom: theme.typography.pxToRem(10),
		},
		marginTop20: {
			marginBottom: theme.typography.pxToRem(20),
		},
		fromToStyle: {
			display: "flex",
			lineHeight: theme.spacing(25),
		},
		checkboxIcon: {
			height: theme.typography.pxToRem(20),
			width: theme.typography.pxToRem(20),
		},
	}),
	{ name: "EditProfilePage" }
);
