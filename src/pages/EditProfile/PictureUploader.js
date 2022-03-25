/* eslint-disable prettier/prettier */
/* eslint-disable no-useless-escape */
import React from "react";
import { Avatar, makeStyles } from "@material-ui/core";
import { PropTypes } from "prop-types";

const useStyles = makeStyles((theme) => ({
	customImageUpload: {
		borderRadius: "50%",
		display: "inline-block",
		position: "relative",
		cursor: "pointer",
		background: "linear-gradient(270deg, #3fa1a9, #79f1a4)",
		marginBottom: theme.spacing(15),
		height: theme.typography.pxToRem(100),
		width: theme.typography.pxToRem(100),
		// border: "1px solid white",
	},
	imgUpload: {
		position: "relative",
		height: theme.typography.pxToRem(100),
		width: theme.typography.pxToRem(100),
		overflow: "hidden",
		borderRadius: "50%",
		"&::before": {
			content: '"\\E2C6"',
			fontFamily: "Material Icons",
			fontSize: theme.typography.pxToRem(35),
			position: "absolute",
			zIndex: 20,
			top: "50%",
			left: "50%",
			transform: "translate(-50%, 0%)",
			textAlign: "center",
			color: "#120C03",
			height: theme.typography.pxToRem(55),
			width: theme.typography.pxToRem(110),
			borderRadius: "0% 0% 50% 50%",
			opacity: "0",
			transition: ".5s ease",
			backgroundColor: "#1F2D36",
		},
		"&:hover::before": {
			opacity: "0.9",
		},
	},
	imageStyles: {
		height: theme.typography.pxToRem(100),
		width: theme.typography.pxToRem(100),
		border: "1px solid white",
	},
	inputStyles: {
		display: "none",
		borderRadius: "15px",
		border: "1px solid #b7b7b7",
		padding: "5px 5px 5px 10px",
		fontSize: "18px",
		transition: "0.2s",
		"&:focus": {
			outline: "none",
			border: "1px solid #64d488",
		},
		"&::placeholder": {
			color: "#bebebe",
		},
	},
}));
const PictureUploader = ({ profilePictureUrl, setProfilePictureUrl }) => {
	const classes = useStyles();
	const [, setFile] = React.useState("");

	const photoUpload = (e) => {
		e.preventDefault();
		const reader = new FileReader();
		const filezz = e.target.files[0];
		reader.onloadend = () => {
			setFile(filezz);
			setProfilePictureUrl(reader.result);
		};
		reader.readAsDataURL(filezz);
	};

	return (
		<label htmlFor="photo-upload" className={classes.customImageUpload}>
			<div className={classes.imgUpload}>
				<Avatar src={profilePictureUrl} alt="" className={classes.imageStyles} />
			</div>
			<input
				id="photo-upload"
				type="file"
				accept="image/*"
				className={classes.inputStyles}
				onChange={photoUpload}
			/>
		</label>
	);
};

PictureUploader.propTypes = {
	profilePictureUrl: PropTypes.string.isRequired,
	setProfilePictureUrl: PropTypes.func.isRequired,
};

export default PictureUploader;
