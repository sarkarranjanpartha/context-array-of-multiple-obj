import React, { useContext } from "react";
import { PlaceOrderContext } from "./PlaceOrderContext";

const ExtraComponent: React.FC = () => {
  const placeOrderContext = useContext(PlaceOrderContext);

  const handleUpdateExtraCharge = () => {
    // const updatedExtraCharge = [...];
    const updatedExtraCharge = [
      {
        Quantity: 1,
        Price: 40,
        LineTotal: 40,
      },
      {
        Quantity: 1,
        Price: 19.95,
        LineTotal: 19.95,
      },
    ];
    // Update the Extra charges array as needed
    placeOrderContext?.updateExtraCharges(updatedExtraCharge);
  };

  return (
    <div>
      {/* Render your component */}
      <button onClick={handleUpdateExtraCharge}>Update Extra</button>
    </div>
  );
};
export default ExtraComponent;
