import React, { useContext } from "react";
import { PlaceOrderContext } from "./PlaceOrderContext";

const AccessoryComponent: React.FC = () => {
  const placeOrderContext = useContext(PlaceOrderContext);

  const handleUpdateUpsell = () => {
    // const updatedAccessoryCharges = [...];
    const updatedAccessoryCharges = [
      { id: 1, quantity: 10, price: 0.1, lineTotal: 1 },
      { id: 2, quantity: 20, price: 0.39, lineTotal: 7.8 },
      { id: 3, quantity: 30, price: 0.24, lineTotal: 7.2 },
      { id: 4, quantity: 40, price: 0.49, lineTotal: 19.6 },
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
