import { createContext, useReducer, useState } from "react";
import { product } from "../utils/constants";

export const OrderContext = createContext();

export const OrderProvider = ({ children }) => {
  const [state, setstate] = useState(product);

  const contextValue = { state };

  return (
    <OrderContext.Provider value={contextValue}>
      {children}
    </OrderContext.Provider>
  );
};
