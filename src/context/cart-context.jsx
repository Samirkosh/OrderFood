import { createContext, useState } from "react";

export const CartContext = createContext({});

export const CartProvider = ({ children }) => {
  const [addedMeal, setAddedMeal] = useState([]);

  const addedMealHandler = (newMeal) => {
    setAddedMeal([...addedMeal, newMeal]);
  };

  const contextValue = {
    addedMeal,
    addedMealHandler,
  };

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
};
