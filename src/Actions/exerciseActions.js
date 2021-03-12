import actionTypes from "./actionTypes";

export const exerciseLevel = (name, newValue) => {
  return {
    type: actionTypes.EXERCISE_LEVEL,
    name,
    newValue,
  };
};

export const exerciseRegularly = (value) => {
  return {
    type: actionTypes.EXERCISE_REGULARLY,
    value,
  };
};

export const exerciseType = (name, value) => {
  return {
    type: actionTypes.EXERCISE_TYPE,
    value,
    name,
  };
};

export const exerciseDescription = (text) => {
  return {
    type: actionTypes.EXERCISE_DESCRIPTION,
    payload: text,
  };
};

export const exerciseFavourite = (sport) => {
  return {
    type: actionTypes.EXERCISE_FAVOURITE,
    payload: sport,
  };
};

export const exerciseFrequency = (value) => {
  return {
    type: actionTypes.EXERCISE_FREQUENCY,
    payload: value,
  };
};

export const exerciseDuration = (value) => {
  return {
    type: actionTypes.EXERCISE_DURATION,
    payload: value,
  };
};
