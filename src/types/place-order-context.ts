import {
  AccessoryCharge,
  ExtraCharge,
  MainLine,
  PerUnitExtraCharge,
  Upsell,
} from "./price-details";

export interface PlaceOrderContextType {
  discountPercent?: number;
  freeQtyPercent?: number;
  shipping: number;
  handling: number;
  taxPercent: number;
  currency?: string;
  environmentalTax?: number;
  mainLine: MainLine[];
  upsell: Upsell[];
  accessoryCharges: AccessoryCharge[];
  extraCharges: ExtraCharge[];
  perUnitExtraCharges: PerUnitExtraCharge[];
  updateDiscountPercent: (updatedDiscountPercent: number | undefined) => void;
  updateFreeQtyPercent: (updatedFreeQtyPercent: number | undefined) => void;
  updateShipping: (updatedShipping: number) => void;
  updateHandling: (updatedHandling: number) => void;
  updateTaxPercent: (updatedTaxPercent: number) => void;
  updateCurrency: (updatedCurrency: string | undefined) => void;
  updateEnvironmentalTax: (updatedEnvironmentalTax: number) => void;
  updateMainLine: (updatedMainLine: MainLine[]) => void;
  updateUpsell: (updatedUpsell: Upsell[]) => void;
  updateAccessoryCharges: (updatedAccessoryCharges: AccessoryCharge[]) => void;
  updateExtraCharges: (updatedExtraCharges: ExtraCharge[]) => void;
  updatePerUnitExtraCharges: (
    updatedPerUnitExtraCharges: PerUnitExtraCharge[]
  ) => void;
  // Add more update functions as needed
}

export interface PlaceOrderProviderProps {
  children: React.ReactNode;
}
