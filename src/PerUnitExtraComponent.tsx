import React, { useContext } from "react";
import { PlaceOrderContext } from "./PlaceOrderContext";

const PerUnitExtraComponent: React.FC = () => {
  const placeOrderContext = useContext(PlaceOrderContext);

  const handleUpdatePerUnitExtraCharge = () => {
    // const updatedPerUnitExtra = [...];
    const updatedPerUnitExtra = [
      {
        Quantity: 500,
        Price: 0.24,
        LineTotal: 120,
      },
      {
        Quantity: 500,
        Price: 49,
        LineTotal: 24500,
      },
      {
        Quantity: 500,
        Price: 0.29,
        LineTotal: 145,
      },
      {
        Quantity: 500,
        Price: 49,
        LineTotal: 24500,
      },
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
