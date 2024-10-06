import React from "react";
import MainLineComponent from "./MainLineComponent";

export default function MainLineParentComponent() {
  return (
    <>
      <div>MainLineParentComponent</div>
      <MainLineComponent />
      <div />
    </>
  );
}
