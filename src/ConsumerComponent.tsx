import React, { useContext } from "react";
import { PlaceOrderContext } from "./PlaceOrderContext";
import { discountPercent, freeQtyPercent } from "./defaultValue";

const ConsumerComponent: React.FC = () => {
  const placeOrderContext = useContext(PlaceOrderContext);

  return (
    <div>
      {/* Access the context values */}
      <div>
        Discount (%):{placeOrderContext?.discountPercent ?? discountPercent}
      </div>
      <div>
        Free Qty (%):{placeOrderContext?.freeQtyPercent ?? freeQtyPercent}
      </div>
      <div>
        Main Line:
        {placeOrderContext?.mainLine.map((item) => {
          return <pre key={item.id}>{JSON.stringify(item)}</pre>;
        })}
      </div>
      <div>
        {placeOrderContext?.upsell.map((item) => {
          return <pre key={item.id}>{JSON.stringify(item)}</pre>;
        })}
      </div>
      {/* Access other context values as needed */}
    </div>
  );
};

export default ConsumerComponent;
