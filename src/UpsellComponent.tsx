import React, { useContext } from "react";
import { PlaceOrderContext } from "./PlaceOrderContext";

const UpsellComponent: React.FC = () => {
  const placeOrderContext = useContext(PlaceOrderContext);

  const handleUpdateUpsell = () => {
    // const updatedUpsell = [...];
    const updatedUpsell = [
      {
        Quantity: 20,
        Price: 1.18,
        LinelTotal: 23.6,
      },
      {
        Quantity: 0,
        Price: 0,
        LinelTotal: 0,
      },
    ];
    // Update the upsell array as needed
    placeOrderContext?.updateUpsell(updatedUpsell);
  };

  return (
    <div>
      {/* Render your component */}
      <button onClick={handleUpdateUpsell}>Update Upsell</button>
    </div>
  );
};

export default UpsellComponent;
