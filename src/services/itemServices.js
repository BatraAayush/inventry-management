import axios from "axios";
import { BASE_URL } from "../redux/actionConstants";

const addItem = async (itemData) => {
  try {
    const response = await axios.post(
      `${BASE_URL}/items`,
      {
        ...itemData,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const { addedItem } = response.data;

    return addedItem;
  } catch (error) {
    throw error;
  }
};

const updateItem = async (itemId, itemData) => {
  try {
    console.log(itemId, "IDIDIDID");
    const response = await axios.post(
      `${BASE_URL}/items/${itemId}`,
      {
        ...itemData,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const { item } = response.data;

    return item;
  } catch (error) {
    throw error;
  }
};

const getItems = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/items`);

    const { items } = response.data;

    return items;
  } catch (error) {
    throw error;
  }
};

const deleteItem = async (itemId) => {
  try {
    const response = await axios.delete(`${BASE_URL}/items/${itemId}`);

    const { deletedItem } = response.data;

    return deletedItem;
  } catch (error) {
    throw error;
  }
};

export { addItem, updateItem, getItems, deleteItem };
