import actionTypes from "../Actions/actionTypes";
import lodash from "lodash";
import { isOneValid } from "../utils/helper";

const initialErrors = {
  mainGoals: "",
  timeToAchieveGoals: "",
  priority: "",
};

const initialData = {
  mainGoals: {
    healthImprove: false,
    strengthIncrease: false,
    performanceImprove: false,
    muscleMassIncrease: false,
    weightLoss: false,
    weightGain: false,
  },
  timeToAchieveGoals: "",
  priority: "",
};

const initialState = {
  data: initialData,
  errors: initialErrors,
};

const goals = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_INPUT_GOALS:
      return {
        ...state,
        data: {
          ...state.data,
          mainGoals: lodash.set({ ...state.data.mainGoals }, action.name, action.payload),
        },
      };

    case actionTypes.GET_GOAL_DURATION:
      return {
        ...state,
        data: {
          ...state.data,
          timeToAchieveGoals: action.payload,
        },
      };

    case actionTypes.GET_GOAL_IMPORTANCE: {
      return {
        ...state,
        data: {
          ...state.data,
          priority: action.payload,
        },
      };
    }

    case actionTypes.ERROR_HANDLING_GOALS:
      return {
        ...state,
        errors: {
          mainGoals: isOneValid(state.data.mainGoals, true) === true ? undefined : action.error.mainGoal,
          timeToAchieveGoals: state.data.timeToAchieveGoals !== "" ? undefined : action.error.required,
          priority: state.data.priority !== "" ? undefined : action.error.required,
        },
      };

    default:
      return state;
  }
};

export default goals;
