import axios from "axios";
import { BASE_URL } from "../redux/actionConstants";

const addSale = async (saleData) => {
  try {
    const response = await axios.post(
      `${BASE_URL}/sales`,
      {
        ...saleData,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const { addedSale } = response.data;

    return addedSale;
  } catch (error) {
    throw error;
  }
};

const getSales = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/sales`);

    const { sales } = response.data;

    return sales;
  } catch (error) {
    throw error;
  }
};

export { addSale, getSales };
