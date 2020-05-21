import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";
import combinedReducers from "./reducers";
import { RootState } from "./types";

const logger = createLogger();
const middlewares = [thunk, logger];

// @ts-ignore
const preloadedState = JSON.parse(window.__PRELOADED_STATE__);
// @ts-ignore
delete window.__PRELOADED_STATE__;

const AppStore = createStore<RootState>(combinedReducers, preloadedState, composeWithDevTools(
  applyMiddleware(...middlewares)
));

export { default as actions } from "./actions";

export default AppStore;