import actionTypes from "./actionTypes";

export const PersonalInfo = (error) => {
  return {
    type: actionTypes.ERROR_HANDLING_PERSONAL_INFO,
    error,
  };
};

export const Address = (error) => {
  return {
    type: actionTypes.ERROR_HANDLING_ADDRESS,
    error,
  };
};

export const Measurments = (error) => {
  return {
    type: actionTypes.ERROR_HANDLING_MEASURMENTS,
    error,
  };
};

export const Goals = (error) => {
  return {
    type: actionTypes.ERROR_HANDLING_GOALS,
    error,
  };
};

export const Exercises = (error) => {
  return {
    type: actionTypes.ERROR_HANDLING_EXERCISES,
    error,
  };
};
