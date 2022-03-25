const { makeStyles } = require("@material-ui/core");

export const useTooltipStyles = makeStyles((theme) => ({
	arrow: {
		color: "#1f2d36",
	},
	tooltip: {
		background: "#1f2d36",
		color: theme.palette.text.primary,
		...theme.typography.subtitle2,
	},
}));
