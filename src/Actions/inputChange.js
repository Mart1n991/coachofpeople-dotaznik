import actionTypes from "./actionTypes";

export const getInputPersonalInfo = (name, text) => {
  return {
    type: actionTypes.GET_INPUT_PERSONAL_INFO,
    payload: text,
    name,
  };
};

export const getInputAddress = (name, text) => {
  return {
    type: actionTypes.GET_INPUT_ADDRESS,
    payload: text,
    name,
  };
};

export const getInputMeasurments = (name, text) => {
  return {
    type: actionTypes.GET_INPUT_MEASURMENTS,
    payload: text,
    name,
  };
};

export const getInputGoals = (name, value) => {
  return {
    type: actionTypes.GET_INPUT_GOALS,
    name,
    payload: value,
  };
};

export const getGoalDuration = (value) => {
  return {
    type: actionTypes.GET_GOAL_DURATION,
    payload: value,
  };
};

export const getGoalImportance = (value) => {
  return {
    type: actionTypes.GET_GOAL_IMPORTANCE,
    payload: value,
  };
};
