import { createStore } from "redux";
import inputReducer from "../Reducers/inputs";

export const store = createStore(
  inputReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
