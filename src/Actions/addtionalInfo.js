import actionTypes from "./actionTypes";

export const requirementsInput = (text) => {
  return {
    type: actionTypes.ADDITIONALINFO_REQUIREMENTS,
    text,
  };
};

export const complainsInput = (text) => {
  return {
    type: actionTypes.ADDITIONALINFO_COMPLAINS,
    text,
  };
};

export const relaxInput = (text) => {
  return {
    type: actionTypes.ADDITIONALINFO_RELAX,
    text,
  };
};
