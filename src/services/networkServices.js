import axios from "axios";

export const RESPONSE_CODE = Object.freeze({
	SUCCESS: 20,
	SUCCESS_PROFILE_EXISTS: 21,
	SUCCESS_PROFILE_NOT_EXISTS: 22,
	FAILURE: 10,
	FAILURE_EMAIL_ALREADY_EXISTS: 11,
	FAILURE_INVALID_CREDENTIALS: 12,
	HTTP_FORBIDDEN: 403,
	HTTP_UNAUTHORIZED: 401,
});

export const sendGoogleToken = async (reqObj) => {
	const url = `http://localhost:4445/sendGoogleToken.ky`;
	const body = { ...reqObj };
	console.log("sendGoogleToken API fired");
	try {
		const rawResponse = await axios.post(url, body, {
			headers: { "Content-Type": "application/json" },
		});
		const response = await rawResponse.data;
		return await response;
	} catch (exception) {
		console.log(`Exception in signusendGoogleTokenp API ${exception}`);
		return { code: exception.response.status };
	}
};

export const signup = async (reqObj) => {
	const url = `http://localhost:4445/signup.ky`;
	const body = { ...reqObj };
	console.log("signup API fired");
	try {
		const rawResponse = await axios.post(url, body, {
			headers: { "Content-Type": "application/json" },
		});
		const response = await rawResponse.data;
		return await response;
	} catch (exception) {
		console.log(`Exception in signup API ${exception}`);
		return { code: exception.response.status };
	}
};

export const signin = async (reqObj) => {
	const url = `http://localhost:4445/signin.ky`;
	const body = { ...reqObj };
	console.log("signin API fired");
	try {
		const rawResponse = await axios.post(url, body, {
			headers: { "Content-Type": "application/json" },
		});
		const response = await rawResponse.data;
		return await response;
	} catch (exception) {
		console.log(`Exception in signin API ${exception}`);
		return { code: exception.response.status };
	}
};

export const addOrEditProfileDetails = async (reqObj, token) => {
	const url = `http://localhost:4445/addOrEditProfileDetails.ky`;
	const body = { ...reqObj };
	console.log("addOrEditProfileDetails API fired");
	try {
		const rawResponse = await axios.post(url, body, {
			headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
		});
		const response = await rawResponse.data;
		return await response;
	} catch (exception) {
		console.log(`Exception in addOrEditProfileDetails API ${exception}`);
		return { code: exception.response.status };
	}
};

export const getProfileDetails = async (userId, signInMethod, token) => {
	const url = `http://localhost:4445/getProfileDetails.ky?userId=${userId}&signInMethod=${signInMethod}`;
	console.log("getProfileDetails API fired");
	try {
		const rawResponse = await axios.get(url, {
			headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
		});
		const response = await rawResponse.data;
		return await response;
	} catch (exception) {
		console.log(`Exception in getProfileDetails URL ${exception}`);
		return { code: exception.response.status };
	}
};
