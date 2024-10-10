import React, { useContext } from "react";
import { PlaceOrderContext } from "./PlaceOrderContext";

const ExtraComponent: React.FC = () => {
  const placeOrderContext = useContext(PlaceOrderContext);

  const handleUpdateExtraCharge = () => {
    // const updatedExtraCharge = [...];
    const updatedExtraCharge = [
      { id: 1, quantity: 1, price: 40, lineTotal: 40 },
      { id: 2, quantity: 1, price: 19.95, lineTotal: 19.95 },
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
