import React from "react";
import PropTypes from "prop-types";
import { Button } from "@material-ui/core";
import useButtonStyles from "./ButtonStyles";

const ButtonBase = React.forwardRef(
	({ children, margin, textVariant, className, ...rest }, ref) => {
		const classes = useButtonStyles({ margin, textVariant });
		return (
			<Button
				classes={{
					label: classes.btnStyles,
					root: classes.btnRootStyles,
				}}
				ref={ref}
				className={className}
				{...rest}
			>
				{children}
			</Button>
		);
	}
);

ButtonBase.propTypes = {
	children: PropTypes.element,
	textVariant: PropTypes.string,
	margin: PropTypes.arrayOf(PropTypes.number),
	className: PropTypes.object,
};
ButtonBase.defaultProps = {
	children: null,
	textVariant: "body1",
	margin: [0, 0, 0, 0],
	className: {},
};

export default ButtonBase;
