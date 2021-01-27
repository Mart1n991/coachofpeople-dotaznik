import actionTypes from "../Actions/actionTypes";

const initialState = {
  emailVerification: true, //Pôvodne null
  isLoading: false,
  error: "",
};

const verification = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.EMAIL_VERIFICATION_REQUEST:
      return {
        emailVerification: null,
        isLoading: true,
      };

    case actionTypes.EMAIL_VERIFICATION_SUCCESS:
      return { emailVerification: true, isLoading: false };

    case actionTypes.EMAIL_VERIFICATION_FAILURE:
      return {
        emailVerification: false,
        isLoading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default verification;
