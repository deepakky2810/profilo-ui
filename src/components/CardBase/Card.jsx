/* eslint-disable react/require-default-props */ // using default params instead, as defaultProps for FC will be deprecated in future

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import clsx from "clsx";
import PropTypes from "prop-types";
import CardHeader from "./CardHeader";
import CardBody from "./CardBody";
import cardStyles from "./cardStyles";

const useCardStyles = makeStyles(cardStyles);

const propTypes = {
	classes: PropTypes.object,
	anchorProps: PropTypes.object,
	onClick: PropTypes.func,
	onKeyDown: PropTypes.func,
	children: PropTypes.any,
	elevation: PropTypes.number,
	rest: PropTypes.object,
};

const Card = React.forwardRef(
	({ children, classes = {}, onClick = undefined, elevation = 0, ...rest }, ref) => {
		const baseClasses = useCardStyles();
		const [headerContent, bodyContent, footerContent] = Array.isArray(children)
			? children
			: [undefined, children, undefined];

		return (
			<Paper
				classes={{
					root: clsx(baseClasses.root, classes.cardRoot),
					outlined: clsx(baseClasses.outlined, classes.cardOutlined),
					...classes.paper,
				}}
				onClick={onClick}
				elevation={elevation}
				ref={ref}
				{...rest}
			>
				{headerContent && (
					<CardHeader className={classes.cardHeader}>{headerContent}</CardHeader>
				)}
				<CardBody className={classes.cardBody}>{bodyContent}</CardBody>
				{footerContent}
			</Paper>
		);
	}
);

Card.displayName = "CardBase";
Card.propTypes = propTypes;
Card.Header = CardHeader;
Card.Body = CardBody;

export default Card;
