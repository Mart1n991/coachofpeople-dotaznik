import actiontypes from "../Actions/actionTypes";
import _set from "lodash/set";
import actionTypes from "../Actions/actionTypes";

const initialErrors = {
  workoutRegularly: "",
  favouriteSports: "",
  trainingFrequency: "",
  trainingDuration: "",
};

const initialData = {
  exerciseLevel: {
    squatDumbell: "Bez skúseností",
    pullUps: "Bez skúseností",
    deadLift: "Bez skúseností",
    benchPress: "Bez skúseností",
    sideRaises: "Bez skúseností",
    bentOverRows: "Bez skúseností",
  },

  workoutRegularly: "Áno",

  exercises: {
    Pondelok: { day: "Pondelok", type: "Posilňovanie", duration: "100 minút" },
    Utorok: { day: "Utorok", type: "Voľno", duration: "" },
    Streda: { day: "Streda", type: "", duration: "" },
    Štvrtok: { day: "Štvrtok", type: "", duration: "" },
    Piatok: { day: "Piatok", type: "", duration: "" },
    Sobota: { day: "Sobota", type: "", duration: "" },
    Nedeľa: { day: "Nedeľa", type: "", duration: "" },
  },

  trainingDescription: "",
  favouriteSports: [],
  trainingFrequency: 0,
  trainingDuration: 0,
};

const initialState = {
  data: initialData,
  errors: initialErrors,
};

const exercise = (state = initialState, action) => {
  switch (action.type) {
    case actiontypes.EXERCISE_LEVEL:
      return {
        ...state,
        data: {
          ...state.data,
          exerciseLevel: _set({ ...state.data.exerciseLevel }, action.name, action.newValue),
        },
      };

    case actionTypes.EXERCISE_REGULARLY:
      return {
        ...state,
        data: {
          ...state.data,
          workoutRegularly: action.value,
        },
      };

    case actionTypes.EXERCISE_TYPE:
      return {
        ...state,
        data: {
          ...state.data,
          exercises: _set({ ...state.data.exercises }, action.name, action.value),
        },
      };

    case actionTypes.EXERCISE_DESCRIPTION:
      return {
        ...state,
        data: {
          ...state.data,
          trainingDescription: action.payload,
        },
      };

    case actionTypes.EXERCISE_FAVOURITE:
      return {
        ...state,
        data: {
          ...state.data,
          favouriteSports: state.data.favouriteSports.includes(action.payload)
            ? state.data.favouriteSports.filter((sport) => sport !== action.payload)
            : [...state.data.favouriteSports, action.payload],
        },
      };

    case actionTypes.EXERCISE_FREQUENCY:
      return {
        ...state,
        data: {
          ...state.data,
          trainingFrequency: action.payload,
        },
      };

    case actionTypes.EXERCISE_DURATION:
      return { ...state, data: { ...state.data, trainingDuration: action.payload } };

    case actionTypes.ERROR_HANDLING_EXERCISES:
      return {
        ...state,
        errors: {
          workoutRegularly: state.data.workoutRegularly !== "" ? undefined : action.error.required,
          favouriteSports: state.data.favouriteSports.length === 0 ? action.error.favouriteSports : undefined,
          trainingFrequency: state.data.trainingFrequency === 0 ? action.error.required : undefined,
          trainingDuration: state.data.trainingDuration === 0 ? action.error.required : undefined,
        },
      };

    default:
      return state;
  }
};

export default exercise;
