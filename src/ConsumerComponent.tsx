import React, { useContext } from "react";
import { PlaceOrderContext } from "./PlaceOrderContext";

const ConsumerComponent: React.FC = () => {
  const placeOrderContext = useContext(PlaceOrderContext);

  return (
    <div>
      {/* Access the context values */}
      <p>Main Line: {JSON.stringify(placeOrderContext?.mainLine)}</p>
      {/* <p>Upsell: {JSON.stringify(placeOrderContext?.upsell)}</p> */}
      {/* Access other context values as needed */}
    </div>
  );
};

export default ConsumerComponent;
