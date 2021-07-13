import { createStore, applyMiddleware } from "redux";

///Very useful for debugging our code!
import logger from "redux-logger";

import rootReducer from "./root-reducer";

const middlewares = [logger];

//Spreads all values within the logger array into the store as individual arguments
const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;
