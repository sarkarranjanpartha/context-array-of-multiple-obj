import { Divider } from "@mui/material";

import ProductTotal from "../src/ProductTotal";
import InternalNotes from "../src/InternalNotes";

const ProductWisePriceTotal = () => {
  return (
    <>
      <ProductTotal />
      <Divider variant="middle" />
      <InternalNotes />
    </>
  );
};

export default ProductWisePriceTotal;
