import { useDispatch, useSelector } from "react-redux";
import { ItemForm } from "../components/index";
import { useEffect } from "react";
import { getAllItems, removeItem } from "../redux/actions/itemActions";
import { setItemToBeUpdated } from "../redux/actions/itemActions";
import { getAllSales } from "../redux/actions/saleActions";

export const Items = () => {
  const items = useSelector((state) => state.itemState.items);
  const sales = useSelector((state) => state.saleState.sales);
  const dispatch = useDispatch();

  useEffect(() => {
    if (items.length <= 0 && sales.length <= 0) {
      dispatch(getAllItems());
      dispatch(getAllSales());
    }
  }, []);

  const handleUpdate = (itemId) => {
    dispatch(setItemToBeUpdated(itemId));
  };

  const handleDelete = (itemId) => {
    dispatch(removeItem(itemId));
  };

  return (
    <div className="p-4 flex flex-col gap-4">
      <ItemForm />

      <h2>All Items:</h2>

      <div className="w-[100%] overflow-x-scroll">
        <table className="w-[100%]">
          <thead className="border-2 border-gray-300">
            <tr>
              <th className="px-2">Name</th>
              <th className="px-2">Category</th>
              <th className="px-2">Quantity</th>
              <th className="px-2">Price</th>
              <th className="px-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr
                key={item._id}
                className="border-2 border-gray-300 text-center"
              >
                <td className="px-2">{item.name}</td>
                <td className="px-2">{item.category}</td>
                <td className="px-2">{item.quantity}</td>
                <td className="px-2">${item.price}</td>
                <td className="px-2 flex flex-col items-center gap-2 my-2">
                  <button
                    onClick={() => handleUpdate(item._id)}
                    className="bg-black text-white px-4 py-0.5 rounded-md hover:shadow-lg h-max w-max"
                  >
                    Update
                  </button>
                  <button
                    onClick={() => handleDelete(item._id)}
                    className="bg-black text-white px-4 py-0.5 rounded-md hover:shadow-lg h-max w-max"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
