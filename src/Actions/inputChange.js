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
