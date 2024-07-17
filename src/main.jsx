import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { OrderProvider } from "./context/ContextOrder.jsx";
import { CartProvider } from "./context/cart-context.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <CartProvider>
    <OrderProvider>
      <App />
    </OrderProvider>
  </CartProvider>
);
