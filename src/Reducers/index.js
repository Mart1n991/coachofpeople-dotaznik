import { combineReducers } from "redux";
import verification from "./emailVerification";
import personalInfo from "./personalInfo";

const rootReducer = combineReducers({ personalInfo, verification });

export default rootReducer;
