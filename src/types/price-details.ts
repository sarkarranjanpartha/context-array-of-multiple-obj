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
  environmentalTax: number;
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
  Quantity: number;
  Price: number;
  LinelTotal: number;
}

export interface AccessoryCharge {
  Quantity: number;
  Price: number;
  LineTotal: number;
}

export interface ExtraCharge {
  Quantity: number;
  Price: number;
  LineTotal: number;
}

export interface PerUnitExtraCharge {
  Quantity: number;
  Price: number;
  LineTotal: number;
}