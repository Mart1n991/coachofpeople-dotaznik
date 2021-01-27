import actionTypes from "./actionTypes";

export const stepForward = () => {
  return {
    type: actionTypes.STEP_FORWARD,
  };
};

export const stepBack = () => {
  return {
    type: actionTypes.STEP_BACK,
  };
};
