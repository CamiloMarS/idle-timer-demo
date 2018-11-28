import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

//Redux, react-redux, sagas
import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import idleReducer from "./reducers/idleReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";

//Importar mis sagas
import { colorTimeCounterSaga as colorSaga } from "./sagas/idleSaga";

const saglaMiddleware = createSagaMiddleware();

//Create store
const store = createStore(
  combineReducers({ idleReducer }),
  compose(
    applyMiddleware(saglaMiddleware),
    composeWithDevTools()
  )
);

//inicializar las sagas
saglaMiddleware.run(colorSaga);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
