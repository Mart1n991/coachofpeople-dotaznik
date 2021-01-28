import { combineReducers } from "redux";
import step from "./step";
import verification from "./emailVerification";
import personalInfo from "./personalInfo";
import address from "./address";
import measurments from "./measurments";

const rootReducer = combineReducers({ personalInfo, address, measurments, verification, step });

export default rootReducer;
