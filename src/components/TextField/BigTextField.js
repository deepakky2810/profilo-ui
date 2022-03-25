import React from "react";
import TextFieldBase from "./TextFieldBase";
import useTextFieldStyles from "./textFieldStyles";

const BigTextField = (props) => {
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
			heightCtrl={{ input: classes.bigInputStyles }}
			{...props}
		/>
	);
};

export default BigTextField;
