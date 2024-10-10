export interface Root {
  priceDetails: PriceDetails;
}

export interface PriceDetails {
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
}

export interface MainLine {
  id: number;
  quantity: number;
  itemPrice: number;
  packagePrice: number;
  freeQuantity: number;
}

export interface Upsell {
  id: number;
  quantity: number;
  price: number;
  lineTotal: number;
}

export interface AccessoryCharge {
  id: number;
  quantity: number;
  price: number;
  lineTotal: number;
}

export interface ExtraCharge {
  id: number;
  quantity: number;
  price: number;
  lineTotal: number;
}

export interface PerUnitExtraCharge {
  id: number;
  quantity: number;
  price: number;
  lineTotal: number;
}

export interface ProductTotalProps {
  priceData: PriceDetails;
  locale: string;
}
