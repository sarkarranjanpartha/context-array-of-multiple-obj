import { createContext, useContext, useState } from "react";
import { PlaceOrderContextType } from "./types/place-order-context";

export const PlaceOrderContext = createContext<
  PlaceOrderContextType | undefined
>(undefined);

export const PlaceOrderProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [placeOrderContext, setPlaceOrderContext] =
    useState<PlaceOrderContextType>({
      discountPercent: 0, // Definition discountPercent is optional as we declare discountPercent as optional
      // freeQtyPercent: 0,
      shipping: 0,
      handling: 0,
      taxPercent: 0,
      currency: "",
      environmentalTax: 0,
      mainLine: [],
      upsell: [],
      accessoryCharges: [],
      extraCharges: [],
      perUnitExtraCharges: [],
      updateDiscountPercent: (updatedDiscountPercent) => {
        setPlaceOrderContext((prevContext) => ({
          ...prevContext,
          discountPercent: updatedDiscountPercent,
        }));
      },
      updateFreeQtyPercent: (updatedFreeQtyPercent) => {
        setPlaceOrderContext((prevContext) => ({
          ...prevContext,
          freeQtyPercent: updatedFreeQtyPercent,
        }));
      },
      updateShipping: (updatedShipping) => {
        setPlaceOrderContext((prevContext) => ({
          ...prevContext,
          shipping: updatedShipping,
        }));
      },
      updateHandling: (updatedHandling) => {
        setPlaceOrderContext((prevContext) => ({
          ...prevContext,
          handling: updatedHandling,
        }));
      },
      updateTaxPercent: (updatedTaxPercent) => {
        setPlaceOrderContext((prevContext) => ({
          ...prevContext,
          taxPercent: updatedTaxPercent,
        }));
      },
      updateCurrency: (updatedCurrency) => {
        setPlaceOrderContext((prevContext) => ({
          ...prevContext,
          currency: updatedCurrency,
        }));
      },
      updateEnvironmentalTax: (updatedEnvironmentalTax) => {
        setPlaceOrderContext((prevContext) => ({
          ...prevContext,
          environmentalTax: updatedEnvironmentalTax,
        }));
      },
      updateMainLine: (updatedMainLine) => {
        setPlaceOrderContext((prevContext) => ({
          ...prevContext,
          mainLine: updatedMainLine,
        }));
      },
      updateUpsell: (updatedUpsell) => {
        setPlaceOrderContext((prevContext) => ({
          ...prevContext,
          upsell: updatedUpsell,
        }));
      },
      updateAccessoryCharges: (updatedAccessoryCharges) => {
        setPlaceOrderContext((prevContext) => ({
          ...prevContext,
          accessoryCharges: updatedAccessoryCharges,
        }));
      },
      updateExtraCharges: (updatedExtraCharges) => {
        setPlaceOrderContext((prevContext) => ({
          ...prevContext,
          extraCharges: updatedExtraCharges,
        }));
      },
      updatePerUnitExtraCharges: (updatedPerUnitExtraCharges) => {
        setPlaceOrderContext((prevContext) => ({
          ...prevContext,
          perUnitExtraCharges: updatedPerUnitExtraCharges,
        }));
      },
      // Add more update functions as needed
    });

  return (
    <PlaceOrderContext.Provider value={placeOrderContext}>
      {children}
    </PlaceOrderContext.Provider>
  );
};

export const usePlaceOrderContext = () => {
  const context = useContext(PlaceOrderContext);
  if (context === undefined) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
};
