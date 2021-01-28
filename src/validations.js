import { errorMessages } from "./constans/errorMessages";

export const personalInfo = (state, stepForward, errorHandling, step) => {
  // Vytovrenie array zo statu
  const arrayOfStateValues = Object.values(state);

  //Porovnanie či všetky položky v array majú dĺžku väčšiu alebo rovnú 1 ak VŠETKY
  //sú dlhšie ako 1 tak vráti true ak iba jedna nebude dlhšia ako 1 tak vráti false.
  const personalInfoValidation = (value) => value.length >= 1;
  const personalInfo = arrayOfStateValues.every(personalInfoValidation);

  //Podmienka ake personalInfo je true, tak sa spustí action stepForward,
  //ak je false tak sa spustí akcia errorhandling
  if (personalInfo) {
    errorHandling(errorMessages);
    return stepForward();
  }
  return errorHandling(errorMessages);
};

export const address = (state, stepForward, errorHandling, step) => {
  const arrayOfStateValues = Object.values(state);
  const addressValidation = (value) => value.length >= 2;
  const address = arrayOfStateValues.every(addressValidation);

  if (address) {
    errorHandling(errorMessages);
    return stepForward();
  }
  return errorHandling(errorMessages);
};
