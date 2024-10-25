import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from "./App";
// import Car from "./Car";
import Garage from "./Garage";
import Car from "./Car";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <Garage /> */}
    <Car brand="Ferrari" color="Red" model="F80" year="2024" />
  </React.StrictMode>
);
