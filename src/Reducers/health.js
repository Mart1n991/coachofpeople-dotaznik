import actionTypes from "../Actions/actionTypes";

const initialData = {
  problems: { answer: null, input: "", list: [] },
  medicine: { answer: null, input: "", list: [] },
  injuries: { answer: null, input: "", list: [] },
};

const initialErrors = {
  problems: null,
  medicine: null,
  injuries: null,
};

const initialState = {
  data: initialData,
  errors: initialErrors,
};

const health = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.HEALTH_PROBLEMS_ADD:
      return {
        ...state,
        data: {
          ...state.data,
          problems: { ...state.data.problems, input: "", list: [action.problem, ...state.data.problems.list] },
        },
      };

    case actionTypes.HEALTH_PROBLEMS_REMOVE:
      return {
        ...state,
        data: {
          ...state.data,
          problems: {
            ...state.data.problems,
            list: state.data.problems.list.filter((item) => item !== action.problem),
          },
        },
      };

    case actionTypes.HEALTH_PROBLEMS_INPUT:
      return {
        ...state,
        data: {
          ...state.data,
          problems: { ...state.data.problems, input: action.text },
        },
      };

    case actionTypes.HEALTH_PROBLEMS_ANSWER:
      return {
        ...state,
        data: {
          ...state.data,
          problems: { ...state.data.problems, answer: action.answer },
        },
      };

    //*************************** */

    case actionTypes.HEALTH_MEDICINE_ADD:
      return {
        ...state,
        data: {
          ...state.data,
          medicine: { ...state.data.medicine, input: "", list: [action.medicine, ...state.data.medicine.list] },
        },
      };

    case actionTypes.HEALTH_MEDICINE_REMOVE:
      return {
        ...state,
        data: {
          ...state.data,
          medicine: {
            ...state.data.medicine,
            list: state.data.medicine.list.filter((item) => item !== action.medicine),
          },
        },
      };

    case actionTypes.HEALTH_MEDICINE_INPUT:
      return {
        ...state,
        data: {
          ...state.data,
          medicine: { ...state.data.medicine, input: action.text },
        },
      };

    case actionTypes.HEALTH_MEDICINE_ANSWER:
      return {
        ...state,
        data: {
          ...state.data,
          medicine: { ...state.data.medicine, answer: action.answer },
        },
      };

    //*************************** */

    case actionTypes.HEALTH_INJURIES_ADD:
      return {
        ...state,
        data: {
          ...state.data,
          injuries: { ...state.data.injuries, input: "", list: [action.injury, ...state.data.injuries.list] },
        },
      };

    case actionTypes.HEALTH_INJURIES_REMOVE:
      return {
        ...state,
        data: {
          ...state.data,
          injuries: {
            ...state.data.injuries,
            list: state.data.injuries.list.filter((item) => item !== action.injury),
          },
        },
      };

    case actionTypes.HEALTH_INJURIES_INPUT:
      return {
        ...state,
        data: {
          ...state.data,
          injuries: { ...state.data.injuries, input: action.text },
        },
      };

    case actionTypes.HEALTH_INJURIES_ANSWER:
      return {
        ...state,
        data: {
          ...state.data,
          injuries: { ...state.data.injuries, answer: action.answer },
        },
      };

    case actionTypes.ERROR_HANDLING_HEALTH:
      return {
        ...state,
        errors: {
          problems: state.data.problems.answer === null ? action.error.required : null,
          medicine: state.data.medicine.answer === null ? action.error.required : null,
          injuries: state.data.injuries.answer === null ? action.error.required : null,
        },
      };

    default:
      return state;
  }
};

export default health;
