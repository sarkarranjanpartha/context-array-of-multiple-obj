import React, { useContext } from "react";
import { PlaceOrderContext } from "./PlaceOrderContext";

const PerUnitExtraComponent: React.FC = () => {
  const placeOrderContext = useContext(PlaceOrderContext);

  const handleUpdatePerUnitExtraCharge = () => {
    // const updatedPerUnitExtra = [...];
    const updatedPerUnitExtra = [
      { id: 1, Quantity: 500, Price: 0.24, LineTotal: 120 },
      { id: 2, Quantity: 500, Price: 49, LineTotal: 24500 },
      { id: 3, Quantity: 500, Price: 0.29, LineTotal: 145 },
      { id: 4, Quantity: 500, Price: 49, LineTotal: 24500 },
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
