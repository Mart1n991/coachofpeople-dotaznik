import actionTypes from "./actionTypes";
import { getEmail } from "../utils/emailVerifyAPI";

const emailVerificationRequest = () => {
  return {
    type: actionTypes.EMAIL_VERIFICATION_REQUEST,
  };
};

const emailVerificationSuccess = (response) => {
  return {
    type: actionTypes.EMAIL_VERIFICATION_SUCCESS,
    payLoad: response,
  };
};

const emailVerificationsFailure = (error) => {
  return {
    type: actionTypes.EMAIL_VERIFICATION_FAILURE,
    payload: error,
  };
};

export const emailVerification = (email) => {
  return async (dispatch) => {
    try {
      dispatch(emailVerificationRequest());
      let response = await getEmail(email);
      dispatch(emailVerificationSuccess(response));
    } catch (error) {
      dispatch(emailVerificationsFailure(error));
    }
  };
};
