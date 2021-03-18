import actionTypes from "./actionTypes";

export const lifestyleGetInput = (text) => {
  return {
    type: actionTypes.LIFESTYLE_GET_INPUT,
    text,
  };
};

export const lifestyleMovementActivity = (value) => {
  return {
    type: actionTypes.LIFESTYLE_MOVEMENT_ACTIVITY,
    value,
  };
};

export const lifestyleTraveling = (value) => {
  return {
    type: actionTypes.LIFESTYLE_TRAVELING,
    value,
  };
};

export const lifestyleFoodInvestment = (value) => {
  return {
    type: actionTypes.LIFESTYLE_FOOD_INVESTMENT,
    value,
  };
};

export const lifestyleSuplementInvestment = (value) => {
  return {
    type: actionTypes.LIFESTYLE_SUPLEMENT_INVESTMENT,
    value,
  };
};

export const lifestyleOrderingFood = (value) => {
  return {
    type: actionTypes.LIFESTYLE_ORDERING_FOOD,
    value,
  };
};

export const lifestyleAllergies = (answer) => {
  return {
    type: actionTypes.LIFESTYLE_ALLERGIES,
    answer,
  };
};

export const lifestyleAllergiesAdd = (allergie) => {
  return {
    type: actionTypes.LIFESTYLE_ALLERGIES_ADD,
    allergie,
  };
};

export const lifestyleAllergieRemove = (value) => {
  return {
    type: actionTypes.LIFESTYLE_ALLERGIES_REMOVE,
    value,
  };
};

export const lifestyleAllergiesInput = (text) => {
  return {
    type: actionTypes.LIFESTYLE_ALLERGIES_INPUT,
    text,
  };
};

export const lifestyleSuplements = (answer) => {
  return {
    type: actionTypes.LIFESTYLE_SUPLEMENTS,
    answer,
  };
};

export const lifestyleSuplementsAdd = (suplement) => {
  return {
    type: actionTypes.LIFESTYLE_SUPLEMENTS_ADD,
    suplement,
  };
};

export const lifestyleSuplementRemove = (value) => {
  return {
    type: actionTypes.LIFESTYLE_SUPLEMENTS_REMOVE,
    value,
  };
};

export const lifestyleSuplementsInput = (text) => {
  return {
    type: actionTypes.LIFESTYLE_SUPLEMENTS_INPUT,
    text,
  };
};

export const favouriteFoodAdd = (food) => {
  return {
    type: actionTypes.LIFESTYLE_FAVOURITE_FOOD_ADD,
    food,
  };
};

export const favouriteFoodRemove = (food) => {
  return {
    type: actionTypes.LIFESTYLE_FAVOURITE_FOOD_REMOVE,
    food,
  };
};

export const favouriteFoodInput = (text) => {
  return {
    type: actionTypes.LIFESTYLE_FAVOURITE_FOOD_INPUT,
    text,
  };
};

export const unlikeFoodAdd = (food) => {
  return {
    type: actionTypes.LIFESTYLE_UNLIKE_FOOD_ADD,
    food,
  };
};

export const unlikeFoodRemove = (food) => {
  return {
    type: actionTypes.LIFESTYLE_UNLIKE_FOOD_REMOVE,
    food,
  };
};

export const unlikeFoodInput = (text) => {
  return {
    type: actionTypes.LIFESTYLE_UNLIKE_FOOD_INPUT,
    text,
  };
};

export const lifestyleQualities = (name, value) => {
  return {
    type: actionTypes.LIFESTYLE_QUALITY_INPUT,
    name,
    value,
  };
};
