import React from "react";
import styled from "styled-components";
import clsx from "clsx";
import { PropTypes } from "prop-types";
import { makeStyles } from "@material-ui/core";
import {
	LEFT_COMPONENT_WIDTH,
	RIGHT_COMPONENT_WIDTH,
	USABLE_SCREEN_HEIGHT_IN_PX,
	USABLE_SCREEN_WIDTH_IN_PX,
} from "@Src/utils/globalConstants";

const DrawerWrapper = styled.div``;

const LeftComponent = styled.div``;
const RightComponent = styled.div``;

const useStyles = makeStyles((theme) => ({
	root: {
		height: theme.typography.pxToVh(USABLE_SCREEN_HEIGHT_IN_PX),
		width: theme.typography.pxToVw(USABLE_SCREEN_WIDTH_IN_PX),
		display: "flex",
	},
	leftCompOpenStyles: {
		width: theme.typography.pxToVw(LEFT_COMPONENT_WIDTH.OPEN),
		transition: "500ms ease !important",
	},
	leftCompCloseStyles: {
		width: theme.typography.pxToVw(LEFT_COMPONENT_WIDTH.CLOSED),
		transition: "500ms ease !important",
	},
	rightCompOpenStyles: {
		width: theme.typography.pxToVw(RIGHT_COMPONENT_WIDTH.OPEN),
		transition: "500ms ease !important",
	},
	rightCompCloseStyles: {
		width: theme.typography.pxToVw(RIGHT_COMPONENT_WIDTH.CLOSED),
		transition: "500ms ease !important",
	},
	leftCompStyles: {
		margin: `${theme.typography.pxToVh(50)} 0px`,
	},
	rightCompStyles: {},
}));

const HorizontalDrawer = ({ children, open }) => {
	const [leftChild, rightChild] = children;
	const classes = useStyles();
	return (
		<DrawerWrapper className={classes.root}>
			<LeftComponent
				className={clsx(classes.leftCompStyles, {
					[classes.leftCompOpenStyles]: open,
					[classes.leftCompCloseStyles]: !open,
				})}
			>
				{leftChild}
			</LeftComponent>
			<RightComponent
				className={clsx(classes.rightCompStyles, {
					[classes.rightCompOpenStyles]: open,
					[classes.rightCompCloseStyles]: !open,
				})}
			>
				{rightChild}
			</RightComponent>
		</DrawerWrapper>
	);
};

HorizontalDrawer.propTypes = {
	children: PropTypes.node.isRequired,
	open: PropTypes.bool.isRequired,
};

export default HorizontalDrawer;
