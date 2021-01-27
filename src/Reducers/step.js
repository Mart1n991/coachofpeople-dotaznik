import actionTypes from "../Actions/actionTypes";
import { STEP } from "../constans/steps";

const initialState = {
  currentStep: STEP,
};

const step = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.STEP_FORWARD:
      return { currentStep: state.currentStep + 1 };
    case actionTypes.STEP_BACK:
      return { currentStep: state.currentStep - 1 };
    default:
      return state;
  }
};

export default step;
