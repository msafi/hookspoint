import type TReactDom from "react-dom";
import type TReact from "react";

declare const ReactDOM: typeof TReactDom;
declare const React: typeof TReact;

ReactDOM.render(
  <h2>PRICE TRACKER!</h2>,
  document.getElementById("bitcoinCyclePriceTracker")
);
