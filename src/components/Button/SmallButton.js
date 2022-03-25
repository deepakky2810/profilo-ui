import React from "react";
import ButtonBase from "./ButtonBase";

const SmallButton = React.forwardRef((props, ref) => (
	<ButtonBase textVariant="overline" ref={ref} {...props} />
));

export default SmallButton;
