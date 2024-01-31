import { useDispatch, useSelector } from "react-redux";
import { itemInput } from "../redux/actions/itemActions";
import { itemCategories } from "../utils/itemUtils";
import { useEffect } from "react";
import { addNewItem, updateExistingItem } from "../redux/actions/itemActions";
import { RESET_ITEM } from "../redux/actionConstants";

export const ItemForm = () => {
  const error = useSelector((state) => state.itemState.itemsError);
  const userInput = useSelector((state) => state.itemState.itemsInput);
  const itemToBeUpdated = useSelector(
    (state) => state.itemState.itemToBeUpdated
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (itemToBeUpdated._id) {
      dispatch(itemInput({ ...itemToBeUpdated }));
    }
  }, [itemToBeUpdated, dispatch]);

  useEffect(() => {
    return function () {
      dispatch({ type: RESET_ITEM });
    };
  }, [dispatch]);

  const handleAddOrUpdate = () => {
    if (itemToBeUpdated._id) {
      dispatch(updateExistingItem(itemToBeUpdated._id, userInput));
    } else {
      dispatch(addNewItem(userInput));
    }
  };

  return (
    <div>
      <h2>Add Item:</h2>
      <div className="flex gap-2 flex-wrap mt-2">
        <label className="flex flex-col">
          Name:
          <input
            onChange={(e) =>
              dispatch(
                itemInput({
                  ...userInput,
                  name: e.target.value,
                })
              )
            }
            value={userInput.name}
            type="text"
            placeholder="enter item name"
            className="border-2 rounded-md max-w-[10rem] px-1 outline-2 outline-black-500"
          />
        </label>

        <label className="flex flex-col">
          Category:
          <select
            onChange={(e) =>
              dispatch(
                itemInput({
                  ...userInput,
                  category: e.target.value,
                })
              )
            }
            value={userInput.category}
            className="border-2 outline-2 outline-black-500 rounded-md h-max self-end px-2"
          >
            {itemCategories.map((category) => {
              return (
                <option key={category} className="bg-white-100">
                  {category}
                </option>
              );
            })}
          </select>
        </label>

        <label className="flex flex-col">
          Quantity:
          <input
            onChange={(e) =>
              dispatch(
                itemInput({
                  ...userInput,
                  quantity: e.target.value,
                })
              )
            }
            value={userInput.quantity}
            type="number"
            placeholder="enter quantity"
            className="border-2 rounded-md max-w-[10rem] px-1 outline-2 outline-black-500"
          />
        </label>

        <label className="flex flex-col">
          Price:
          <input
            onChange={(e) =>
              dispatch(
                itemInput({
                  ...userInput,
                  price: e.target.value,
                })
              )
            }
            value={userInput.price}
            type="number"
            placeholder="enter price"
            className="border-2 rounded-md max-w-[10rem] px-1 outline-2 outline-black-500"
          />
        </label>

        <button
          onClick={handleAddOrUpdate}
          className="bg-black text-white px-4 py-0.5 rounded-md hover:shadow-lg h-max self-end"
        >
          {itemToBeUpdated._id ? "Update" : "Add"}
        </button>
      </div>

      {error && <small className="text-red-600">{`* ${error}`}</small>}
    </div>
  );
};
