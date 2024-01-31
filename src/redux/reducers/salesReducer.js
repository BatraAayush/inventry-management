import {
  ADD_SALE,
  RESET_SALE,
  SET_SALES,
  SET_SALE_ERROR,
  SET_SALE_INPUT,
  SET_SALE_LOADING,
} from "../actionConstants";

const initialState = {
  sales: [],
  salesInput: {
    description: "",
    quantity: 1,
    price: 0,
    item: "",
  },
  salesLoading: false,
  salesError: "",
};

export const salesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SALE_INPUT:
      return { ...state, salesInput: action.payload };
    case SET_SALES:
      return {
        ...state,
        sales: [...action.payload],
        salesLoading: false,
        salesError: "",
      };
    case ADD_SALE:
      return {
        ...state,
        sales: [...state.sales, action.payload],
        salesInput: {
          description: "",
          quantity: 1,
          price: 0,
          item: "",
        },
        salesLoading: false,
      };
    case SET_SALE_LOADING:
      return { ...state, salesLoading: true };
    case SET_SALE_ERROR:
      return {
        ...state,
        salesError: action.payload,
        salesLoading: false,
      };
    case RESET_SALE:
      return {
        ...state,
        salesInput: {
          description: "",
          quantity: 1,
          price: 0,
          item: "",
        },
        salesError: "",
      };
    default:
      return { ...state };
  }
};
