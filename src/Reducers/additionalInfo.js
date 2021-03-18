import actionTypes from "../Actions/actionTypes";

const initialState = {
  requirements: "",
  complains: "",
  relax: "",
};

const additionalInfo = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADDITIONALINFO_REQUIREMENTS:
      return {
        ...state,
        requirements: action.text,
      };

    case actionTypes.ADDITIONALINFO_COMPLAINS:
      return {
        ...state,
        complains: action.text,
      };

    case actionTypes.ADDITIONALINFO_RELAX:
      return {
        ...state,
        relax: action.text,
      };

    default:
      return state;
  }
};

export default additionalInfo;
