/* eslint-disable import/prefer-default-export */
import { makeStyles } from "@material-ui/core";

export const useAuthPageStyles = makeStyles(
	(theme) => ({
		root: {
			display: "flex",
			height: theme.typography.pxToVh(700),
			width: theme.typography.pxToVw(800),
			maxHeight: "750px",
			maxWidth: "400px",
			minHeight: "450px",
			minWidth: "350px",
		},
		marginBottom20: {
			marginBottom: theme.typography.pxToRem(20),
		},
		heightForGap: {
			height: theme.typography.pxToRem(30),
		},
		googleBtnSize: {
			height: theme.typography.pxToRem(25),
			width: theme.typography.pxToRem(25),
		},
		loginLinkStyles: {
			cursor: "pointer",
			transition: "500ms ease",
			"&:hover": {
				...theme.typography.subtitle2,
				transition: "500ms ease",
			},
		},
		iconColor: {
			color: theme.palette.primary.main,
		},
		snackbarContentRoot: {
			background: "#1f2d36",
			borderRadius: theme.spacing(10),
			borderLeft: `${theme.spacing(4)} solid ${theme.palette.success.main}`,
		},
		borderError: {
			borderLeft: `${theme.spacing(4)} solid ${theme.palette.error.main}`,
		},
		snackBarContentMessage: {
			color: theme.palette.text.primary,
		},
	}),
	{ name: "AuthenticationPage" }
);
