import lodash from "lodash";
import actionTypes from "../Actions/actionTypes";

const initialErrors = {
  weight: "",
  height: "",
  neck: "",
  shoulders: "",
  chest: "",
  biceps: "",
  belt: "",
  thigh: "",
};

const initialData = {
  weight: "",
  height: "",
  neck: "",
  shoulders: "",
  chest: "",
  biceps: "",
  belt: "",
  thigh: "",
};

const initialState = {
  data: initialData,
  errors: initialErrors,
};

const measurments = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_INPUT_MEASURMENTS:
      return {
        ...state,
        data: lodash.set({ ...state.data }, action.name, action.payload),
      };
    case actionTypes.ERROR_HANDLING_MEASURMENTS:
      return {
        ...state,
        errors: {
          weight: state.data.weight > 30 ? undefined : action.error.weight,
          height: state.data.height > 50 ? undefined : action.error.height,
          neck: state.data.neck !== "" ? undefined : action.error.required,
          shoulders: state.data.shoulders !== "" ? undefined : action.error.required,
          chest: state.data.chest !== "" ? undefined : action.error.required,
          biceps: state.data.biceps !== "" ? undefined : action.error.required,
          belt: state.data.belt !== "" ? undefined : action.error.required,
          thigh: state.data.thigh !== "" ? undefined : action.error.required,
        },
      };
    default:
      return state;
  }
};

export default measurments;
