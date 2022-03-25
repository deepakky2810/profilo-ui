/* eslint-disable prettier/prettier */
/* eslint-disable no-useless-escape */
import React from "react";
import { makeStyles } from "@material-ui/core";
import { PropTypes } from "prop-types";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
	customImageUpload: {
		display: "flex",
		alignItems: "center",
		position: "relative",
		cursor: "pointer",
		borderRadius: `${theme.typography.pxToRem(4)}`,
		border: `${theme.typography.pxToRem(2)} solid ${theme.palette.primary.grey}`,
		"&:hover": {
			border: `${theme.typography.pxToRem(2)} solid ${theme.palette.primary.main}`,
		},
		height: theme.typography.pxToRem(25),
		width: theme.typography.pxToRem(140),
		"&::before": {
			content: '"\\E2C6"',
			fontFamily: "Material Icons",
			fontSize: theme.typography.pxToRem(20),
			position: "absolute",
			top: "50%",
			right: "0%",
			transform: "translate(4%, -52%)",
			textAlign: "center",
			color: "#120C03",
			height: theme.typography.pxToRem(23),
			width: theme.typography.pxToRem(30),
			borderTopRightRadius: `${theme.typography.pxToRem(4)}`,
			borderBottomRightRadius: `${theme.typography.pxToRem(4)}`,
			opacity: "0",
			transition: ".5s ease",
			backgroundColor: "#FFFFFF",
		},
		"&:hover::before": {
			opacity: "0.9",
		},
	},
	inputStyles: {
		display: "none",
		"&:focus": {
			outline: "none",
			border: "1px solid #64d488",
		},
		"&::placeholder": {
			color: "#bebebe",
		},
	},
	uploadStatusText: {
		fontSize: theme.typography.pxToRem(15),
		fontWeigth: 400,
		marginLeft: theme.spacing(5),
	},
}));
const SimpleLogoUploader = ({ setCompanyLogoUrl }) => {
	const classes = useStyles();
	const [, setFile] = React.useState("");
	const [status, setStatus] = React.useState("");

	const photoUpload = (e) => {
		e.preventDefault();
		setStatus("Uploading...");
		const reader = new FileReader();
		const filezz = e.target.files[0];
		reader.onloadend = () => {
			setFile(filezz);
			setCompanyLogoUrl(reader.result);
			setStatus("Uploaded");
		};
		reader.readAsDataURL(filezz);
	};

	return (
		<label htmlFor="zz-upload" className={classes.customImageUpload}>
			<Typography className={classes.uploadStatusText}>{status}</Typography>
			<input
				id="zz-upload"
				type="file"
				accept="image/*"
				className={classes.inputStyles}
				onChange={photoUpload}
			/>
		</label>
	);
};

SimpleLogoUploader.propTypes = {
	// profilePictureUrl: PropTypes.string,
	setCompanyLogoUrl: PropTypes.func.isRequired,
};

export default SimpleLogoUploader;
