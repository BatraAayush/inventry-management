import {
  addItem,
  deleteItem,
  getItems,
  updateItem,
} from "../../services/itemServices";
import { validateItemInput } from "../../utils/itemUtils";
import {
  ADD_ITEM,
  DELETE_ITEM,
  SET_ITEMS,
  SET_ITEM_ERROR,
  SET_ITEM_LOADING,
  SET_ITEM_INPUT,
  SET_ITEM_TO_BE_UPDATED,
  UPDATE_ITEM,
} from "../actionConstants";

export const itemInput = (userInput) => ({
  type: SET_ITEM_INPUT,
  payload: userInput,
});

export const setItemToBeUpdated = (itemId) => ({
  type: SET_ITEM_TO_BE_UPDATED,
  payload: itemId,
});

export const addNewItem = (itemData) => async (dispatch) => {
  try {
    dispatch({ type: SET_ITEM_LOADING });

    const isValidated = validateItemInput(itemData);

    if (!isValidated) {
      throw new Error("Please select all the required fields");
    } else {
      dispatch({ type: SET_ITEM_ERROR, payload: "" });
    }

    const addedItem = await addItem(itemData);

    dispatch({ type: ADD_ITEM, payload: addedItem });
  } catch (error) {
    dispatch({ type: SET_ITEM_ERROR, payload: error.message });
  }
};

export const updateExistingItem = (itemId, itemData) => async (dispatch) => {
  try {
    dispatch({ type: SET_ITEM_LOADING });

    const isValidated = validateItemInput(itemData);

    if (!isValidated) {
      throw new Error("Please select all the required fields");
    } else {
      dispatch({ type: SET_ITEM_ERROR, payload: "" });
    }

    const item = await updateItem(itemId, itemData);

    dispatch({ type: UPDATE_ITEM, payload: item });
  } catch (error) {
    dispatch({ type: SET_ITEM_ERROR, payload: error.message });
  }
};

export const getAllItems = () => async (dispatch) => {
  try {
    dispatch({ type: SET_ITEM_LOADING });

    const items = await getItems();

    dispatch({ type: SET_ITEMS, payload: items });
  } catch (error) {
    dispatch({ type: SET_ITEM_ERROR, payload: error.message });
  }
};

export const removeItem = (itemId) => async (dispatch) => {
  try {
    dispatch({ type: SET_ITEM_LOADING });

    const deletedItem = await deleteItem(itemId);

    dispatch({ type: DELETE_ITEM, payload: itemId });
  } catch (error) {
    dispatch({ type: SET_ITEM_ERROR, payload: error.message });
  }
};
