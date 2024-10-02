import React from "react";
import { PlaceOrderProvider } from "./PlaceOrderContext";
import MainLineComponent from "../src/MainLineComponent";
import UpsellComponent from "../src/UpsellComponent";
import ConsumerComponent from "../src/ConsumerComponent";

const App: React.FC = () => {
  return (
    <PlaceOrderProvider>
      <MainLineComponent />
      <UpsellComponent />
      <ConsumerComponent />
    </PlaceOrderProvider>
  );
};
