// to maintain border Width of MUI paper outlined and custom anchor triangle
const borderWidth = 2;

const cardStyles = (theme) => ({
	root: {
		width: "100%",
		height: "100%",
		display: "flex",
		flexDirection: "column",
		position: "relative",
		boxSizing: "border-box",
		padding: theme.spacing(26, 30),
		background: theme.palette.background.default,
		color: theme.palette.text.primary,
	},
	outlined: {
		border: `${theme.typography.pxToRem(borderWidth)} solid ${theme.palette.secondary.dark}`,
		boxShadow: `${theme.spacing(2, 3, 15)} #00000052`,
	},
});

export default cardStyles;
