/* eslint-disable import/prefer-default-export */
import { saveProfileData } from "@Src/actions/modalDetailsActions";
import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export const useCache = (initialCacheState) => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const workExpInitialState = {
		startDate: new Date(),
		endDate: new Date(),
		presentlyWorking: false,
		jobTitle: "",
		company: "",
		companyLogoUrl: "",
		jobDescription: "",
	};
	const [cache, setCache] = React.useState(initialCacheState);

	const handleInputChange = (fieldName, value) => {
		setCache((prev) => ({ ...prev, [fieldName]: value }));
	};

	const handleChangeProfilePictureUrl = (url) => {
		setCache((prev) => ({ ...prev, profilePictureUrl: url }));
	};

	const handleAddNewWorkExp = () => {
		setCache((prev) => ({
			...prev,
			workExperiences: [...cache.workExperiences, { ...workExpInitialState }],
		}));
	};

	const handleDeleteWorkExp = (idx) => {
		const temp = [...cache.workExperiences];
		temp.splice(idx, 1);
		setCache((prev) => ({ ...prev, workExperiences: temp }));
	};

	const handleChangeWorkExp = (e, idx, fieldName) => {
		const temp = [...cache.workExperiences];
		temp[idx][fieldName] = e.target.value;
		setCache((prev) => ({ ...prev, workExperiences: [...temp] }));
	};

	const handleCheckboxWorkExp = (e, idx, fieldName) => {
		const temp = [...cache.workExperiences];
		temp[idx][fieldName] = e.target.checked;
		setCache((prev) => ({ ...prev, workExperiences: [...temp] }));
	};

	const handleChangeCompanyLogoUrl = (url, idx) => {
		const temp = [...cache.workExperiences];
		temp[idx].companyLogoUrl = url;
		setCache((prev) => ({ ...prev, workExperiences: [...temp] }));
	};

	const handleWorkExpChangeDate = (value, idx, fieldName) => {
		const temp = [...cache.workExperiences];
		temp[idx][fieldName] = value;
		setCache((prev) => ({ ...prev, workExperiences: [...temp] }));
	};

	const handleSaveProfileDetails = () => {
		dispatch(saveProfileData(cache, navigate));
	};

	const handleResetProfileDetails = () => {
		setCache({ ...initialCacheState });
	};

	return {
		handleInputChange,
		handleAddNewWorkExp,
		handleDeleteWorkExp,
		handleChangeWorkExp,
		handleSaveProfileDetails,
		handleResetProfileDetails,
		handleChangeProfilePictureUrl,
		handleChangeCompanyLogoUrl,
		handleWorkExpChangeDate,
		handleCheckboxWorkExp,
		setCache,
		cache,
	};
};
