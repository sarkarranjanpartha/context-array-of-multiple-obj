import React, { useContext } from "react";
import { PlaceOrderContext } from "../src/PlaceOrderContext";

const MainLineComponent: React.FC = () => {
  const placeOrderContext = useContext(PlaceOrderContext);

  const handleUpdateOtherValues = () => {
    const updatedDiscountPercent = 200;
    placeOrderContext?.updateDiscountPercent(updatedDiscountPercent);
    const updatedFreeQtyPercent = 100;
    placeOrderContext?.updateFreeQtyPercent(updatedFreeQtyPercent);
  };

  const handleUpdateMainLine = () => {
    // const updatedMainLine = [...];
    const updatedMainLine = [
      {
        id: 2,
        quantity: 200,
        itemPrice: 10,
        packagePrice: 2000,
        freeQuantity: 0,
      },
      {
        id: 3,
        quantity: 300,
        itemPrice: 10,
        packagePrice: 3000,
        freeQuantity: 0,
      },
    ];
    // Update the mainLine array as needed
    placeOrderContext?.updateMainLine(updatedMainLine);
    handleUpdateOtherValues();
  };

  return (
    <div>
      {/* Render your component */}
      <button onClick={handleUpdateMainLine}>Update Main Line</button>
    </div>
  );
};
export default MainLineComponent;
