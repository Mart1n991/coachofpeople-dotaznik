import actionTypes from "./actionTypes";

export const errorPersonalInfo = (error) => {
  return {
    type: actionTypes.ERROR_HANDLING_PERSONAL_INFO,
    error,
  };
};

export const errorAddress = (error) => {
  return {
    type: actionTypes.ERROR_HANDLING_ADDRESS,
    error,
  };
};

export const errorMeasurments = (error) => {
  return {
    type: actionTypes.ERROR_HANDLING_MEASURMENTS,
    error,
  };
};

export const errorGoals = (error) => {
  return {
    type: actionTypes.ERROR_HANDLING_GOALS,
    error,
  };
};

export const errorExercises = (error) => {
  return {
    type: actionTypes.ERROR_HANDLING_EXERCISES,
    error,
  };
};

export const errorLifestyle = (error) => {
  return {
    type: actionTypes.ERROR_HANDLING_LIFESTYLE,
    error,
  };
};

export const errorHealth = (error) => {
  return {
    type: actionTypes.ERROR_HANDLING_HEALTH,
    error,
  };
};
