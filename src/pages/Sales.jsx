import { useSelector } from "react-redux";
import { SaleForm } from "../components/index";

export const Sales = () => {
  const sales = useSelector((state) => state.saleState.sales);

  return (
    <div className="p-4 flex flex-col gap-4">
      <SaleForm />

      <h2>All Sales:</h2>

      <div className="w-[100%] overflow-x-scroll">
        <table className="w-[100%]">
          <thead className="border-2 border-gray-300">
            <tr>
              <th className="px-2">Name</th>
              <th className="px-2">Category</th>
              <th className="px-2">Quantity</th>
              <th className="px-2">Price</th>
              <th className="px-2">Amount</th>
            </tr>
          </thead>
          <tbody>
            {sales.map((sale) => (
              <tr
                key={sale._id}
                className="border-2 border-gray-300 text-center"
              >
                <td className="p-4">
                  {sale?.item ? sale?.item?.name : "Out of Stock Item"}
                </td>
                <td className="p-4">{sale.description}</td>
                <td className="p-4">{sale.quantity}</td>
                <td className="p-4">${sale.price}</td>
                <td className="p-4">${sale.quantity * sale.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
