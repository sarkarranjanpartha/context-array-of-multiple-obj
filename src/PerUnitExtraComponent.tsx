import React, { useContext } from "react";
import { PlaceOrderContext } from "./PlaceOrderContext";

const PerUnitExtraComponent: React.FC = () => {
  const placeOrderContext = useContext(PlaceOrderContext);

  const handleUpdatePerUnitExtraCharge = () => {
    // const updatedPerUnitExtra = [...];
    const updatedPerUnitExtra = [
      { id: 1, quantity: 500, price: 0.24, lineTotal: 120 },
      { id: 2, quantity: 500, price: 49, lineTotal: 24500 },
      { id: 3, quantity: 500, price: 0.29, lineTotal: 145 },
      { id: 4, quantity: 500, price: 49, lineTotal: 24500 },
    ];
    // Update the upsell array as needed
    placeOrderContext?.updatePerUnitExtraCharges(updatedPerUnitExtra);
  };

  return (
    <div>
      {/* Render your component */}
      <button onClick={handleUpdatePerUnitExtraCharge}>
        Update Per Unit Extra
      </button>
    </div>
  );
};
export default PerUnitExtraComponent;
