import actionTypes from "./actionTypes";

export const errorHandling = (error) => {
  return {
    type: actionTypes.ERROR_HANDLING,
    error,
  };
};
