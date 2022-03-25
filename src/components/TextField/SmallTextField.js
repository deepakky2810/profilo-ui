import React from "react";
import TextFieldBase from "./TextFieldBase";
import useTextFieldStyles from "./textFieldStyles";

const SmallTextField = (props) => {
	const classes = useTextFieldStyles();
	return (
		<TextFieldBase
			classes={{
				root: classes.inputField,
			}}
			fullWidth
			variant="outlined"
			InputProps={{
				classes: {
					root: classes.textfield,
					input: classes.textfieldInput,
				},
			}}
			heightCtrl={{ input: classes.smallInputStyles }}
			{...props}
		/>
	);
};

export default SmallTextField;
