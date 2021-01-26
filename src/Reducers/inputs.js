import actionTypes from "../Actions/actionTypes";
import lodash from "lodash";

const personalData = {
  email: "",
  firstName: "",
  lastName: "",
  age: "",
  gender: "",
};

const initialState = {
  isLoading: false,
  emailVerify: false,
  personalInfo: personalData,
};

const inputReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_INPUT:
      return {
        personalInfo: lodash.set({ ...state.personalInfo }, action.name, action.payload),
      };

    default:
      return state;
  }
};

export default inputReducer;
