import { useSelector } from "react-redux";
import { CustomChart } from "../components/index";

export const Reports = () => {
  const items = useSelector((state) => state.itemState.items);
  const sales = useSelector((state) => state.saleState.sales);
  console.log(sales);
  return (
    <div className="p-4 flex flex-col gap-4">
      <h2>Reports:</h2>

      <div className="flex">
        <div className="flex-1">
          <h2 className="my-5">INVENTORY</h2>
          {items.map((item) => (
            <div className="my-2" key={item._id}>
              <h3>Name: {item.name}</h3>
              <p>Amount: ${item.price * item.quantity}</p>
            </div>
          ))}
        </div>
        <div className="flex-1">
          <h2 className="my-5">SALES</h2>
          {sales.map((sale) => (
            <div className="my-2"  key={sale._id}>
              <h3>Name: {sale.item.name}</h3>
              <p>Amount: ${sale.price * sale.quantity}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
