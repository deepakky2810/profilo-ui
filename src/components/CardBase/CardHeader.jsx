/* eslint-disable react/prop-types */
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
	root: {
		display: "flex",
		justifyContent: "space-between",
		alignItems: "center",
		textAlign: "left",
		boxSizing: "border-box",
		letterSpacing: 0,
		color: theme.palette.text.primary,
		paddingTop: theme.typography.pxToRem(7),
		paddingBottom: theme.typography.pxToRem(7),
		height: theme.typography.pxToRem(50),
		...theme.typography.h4,
	},
}));

const CardHeader = ({ children: headerContent, className }) => {
	const classes = useStyles();

	return <div className={clsx(classes.root, className)}>{headerContent}</div>;
};

export default CardHeader;
