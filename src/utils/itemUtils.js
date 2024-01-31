export const itemCategories = [
  "Others",
  "Electronics",
  "Furniture",
  "Stationery",
  "Food",
  "Sports",
];

export const validateItemInput = (itemData) => {
  const { name, category, quantity, price } = itemData;

  if (!name || !category || !quantity || !price) {
    return false;
  }

  return true;
};
