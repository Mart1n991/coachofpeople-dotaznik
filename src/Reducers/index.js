import { combineReducers } from "redux";
import verification from "./emailVerification";
import personalInfo from "./personalInfo";
import step from "./step";

const rootReducer = combineReducers({ personalInfo, verification, step });

export default rootReducer;
