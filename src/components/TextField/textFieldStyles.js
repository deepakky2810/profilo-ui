import { makeStyles } from "@material-ui/core";

const useTextFieldStyles = makeStyles(
	(theme) => ({
		inputField: {
			margin: `${theme.spacing(5)} 0px`,
		},
		textfield: {
			cursor: "text",
		},
		textfieldInput: {
			cursor: "text",
			color: theme.palette.primary.main,
			...theme.typography.subtitle1,
		},
		bigInputStyles: {
			height: theme.typography.pxToRem(40),
		},
		smallInputStyles: {
			height: theme.typography.pxToRem(25),
		},
	}),
	{ name: "TextField" }
);

export default useTextFieldStyles;
