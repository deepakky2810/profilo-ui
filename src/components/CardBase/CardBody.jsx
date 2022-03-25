/* eslint-disable react/prop-types */
import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
	root: {
		flex: 1,
		boxSizing: "border-box",
		textAlign: "left",
		fontSize: theme.typography.body1.fontSize,
		letterSpacing: 0,
		color: "inherit"
	}
}));

const CardBody = ({ children: bodyContent, config, className }) => {
	const classes = useStyles(config);

	return <div className={clsx(classes.root, className)}>{bodyContent}</div>;
};

export default CardBody;
