import React from "react";
import MUITextField from "@material-ui/core/TextField";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";

const useStyle = makeStyles((theme) => ({
	input: {
		color: theme.palette.primary.main,
		border: `${theme.typography.pxToRem(2)} solid ${theme.palette.primary.grey}`,
		"&:hover": {
			border: `${theme.typography.pxToRem(2)} solid ${theme.palette.primary.main}`,
		},
	},
	borderError: {
		border: `${theme.typography.pxToRem(2)} solid ${theme.palette.error.main}`,
		"&:hover": {
			border: `${theme.typography.pxToRem(2)} solid ${theme.palette.error.main}`,
		},
	},
}));

const propTypes = {
	heightCtrl: PropTypes.object,
	variant: PropTypes.oneOf(["standard", "outlined", "filled"]),
	autoFocus: PropTypes.bool,
	error: PropTypes.bool,
	required: PropTypes.bool,
	type: PropTypes.string,
	disableUnderline: PropTypes.bool,
	margin: PropTypes.oneOf(["dense", "normal", "none"]),
	multiline: PropTypes.bool,
	placeholder: PropTypes.string,
	value: PropTypes.any,
	defaultValue: PropTypes.any,
	InputProps: PropTypes.object,
	maxLength: PropTypes.number,
	onChange: PropTypes.func,
};
const defaultProps = {
	heightCtrl: {},
	placeholder: "",
	autoFocus: false,
	error: false,
	required: false,
	type: "text",
	disableUnderline: false,
	margin: "none",
	multiline: false,
	variant: "standard",
	defaultValue: undefined,
	InputProps: {},
	maxLength: undefined,
	value: undefined,
	onChange: () => {},
};

const TextFieldBase = (props) => {
	const baseClasses = useStyle(props);
	const {
		heightCtrl,
		error,
		maxLength,
		variant,
		disableUnderline,
		InputProps,
		onChange,
		...rest
	} = props;
	const modifiedInputProps = { ...InputProps, disableUnderline };
	if (variant === "outlined") delete modifiedInputProps.disableUnderline;
	const handleChange = (event) => {
		const isFieldValid = event.target.value && true;
		onChange(event, isFieldValid);
	};

	return (
		<MUITextField
			variant={variant}
			error={error}
			InputProps={{
				...modifiedInputProps,
				className: clsx(
					baseClasses.input,
					heightCtrl.input,
					error ? baseClasses.borderError : {},
					InputProps.className
				),
			}}
			onInput={(e) => {
				e.target.value = maxLength
					? e.target.value.toString().slice(0, maxLength)
					: e.target.value;
			}}
			onChange={(e) => handleChange(e)}
			{...rest}
		/>
	);
};
TextFieldBase.defaultProps = defaultProps;
TextFieldBase.propTypes = propTypes;

export default TextFieldBase;
