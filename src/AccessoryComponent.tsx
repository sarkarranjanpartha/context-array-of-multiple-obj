import React, { useContext } from "react";
import { PlaceOrderContext } from "./PlaceOrderContext";

const AccessoryComponent: React.FC = () => {
  const placeOrderContext = useContext(PlaceOrderContext);

  const handleUpdateUpsell = () => {
    // const updatedAccessoryCharges = [...];
    const updatedAccessoryCharges = [
      {
        Quantity: 10,
        Price: 0.1,
        LineTotal: 1,
      },
      {
        Quantity: 20,
        Price: 0.39,
        LineTotal: 7.8,
      },
      {
        Quantity: 30,
        Price: 0.24,
        LineTotal: 7.2,
      },
      {
        Quantity: 40,
        Price: 0.49,
        LineTotal: 19.6,
      },
    ];
    // Update the Accessory charges array as needed
    placeOrderContext?.updateAccessoryCharges(updatedAccessoryCharges);
  };

  return (
    <div>
      {/* Render your component */}
      <button onClick={handleUpdateUpsell}>Update Upsell</button>
    </div>
  );
};
export default AccessoryComponent;
