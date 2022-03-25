/* eslint-disable react/prop-types */
import React from "react";
import { Tooltip } from "@material-ui/core";
import { useTooltipStyles } from "./overlayTriggerStyles";

const OverlayTrigger = ({ trigger, children, ...props }) => {
	const classes = useTooltipStyles();

	return trigger ? (
		<Tooltip arrow placement="right" classes={classes} {...props}>
			{children}
		</Tooltip>
	) : (
		<>{children}</>
	);
};

export default OverlayTrigger;
