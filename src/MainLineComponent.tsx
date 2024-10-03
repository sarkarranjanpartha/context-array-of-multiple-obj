import React, { useContext } from "react";
import { PlaceOrderContext } from "../src/PlaceOrderContext";

const MainLineComponent: React.FC = () => {
  const placeOrderContext = useContext(PlaceOrderContext);

  const handleUpdateDiscountPercent = () => {
    const updatedDiscountPercent = 200;
    placeOrderContext?.updateDiscountPercent(updatedDiscountPercent);
    const updateFreeQtyPercent = 100;
    placeOrderContext?.updateFreeQtyPercent(updateFreeQtyPercent);
  };

  const handleUpdateMainLine = () => {
    // const updatedMainLine = [...];
    const updatedMainLine = [
      {
        id: 2,
        quantity: 100,
        itemPrice: 1.39,
        packagePrice: 139,
        freeQuantity: 0,
      },
      {
        id: 3,
        quantity: 0,
        itemPrice: 0,
        packagePrice: 0,
        freeQuantity: 0,
      },
    ];
    // Update the mainLine array as needed
    handleUpdateDiscountPercent();
    placeOrderContext?.updateMainLine(updatedMainLine);
  };

  return (
    <div>
      {/* Render your component */}
      <button onClick={handleUpdateMainLine}>Update Main Line</button>
    </div>
  );
};
export default MainLineComponent;
