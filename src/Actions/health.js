import actionTypes from "./actionTypes";

export const problemsAnswer = (answer) => {
  return {
    type: actionTypes.HEALTH_PROBLEMS_ANSWER,
    answer,
  };
};

export const problemsAdd = (problem) => {
  return {
    type: actionTypes.HEALTH_PROBLEMS_ADD,
    problem,
  };
};

export const problemsRemove = (problem) => {
  return {
    type: actionTypes.HEALTH_PROBLEMS_REMOVE,
    problem,
  };
};

export const problemsInput = (text) => {
  return {
    type: actionTypes.HEALTH_PROBLEMS_INPUT,
    text,
  };
};

export const medicineAnswer = (answer) => {
  return {
    type: actionTypes.HEALTH_MEDICINE_ANSWER,
    answer,
  };
};

export const medicineAdd = (medicine) => {
  return {
    type: actionTypes.HEALTH_MEDICINE_ADD,
    medicine,
  };
};

export const medicineRemove = (medicine) => {
  return {
    type: actionTypes.HEALTH_MEDICINE_REMOVE,
    medicine,
  };
};

export const medicineInput = (text) => {
  return {
    type: actionTypes.HEALTH_MEDICINE_INPUT,
    text,
  };
};

export const injuriesAnswer = (answer) => {
  return {
    type: actionTypes.HEALTH_INJURIES_ANSWER,
    answer,
  };
};

export const injuriesAdd = (injury) => {
  return {
    type: actionTypes.HEALTH_INJURIES_ADD,
    injury,
  };
};

export const injuriesRemove = (injury) => {
  return {
    type: actionTypes.HEALTH_INJURIES_REMOVE,
    injury,
  };
};

export const injuriesInput = (text) => {
  return {
    type: actionTypes.HEALTH_INJURIES_INPUT,
    text,
  };
};
