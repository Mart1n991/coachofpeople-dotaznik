import { combineReducers } from "redux";
import step from "./step";
import verification from "./emailVerification";
import personalInfo from "./personalInfo";
import address from "./address";
import measurments from "./measurments";
import goals from "./goals";

const rootReducer = combineReducers({ personalInfo, address, measurments, goals, verification, step });

export default rootReducer;
