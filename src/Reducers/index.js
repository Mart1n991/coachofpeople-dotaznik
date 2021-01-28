import { combineReducers } from "redux";
import step from "./step";
import verification from "./emailVerification";
import address from "./address";
import personalInfo from "./personalInfo";

const rootReducer = combineReducers({ personalInfo, address, verification, step });

export default rootReducer;
