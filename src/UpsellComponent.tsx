import React, { useContext } from "react";
import { PlaceOrderContext } from "./PlaceOrderContext";

const UpsellComponent: React.FC = () => {
  const placeOrderContext = useContext(PlaceOrderContext);

  const handleUpdateOtherValues = () => {
    const updatedShipping = 250;
    placeOrderContext?.updateShipping(updatedShipping);
    const updatedHandling = 150;
    placeOrderContext?.updateHandling(updatedHandling);
    const updatedTaxPercent = 250;
    placeOrderContext?.updateTaxPercent(updatedTaxPercent);
    const updatedCurrency = "$";
    placeOrderContext?.updateCurrency(updatedCurrency);
    const updatedEnvironmentalTax = 99;
    placeOrderContext?.updateEnvironmentalTax(updatedEnvironmentalTax);
  };

  const handleUpdateUpsell = () => {
    // const updatedUpsell = [...];
    const updatedUpsell = [
      { id: 1, quantity: 200, price: 10, lineTotal: 2000 },
      { id: 2, quantity: 300, price: 10, lineTotal: 3000 },
    ];
    // Update the upsell array as needed
    placeOrderContext?.updateUpsell(updatedUpsell);
    handleUpdateOtherValues();
  };

  return (
    <div>
      {/* Render your component */}
      <button onClick={handleUpdateUpsell}>Update Upsell</button>
    </div>
  );
};

export default UpsellComponent;
