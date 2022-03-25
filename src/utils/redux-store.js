// Redux store
import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage/session";
import rootReducer from "../reducers/rootReducer";
import rootSaga from "../sagas/rootSaga";

const persistConfig = {
	key: "profilo",
	storage,
};
const persistedReducer = persistReducer(persistConfig, rootReducer);
const sagaMiddleware = createSagaMiddleware();

const configureStore = (initialState) => {
	const enhancers = [];

	// If Redux DevTools Extension is installed use it, otherwise use Redux compose
	const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__
		? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
				name: "Editable Profile Page",
		  })
		: compose;

	// Apply Middleware & Compose Enhancers
	enhancers.push(applyMiddleware(sagaMiddleware));
	const enhancer = composeEnhancers(...enhancers);

	// Create Store
	const store = createStore(persistedReducer, initialState, enhancer);

	sagaMiddleware.run(rootSaga);
	return store;
};

export const store = configureStore();
export const persistor = persistStore(store);
