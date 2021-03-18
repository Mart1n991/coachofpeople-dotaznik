import actionTypes from "../Actions/actionTypes";

const initialData = {
  workType: "",
  movementActivity: "",
  traveling: "",
  foodInvestment: "",
  suplementInvestment: "",
  orderingFoodPerWeek: "",
  allergies: { answer: null, input: "", list: [] },
  suplements: { answer: null, input: "", list: [] },
  favouriteFood: { input: "", list: [] },
  unlikeFood: { input: "", list: [] },
  quality: { appetite: "žiadna", sleep: "Veľmi zlá", exhausted: "Veľmi silná", willToTrain: "Žiadna" },
};

const initialErrors = {
  workType: null,
  movementActivity: null,
  traveling: null,
  foodInvestment: null,
  suplementInvestment: null,
  orderingFoodPerWeek: null,
  allergies: null,
  suplements: null,
};

const initialState = {
  data: initialData,
  errors: initialErrors,
};

const lifestyle = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LIFESTYLE_GET_INPUT:
      return {
        ...state,
        data: {
          ...state.data,
          workType: action.text,
        },
      };

    case actionTypes.LIFESTYLE_MOVEMENT_ACTIVITY:
      return {
        ...state,
        data: {
          ...state.data,
          movementActivity: action.value,
        },
      };

    case actionTypes.LIFESTYLE_TRAVELING:
      return {
        ...state,
        data: {
          ...state.data,
          traveling: action.value,
        },
      };

    case actionTypes.LIFESTYLE_FOOD_INVESTMENT:
      return {
        ...state,
        data: {
          ...state.data,
          foodInvestment: action.value,
        },
      };

    case actionTypes.LIFESTYLE_SUPLEMENT_INVESTMENT:
      return {
        ...state,
        data: {
          ...state.data,
          suplementInvestment: action.value,
        },
      };

    case actionTypes.LIFESTYLE_ORDERING_FOOD:
      return {
        ...state,
        data: {
          ...state.data,
          orderingFoodPerWeek: action.value,
        },
      };

    case actionTypes.LIFESTYLE_ALLERGIES:
      return {
        ...state,
        data: {
          ...state.data,
          allergies: {
            ...state.data.allergies,
            answer: action.answer,
          },
        },
      };

    case actionTypes.LIFESTYLE_ALLERGIES_INPUT:
      return {
        ...state,
        data: {
          ...state.data,
          allergies: {
            ...state.data.allergies,
            input: action.text,
          },
        },
      };

    case actionTypes.LIFESTYLE_ALLERGIES_ADD:
      return {
        ...state,
        data: {
          ...state.data,
          allergies: {
            ...state.data.allergies,
            input: "",
            list: [action.allergie, ...state.data.allergies.list],
          },
        },
      };

    case actionTypes.LIFESTYLE_ALLERGIES_REMOVE:
      return {
        ...state,
        data: {
          ...state.data,
          allergies: {
            ...state.data.allergies,
            list: state.data.allergies.list.filter((item) => item !== action.value),
          },
        },
      };

    case actionTypes.LIFESTYLE_SUPLEMENTS:
      return {
        ...state,
        data: {
          ...state.data,
          suplements: {
            ...state.data.suplements,
            answer: action.answer,
          },
        },
      };

    case actionTypes.LIFESTYLE_SUPLEMENTS_ADD:
      return {
        ...state,
        data: {
          ...state.data,
          suplements: {
            ...state.data.suplements,
            list: [action.suplement, ...state.data.suplements.list],
            input: "",
          },
        },
      };

    case actionTypes.LIFESTYLE_SUPLEMENTS_REMOVE:
      return {
        ...state,
        data: {
          ...state.data,
          suplements: {
            ...state.data.suplements,
            list: state.data.suplements.list.filter((item) => item !== action.value),
          },
        },
      };

    case actionTypes.LIFESTYLE_SUPLEMENTS_INPUT:
      return {
        ...state,
        data: {
          ...state.data,
          suplements: {
            ...state.data.suplements,
            input: action.text,
          },
        },
      };

    case actionTypes.LIFESTYLE_FAVOURITE_FOOD_ADD:
      return {
        ...state,
        data: {
          ...state.data,
          favouriteFood: {
            ...state.data.favouriteFood,
            list: [action.food, ...state.data.favouriteFood.list],
            input: "",
          },
        },
      };

    case actionTypes.LIFESTYLE_FAVOURITE_FOOD_REMOVE:
      return {
        ...state,
        data: {
          ...state.data,
          favouriteFood: {
            ...state.data.favouriteFood,
            list: state.data.favouriteFood.list.filter((item) => item !== action.food),
            input: "",
          },
        },
      };

    case actionTypes.LIFESTYLE_FAVOURITE_FOOD_INPUT:
      return {
        ...state,
        data: {
          ...state.data,
          favouriteFood: {
            ...state.data.favouriteFood,
            input: action.text,
          },
        },
      };

    case actionTypes.LIFESTYLE_UNLIKE_FOOD_ADD:
      return {
        ...state,
        data: {
          ...state.data,
          unlikeFood: {
            ...state.data.unlikeFood,
            list: [action.food, ...state.data.unlikeFood.list],
            input: "",
          },
        },
      };

    case actionTypes.LIFESTYLE_UNLIKE_FOOD_REMOVE:
      return {
        ...state,
        data: {
          ...state.data,
          unlikeFood: {
            ...state.data.unlikeFood,
            list: state.data.unlikeFood.list.filter((item) => item !== action.food),
          },
        },
      };

    case actionTypes.LIFESTYLE_UNLIKE_FOOD_INPUT:
      return {
        ...state,
        data: {
          ...state.data,
          unlikeFood: {
            ...state.data.unlikeFood,
            input: action.text,
          },
        },
      };

    case actionTypes.LIFESTYLE_QUALITY_INPUT:
      return {
        ...state,
        data: {
          ...state.data,
          quality: {
            ...state.data.quality,
            [action.name]: action.value,
          },
        },
      };

    case actionTypes.ERROR_HANDLING_LIFESTYLE:
      return {
        ...state,
        errors: {
          workType: state.data.workType.length < 3 ? action.error.required : null,
          movementActivity: state.data.movementActivity === "" ? action.error.required : null,
          traveling: state.data.traveling === "" ? action.error.required : null,
          foodInvestment: state.data.foodInvestment === "" ? action.error.required : null,
          suplementInvestment: state.data.suplementInvestment === "" ? action.error.required : null,
          orderingFoodPerWeek: state.data.orderingFoodPerWeek === "" ? action.error.required : null,
          allergies: state.data.allergies.answer === null ? action.error.required : null,
          suplements: state.data.suplements.answer === null ? action.error.required : null,
        },
      };

    default:
      return state;
  }
};

export default lifestyle;
