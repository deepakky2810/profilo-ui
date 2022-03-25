/* eslint-disable no-extra-boolean-cast */
import React from "react";
import { useSelector } from "react-redux";
import Profile from "./Profile";

const EditProfile = () => {
	const initialCacheState = useSelector((state) => state.modalDetails.profileData);
	initialCacheState.dob = new Date(initialCacheState.dob);
	return <Profile initialCacheState={initialCacheState} mode="Edit" />;
};

export default EditProfile;
