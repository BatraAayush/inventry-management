export const validateSaleInput = (saleData) => {
  const { description, quantity, price, item } = saleData;

  if (!description || !quantity || !price || !item || item === "-1") {
    return false;
  }

  return true;
};
