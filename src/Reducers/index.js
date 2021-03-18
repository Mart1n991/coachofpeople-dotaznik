import { combineReducers } from "redux";
import step from "./step";
import verification from "./emailVerification";
import personalInfo from "./personalInfo";
import address from "./address";
import measurments from "./measurments";
import goals from "./goals";
import exercise from "./exercise";
import lifestyle from "./lifestyle";

const rootReducer = combineReducers({
  personalInfo,
  address,
  measurments,
  goals,
  exercise,
  verification,
  step,
  lifestyle,
});

export default rootReducer;
