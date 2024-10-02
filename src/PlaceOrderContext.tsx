import { createContext, useContext, useState } from "react";
import {
  AccessoryCharge,
  ExtraCharge,
  MainLine,
  PriceDetails,
  Upsell,
  PerUnitExtraCharge,
} from "../src/types/price-details";

export interface PlaceOrderContextType {
  discountPercent?: number;
  freeQtyPercent?: number;
  shipping: number;
  handling: number;
  taxPercent: number;
  currency?: string;
  environmentalTax: number;
  mainLine: MainLine[];
  upsell: Upsell[];
  accessoryCharges: AccessoryCharge[];
  extraCharges: ExtraCharge[];
  perUnitExtraCharges: PerUnitExtraCharge[];
  updateMainLine: (updatedMainLine: MainLine[]) => void;
  updateUpsell: (updatedUpsell: Upsell[]) => void;
  updateAccessoryCharges: (updatedAccessoryCharges: AccessoryCharge[]) => void;
  updateExtraCharges: (updatedExtraCharges: ExtraCharge[]) => void;
  updatePerUnitExtraCharges: (
    updatedPerUnitExtraCharges: PerUnitExtraCharge[]
  ) => void;
  // Add more update functions as needed
}

export const PlaceOrderContext = createContext<
  PlaceOrderContextType | undefined
>(undefined);

export const PlaceOrderProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [placeOrderContext, setPlaceOrderContext] =
    useState<PlaceOrderContextType>({
      shipping: 0,
      handling: 0,
      taxPercent: 0,
      environmentalTax: 0,
      mainLine: [],
      upsell: [],
      accessoryCharges: [],
      extraCharges: [],
      perUnitExtraCharges: [],
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
