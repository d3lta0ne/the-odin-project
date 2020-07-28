import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
import App from "./App";
import { createStore } from "redux";
import { Provider } from "react-redux";

const initialState = {
  library: ["The Will To Change", "Yes Means Yes", "Bruce Wayne"],
};

// Reducer function
function reducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_BOOK":
      return { ...state, contacts: [...state.contacts, action.data] };
    default:
      return state;
  }
}

const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
