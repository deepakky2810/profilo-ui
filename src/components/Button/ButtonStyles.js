import { makeStyles } from "@material-ui/core";

const useButtonStyles = makeStyles(
	(theme) => ({
		btnStyles: (props) => ({
			...(theme.typography[props.textVariant] ?? {}),
			backgroundColor: theme.palette.background.paper,
			borderRadius: theme.typography.pxToRem(5),
			lineHeight: 1.7,
			padding: `${theme.typography.pxToRem(5)} ${theme.typography.pxToRem(12)}`,
		}),
		btnRootStyles: ({ margin }) => ({
			margin: `${theme.typography.pxToRem(margin[0] ?? 0)} ${theme.typography.pxToRem(
				margin[1] ?? 0
			)} ${theme.typography.pxToRem(margin[2] ?? 0)} ${theme.typography.pxToRem(
				margin[3] ?? 0
			)} `,
		}),
	}),
	{ name: "TextField" }
);

export default useButtonStyles;
