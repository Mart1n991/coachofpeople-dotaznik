import actionTypes from "./actionTypes";

export const getInput = (name, text) => {
  return {
    type: actionTypes.GET_INPUT,
    payload: text,
    name,
  };
};
