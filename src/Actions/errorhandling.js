import actionTypes from "./actionTypes";

export const errorHandlingPersonalInfo = (error) => {
  return {
    type: actionTypes.ERROR_HANDLING_PERSONAL_INFO,
    error,
  };
};

export const errorHandlingAddress = (error) => {
  return {
    type: actionTypes.ERROR_HANDLING_ADDRESS,
    error,
  };
};
