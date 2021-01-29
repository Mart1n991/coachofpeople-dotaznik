import { errorMessages } from "./constans/errorMessages";

export const personalInfo = (state, stepForward, errorHandling) => {
  // Vytovrenie array zo statu
  const arrayOfStateValues = Object.values(state);

  //Porovnanie či všetky položky v array majú dĺžku väčšiu alebo rovnú 1 ak VŠETKY
  //sú dlhšie ako 1 tak vráti true ak iba jedna nebude dlhšia ako 1 tak vráti false.
  const personalInfoValidation = (value) => value.toString().length >= 1;

  const personalInfo = arrayOfStateValues.every(personalInfoValidation);
  console.log(personalInfo);

  //Podmienka ake personalInfo je true, tak sa spustí action stepForward,
  //ak je false tak sa spustí akcia errorhandling
  if (personalInfo) {
    errorHandling(errorMessages);
    return stepForward();
  }
  return errorHandling(errorMessages);
};

export const address = (state, stepForward, errorHandling) => {
  const arrayOfStateValues = Object.values(state);
  const addressValidation = (value) => value.length >= 2;
  const address = arrayOfStateValues.every(addressValidation);

  if (address) {
    errorHandling(errorMessages);
    return stepForward();
  }
  return errorHandling(errorMessages);
};

export const goals = (state, stepForward, errorHandling) => {
  //Overenie či je zaškrtnutý aspoň 1 cieľ
  const mainGoalsValues = Object.values(state.mainGoals);
  const mainGoalsValidation = (value) => value === true;
  const mainGoals = mainGoalsValues.some(mainGoalsValidation);

  const { timeToAchieveGoals, priority } = state;

  if (mainGoals && timeToAchieveGoals >= 1 && priority.length > 1) {
    errorHandling(errorMessages);
    return stepForward();
  }
  return errorHandling(errorMessages);
};
