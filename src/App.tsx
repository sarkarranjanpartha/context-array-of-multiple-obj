import React from "react";
import { PlaceOrderProvider } from "./PlaceOrderContext";
import MainLineComponent from "../src/MainLineComponent";
import ConsumerComponent from "../src/ConsumerComponent";
import UpsellComponent from "../src/UpsellComponent";
import ProductWisePriceTotal from "./ProductWisePriceTotal";
import { Divider } from "@mui/material";

const App: React.FC = () => {
  return (
    <PlaceOrderProvider>
      <div>
        <div className="mx-5 my-5 flex justify-between">
          <div>
            <MainLineComponent />
          </div>

          <div>
            <UpsellComponent />
          </div>
          <div>
            <ConsumerComponent />
          </div>
        </div>
        <Divider>CENTER</Divider>
        <div>
          <ProductWisePriceTotal />
        </div>
      </div>
    </PlaceOrderProvider>
  );
};
export default App;
