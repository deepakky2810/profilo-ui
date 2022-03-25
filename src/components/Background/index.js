import React from "react";
import styled from "styled-components";
import { PropTypes } from "prop-types";
import Card from "@Components/CardBase";
import { makeStyles } from "@material-ui/core";

const BackgroundWrapper = styled.div``;

const useStyles = makeStyles((theme) => ({
	heightWidth100Perc: {
		height: "100%",
		width: "100%",
	},
	parentCardStyles: {
		borderRadius: `${theme.typography.pxToRem(45)}/${theme.typography.pxToRem(35)}`,
		background: "radial-gradient(#1f2d36 50%, rgb(39, 61, 73) 100%)",
	},
	parentCardBodyStyles: {
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		height: "100%",
		width: "100%",
	},
	childCardStyles: {
		borderRadius: `${theme.typography.pxToRem(38)}/${theme.typography.pxToRem(28)}`,
		background: "#120C03",
		overflow: "hidden",
	},
}));

const Background = ({ children }) => {
	const classes = useStyles();

	return (
		<BackgroundWrapper className={classes.heightWidth100Perc}>
			<Card
				classes={{
					cardRoot: classes.parentCardStyles,
					cardBody: classes.parentCardBodyStyles,
				}}
			>
				<Card
					classes={{
						cardRoot: classes.childCardStyles,
						cardBody: classes.heightWidth100Perc,
					}}
				>
					{children}
				</Card>
			</Card>
		</BackgroundWrapper>
	);
};

Background.propTypes = {
	children: PropTypes.node.isRequired,
};

export default Background;
