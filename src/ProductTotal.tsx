import { nonDecimalLocales } from "./defaultValue";
import { PriceDetails } from "../src/types/price-details";
import priceData from "../src/mock-data/price-details-decimal.json";
import { useContext } from "react";
import { PlaceOrderContext } from "./PlaceOrderContext";

const ProductTotal = () => {
  const placeOrderContext = useContext(PlaceOrderContext);
  const priceDetails: PriceDetails = priceData.priceDetails;
  const locale = "en-US";
  const isNonDecimalLocale: boolean = nonDecimalLocales.includes(locale);

  const returnLocaleBasedValue = (value: number) => {
    return isNonDecimalLocale
      ? Math.round(value)
      : Number.parseFloat(value.toFixed(2));
  };

  const currency: string = priceDetails.currency ?? "";
  const discountPercent: number = priceDetails.discountPercent ?? 0;
  const shippingCharges = returnLocaleBasedValue(priceDetails.shipping);
  const handlingCharges = returnLocaleBasedValue(priceDetails.handling);
  const taxRate = returnLocaleBasedValue(priceDetails.taxPercent);
  const environmentalTaxAmount = returnLocaleBasedValue(
    priceDetails?.environmentalTax ?? 0
  );
  const mainLineTotal_mock: number = returnLocaleBasedValue(
    priceDetails.mainLine.reduce(
      (accumulator, current) => accumulator + current.packagePrice,
      0
    )
  );
  console.log("mainLineTotal_mock", mainLineTotal_mock);

  const mainLineTotal: number = returnLocaleBasedValue(
    placeOrderContext?.mainLine.reduce(
      (accumulator, current) => accumulator + current.packagePrice,
      0
    ) ?? 0
  );
  console.log("mainLineTotal Context", mainLineTotal);

  const upsellTotal_mock: number = returnLocaleBasedValue(
    priceDetails.upsell.reduce(
      (accumulator, current) => accumulator + current.LinelTotal,
      0
    )
  );
  console.log("upsellTotal_mock", upsellTotal_mock);

  const upsellTotal: number = returnLocaleBasedValue(
    placeOrderContext?.upsell.reduce(
      (accumulator, current) => accumulator + current.LinelTotal,
      0
    ) ?? 0
  );
  console.log("upsellTotal Context", upsellTotal);

  const accessoryChargesTotal: number = returnLocaleBasedValue(
    priceDetails.accessoryCharges.reduce(
      (accumulator, current) => accumulator + current.LineTotal,
      0
    )
  );
  const extraChargesTotal: number = returnLocaleBasedValue(
    priceDetails.extraCharges.reduce(
      (accumulator, current) => accumulator + current.LineTotal,
      0
    )
  );
  const perUnitExtraChargesTotal: number = returnLocaleBasedValue(
    priceDetails.perUnitExtraCharges.reduce(
      (accumulator, current) => accumulator + current.LineTotal,
      0
    )
  );
  const productTotal_mock = mainLineTotal_mock + upsellTotal_mock;
  console.log("productTotal_mock", productTotal_mock);

  const productTotal = mainLineTotal + upsellTotal;
  console.log("productTotal Context", productTotal);

  const discountAmount = returnLocaleBasedValue(
    (Math.abs(discountPercent) * mainLineTotal) / 100
  );
  const subTotal = returnLocaleBasedValue(
    environmentalTaxAmount +
      productTotal +
      extraChargesTotal +
      perUnitExtraChargesTotal +
      accessoryChargesTotal +
      shippingCharges +
      handlingCharges -
      discountAmount
  );
  const totalTaxAmount = returnLocaleBasedValue(subTotal * taxRate);
  const totalWithoutTax = subTotal;
  const totalWithTax = returnLocaleBasedValue(subTotal + totalTaxAmount);

  return (
    <>
      <div className="tw-flex tw-justify-between tw-mx-10 tw-my-5">
        <div>MainLine Total Mock</div>
        <div>
          {currency}
          {mainLineTotal_mock}
        </div>
      </div>
      <div className="tw-flex tw-justify-between tw-mx-10 tw-my-5">
        <div>MainLine Total Context</div>
        <div>
          {currency}
          {mainLineTotal}
        </div>
      </div>
      <div className="tw-flex tw-justify-between tw-mx-10 tw-my-5">
        <div>Upsell Total Mock</div>
        <div>
          {currency}
          {upsellTotal_mock}
        </div>
      </div>
      <div className="tw-flex tw-justify-between tw-mx-10 tw-my-5">
        <div>Upsell Total Context</div>
        <div>
          {currency}
          {upsellTotal}
        </div>
      </div>
      <div className="tw-flex tw-justify-between tw-mx-10 tw-my-5">
        <div>Product Total Mock</div>
        <div>
          {currency}
          {productTotal_mock}
        </div>
      </div>
      <div className="tw-flex tw-justify-between tw-mx-10 tw-my-5">
        <div>Product Total Context</div>
        <div>
          {currency}
          {productTotal}
        </div>
      </div>
      <div className="tw-flex tw-justify-between tw-mx-10 tw-my-5">
        <div>Discount </div>
        <div>
          {currency}
          {discountAmount * -1}
        </div>
      </div>
      <div className="tw-flex tw-justify-between tw-mx-10 tw-my-5">
        <div>Extra Charges </div>
        <div>
          {currency}
          {extraChargesTotal}
        </div>
      </div>
      <div className="tw-flex tw-justify-between tw-mx-10 tw-my-5">
        <div>Per Unit Charges </div>
        <div>
          {currency}
          {perUnitExtraChargesTotal}
        </div>
      </div>
      <div className="tw-flex tw-justify-between tw-mx-10 tw-my-5">
        <div>Accessaries Charges </div>
        <div>
          {currency}
          {accessoryChargesTotal}
        </div>
      </div>
      <div className="tw-flex tw-justify-between tw-mx-10 tw-my-5">
        <div>Shipping Charges </div>
        <div>
          {currency}
          {shippingCharges}
        </div>
      </div>
      <div className="tw-flex tw-justify-between tw-mx-10 tw-my-5">
        <div>Handling Charges </div>
        <div>
          {currency}
          {handlingCharges}
        </div>
      </div>
      <div className="tw-flex tw-justify-between tw-mx-10 tw-my-5">
        <div>Sub Total </div>
        <div>
          {currency}
          {subTotal}
        </div>
      </div>
      <div className="tw-flex tw-justify-between tw-mx-10 tw-my-5">
        <div>Tax</div>
        <div>
          {currency}
          {totalTaxAmount}
        </div>
      </div>
      <div className="tw-flex tw-justify-between tw-mx-10 tw-my-5">
        <div>Total without Tax </div>
        <div>
          {currency}
          {totalWithoutTax}
        </div>
      </div>
      <div className="tw-flex tw-justify-between tw-mx-10 tw-my-5">
        <div>Total with Tax </div>
        <div>
          {currency}
          {totalWithTax}
        </div>
      </div>
    </>
  );
};

export default ProductTotal;
