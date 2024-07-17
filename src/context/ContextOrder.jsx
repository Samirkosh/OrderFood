import { createContext, useState } from "react";
import { product } from "../utils/constants";

export const OrderContext = createContext({
  isOpenModal: false,
  openModalHandler: () => {},
  closeModalHandler: () => {},
});

export const OrderProvider = ({ children }) => {
  const [state, setState] = useState(product);
  const [isOpenModal, setIsOpenModal] = useState(false);

  const openModalHandler = () => {
    setIsOpenModal(true);
  };

  const closeModalHandler = () => {
    setIsOpenModal(false);
  };

  const contextValue = {
    state,
    isOpenModal,
    openModalHandler,
    closeModalHandler,
  };

  return (
    <OrderContext.Provider value={contextValue}>
      {children}
    </OrderContext.Provider>
  );
};
