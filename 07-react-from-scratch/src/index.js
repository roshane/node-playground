import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import Todo from "./App";

let root = createRoot(document.getElementById("root"));

const renderFun = () => {
  root.render(
    <StrictMode>
      <Todo />
    </StrictMode>
  );
};
renderFun();

if (module.hot) {
  module.hot.accept("./App", () => {
    console.log("accpting HMR for module App");
    renderFun();
  });
}
