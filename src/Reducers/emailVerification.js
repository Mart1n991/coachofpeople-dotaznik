import actionTypes from "../Actions/actionTypes";

const initialState = {
  emailVerification: true, //Pôvodne null
  isLoading: false,
  token: null,
  error: "",
};

const verification = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.EMAIL_VERIFICATION_REQUEST:
      return {
        ...state,
        emailVerification: null,
        isLoading: true,
      };

    case actionTypes.EMAIL_VERIFICATION_SUCCESS:
      return { ...state, emailVerification: true, isLoading: false, error: "" };

    case actionTypes.EMAIL_VERIFICATION_FAILURE:
      return {
        emailVerification: false,
        isLoading: false,
        error: action.payload,
        token: null,
      };

    case actionTypes.RECAPTCHA:
      return {
        ...state,
        token: action.token,
      };

    default:
      return state;
  }
};

export default verification;
