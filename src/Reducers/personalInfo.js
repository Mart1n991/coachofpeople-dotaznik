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
  data: personalData,
};

const personalInfo = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_INPUT:
      return {
        data: lodash.set({ ...state.data }, action.name, action.payload),
      };

    default:
      return state;
  }
};

export default personalInfo;
