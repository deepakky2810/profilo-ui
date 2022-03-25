import React from "react";
import ButtonBase from "./ButtonBase";

const BigButton = React.forwardRef((props, ref) => (
	<ButtonBase textVariant="body1" ref={ref} {...props} />
));

export default BigButton;
