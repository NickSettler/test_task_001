import {
  applyMiddleware,
  combineReducers,
  compose,
  createStore,
} from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./saga";

const sagaMiddleware = createSagaMiddleware();

let middleware: Array<any> = [];

if (process.env.NODE_ENV !== "production") {
  if (window.__REDUX_DEVTOOLS_EXTENSION__)
    middleware.push(window.__REDUX_DEVTOOLS_EXTENSION__());
}

const enhancer = compose(applyMiddleware(sagaMiddleware), ...middleware);

const rootReducer = combineReducers({
  // [someModuleName]: someReducer,
});

const store = createStore(rootReducer, enhancer);

sagaMiddleware.run(rootSaga);

if (process.env.NODE_ENV !== "production") window.store = store;

export default store;
