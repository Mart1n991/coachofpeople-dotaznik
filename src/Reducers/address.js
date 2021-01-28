import actionTypes from "../Actions/actionTypes";
import lodash from "lodash";

const initialErrors = {
  street: "",
  streetNumber: "",
  city: "",
  postalCode: "",
  state: "",
};

const addressData = {
  street: "",
  streetNumber: "",
  city: "",
  postalCode: "",
  state: "",
};

const initialState = {
  data: addressData,
  errors: initialErrors,
};

const address = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_INPUT_ADDRESS:
      return {
        ...state,
        data: lodash.set({ ...state.data }, action.name, action.payload),
      };

    case actionTypes.ERROR_HANDLING_ADDRESS: {
      return {
        ...state,
        errors: {
          street: state.data.street.length > 2 ? undefined : action.error.required,
          streetNumber: state.data.streetNumber.length > 0 ? undefined : action.error.required,
          city: state.data.city.length > 2 ? undefined : action.error.required,
          postalCode: state.data.postalCode.length > 2 ? undefined : action.error.required,
          state: state.data.state.length > 2 ? undefined : action.error.required,
        },
      };
    }

    default:
      return state;
  }
};

export default address;
