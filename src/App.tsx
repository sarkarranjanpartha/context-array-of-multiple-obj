import React from "react";
import { PlaceOrderProvider } from "./PlaceOrderContext";
import MainLineComponent from "../src/MainLineComponent";
import ConsumerComponent from "../src/ConsumerComponent";
import UpsellComponent from "../src/UpsellComponent";

const App: React.FC = () => {
  return (
    <PlaceOrderProvider>
      <MainLineComponent />
      <UpsellComponent />
      <ConsumerComponent />
    </PlaceOrderProvider>
  );
};
export default App;
