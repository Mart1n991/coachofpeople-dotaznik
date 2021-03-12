// helper pre porovnanie hodnoty v objekte, či sa aspoň jedna hodnota rovná true
export const isOneValid = (object, equal) => {
  const arrayFromObject = Object.values(object);
  const isValid = (value) => value === equal;
  const validation = arrayFromObject.some(isValid);

  return validation;
};

export const isEveryValid = (object, equal) => {
  const arrayFromObject = Object.values(object);
  const isValid = (value) => value === equal;
  const validation = arrayFromObject.every(isValid);

  return validation;
};
