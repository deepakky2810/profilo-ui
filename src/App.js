import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import "@Src/App.css";
// import "@Src/reset.css";
import { AuthenticationPage, HomePage } from "@Pages/";
import routes from "@Routing/routes";
import BackgroundWrapper from "@Components/Background";
import Sidebar from "@Components/Sidebar";
import styled from "styled-components";
import { makeStyles } from "@material-ui/core";
import { useSelector } from "react-redux";
import HorizontalDrawer from "./components/HorizontalDrawer/index";

const AppWrapper = styled.div``;

const useStyles = makeStyles((theme) => ({
	appWrapperStyles: {
		margin: `${theme.typography.pxToVh(30)} ${theme.typography.pxToVw(
			90
		)} ${theme.typography.pxToVh(30)} ${theme.typography.pxToVw(0)}`,
	},
}));

const App = () => {
	const classes = useStyles();
	const { SIDEBAR_OPEN } = useSelector((state) => state.flags);
	return (
		<AppWrapper className={classes.appWrapperStyles}>
			<Router>
				<Routes>
					<Route exact={false} path="/" element={<HomePage />} />
					<Route
						exact={false}
						path="/sign-up"
						element={<AuthenticationPage action="SIGN_UP" />}
					/>
					<Route
						exact={false}
						path="/sign-in"
						element={<AuthenticationPage action="SIGN_IN" />}
					/>

					{routes.map((route) => (
						<Route
							key={route.map}
							exact={route.exact}
							path={route.path}
							element={
								<HorizontalDrawer open={SIDEBAR_OPEN}>
									<Sidebar />
									<BackgroundWrapper>
										<route.component />
									</BackgroundWrapper>
								</HorizontalDrawer>
							}
						/>
					))}
				</Routes>
			</Router>
		</AppWrapper>
		// <AuthenticationPage />
	);
};

export default App;
