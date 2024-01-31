import {
  ADD_SALE,
  SET_SALES,
  SET_SALE_ERROR,
  SET_SALE_INPUT,
  SET_SALE_LOADING,
} from "../actionConstants";
import { addSale, getSales } from "../../services/saleServices";
import { validateSaleInput } from "../../utils/saleUtils";

export const saleInput = (userInput) => ({
  type: SET_SALE_INPUT,
  payload: userInput,
});

export const addNewSale = (saleData) => async (dispatch) => {
  try {
    dispatch({ type: SET_SALE_LOADING });

    const isValidated = validateSaleInput(saleData);

    if (!isValidated) {
      throw new Error("Please select all the required fields");
    } else {
      dispatch({ type: SET_SALE_ERROR, payload: "" });
    }

    const addedSale = await addSale(saleData);

    dispatch({ type: ADD_SALE, payload: addedSale });
  } catch (error) {
    dispatch({ type: SET_SALE_ERROR, payload: error.message });
  }
};

export const getAllSales = () => async (dispatch) => {
  try {
    dispatch({ type: SET_SALE_LOADING });

    const sales = await getSales();

    dispatch({ type: SET_SALES, payload: sales });
  } catch (error) {
    dispatch({ type: SET_SALE_ERROR, payload: error.message });
  }
};
