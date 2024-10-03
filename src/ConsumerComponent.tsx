import React, { useContext } from "react";
import { PlaceOrderContext } from "./PlaceOrderContext";

const ConsumerComponent: React.FC = () => {
  const placeOrderContext = useContext(PlaceOrderContext);

  return (
    <div>
      {/* Access the context values */}
      <p>
        Main Line:
        {placeOrderContext?.mainLine.map((item) => {
          return <pre>{JSON.stringify(item)}</pre>;
        })}
      </p>
      <p>
        Upsell:{" "}
        {placeOrderContext?.upsell.map((item) => {
          return <pre>{JSON.stringify(item)}</pre>;
        })}
      </p>
      {/* Access other context values as needed */}
    </div>
  );
};

export default ConsumerComponent;
