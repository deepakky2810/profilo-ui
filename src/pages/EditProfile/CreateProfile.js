/* eslint-disable no-extra-boolean-cast */
import React from "react";
import { useSelector } from "react-redux";
import Profile from "./Profile";

const CreateProfile = () => {
	const emailId = useSelector((state) => state.auth.emailId);
	const getRandomChar = () => {
		const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
		return characters.charAt(Math.floor(Math.random() * 26));
	};
	const generateRandomName = () => `${getRandomChar()}${getRandomChar()}`;
	const initialCacheState = {
		firstName: "",
		middleName: "",
		lastName: "",
		profilePictureUrl: `https://avatars.abstractapi.com/v1/?api_key=6491e4868ee6423f868aabd31f010618&image_size=150&is_bold=true&font_size=0.7&name=${
			emailId?.split("@")[0] ?? generateRandomName()
		}`,
		facebookUrl: "",
		githubUrl: "",
		linkedinUrl: "",
		instagramUrl: "",
		dob: new Date(),
		workExperiences: [],
	};

	return <Profile initialCacheState={initialCacheState} mode="Create" />;
};

export default CreateProfile;
