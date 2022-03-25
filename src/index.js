import "regenerator-runtime/runtime";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { CssBaseline, ThemeProvider } from "@material-ui/core";
import DarkTheme from "@Utils/themes/DarkTheme";
import App from "@Src/App";
import { store, persistor } from "@Utils/redux-store";

ReactDOM.render(
	<ThemeProvider theme={DarkTheme}>
		<CssBaseline />
		<Provider store={store}>
			<PersistGate persistor={persistor}>
				<React.StrictMode>
					<App />
				</React.StrictMode>
			</PersistGate>
		</Provider>
	</ThemeProvider>,
	document.getElementById("root")
);
