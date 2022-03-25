import { ViewProfilePage, EditProfilePage, CreateProfilePage } from "@Pages/";

const routes = [
	{
		map: "0",
		path: "/view-profile",
		component: ViewProfilePage,
		exact: false,
	},
	{
		map: "1",
		path: "/edit-profile",
		component: EditProfilePage,
		exact: false,
	},
	{
		map: "2",
		path: "create-profile",
		component: CreateProfilePage,
		exact: false,
	},
];

export default routes;
