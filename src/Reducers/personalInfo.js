import actionTypes from "../Actions/actionTypes";
import lodash from "lodash";

const initialErrors = {
  firstName: "",
  lastName: "",
  age: "",
  gender: "",
};

const personalData = {
  email: "",
  firstName: "",
  lastName: "",
  age: "",
  gender: "",
};

const initialState = {
  data: personalData,
  errors: initialErrors,
};

const personalInfo = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_INPUT:
      return {
        ...state,
        data: lodash.set({ ...state.data }, action.name, action.payload),
      };

    case actionTypes.ERROR_HANDLING: {
      return {
        ...state,
        errors: {
          firstName: state.data.firstName.length > 2 ? undefined : action.error.required,
          lastName: state.data.lastName.length > 2 ? undefined : action.error.required,
          gender: state.data.gender !== "" ? undefined : action.error.required,
          age: state.data.age.length > 0 ? undefined : action.error.positiveNumber,
        },
      };
    }

    default:
      return state;
  }
};

export default personalInfo;
