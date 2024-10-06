import React from "react";
import { PlaceOrderProvider } from "./PlaceOrderContext";
import ConsumerComponent from "../src/ConsumerComponent";
import ProductWisePriceTotal from "./ProductWisePriceTotal";
import { Divider } from "@mui/material";
import UpsellParentComponent from "./UpsellParentComponent";
import MainLineParentComponent from "./MainLineParentComponent";

const App: React.FC = () => {
  return (
    <PlaceOrderProvider>
      <div>
        <div className="mx-5 my-5 flex justify-between">
          <div>
            <MainLineParentComponent />
          </div>

          <div>
            <UpsellParentComponent />
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
