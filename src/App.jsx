import styled from "styled-components";
import { Header } from "./components/header/Header";
import { Meal } from "./components/meal/Meal";
import { MealsSummary } from "./components/mealsSummary/MealsSummary";
import { OrderContext } from "./context/ContextOrder";
import { Cart } from "./components/cart/Cart";
import { useContext } from "react";

function App() {
  const { isOpenModal, openModalHandler, closeModalHandler } =
    useContext(OrderContext);

  return (
    <>
      <Header />
      <MealsSummary />
      <WrapperDiv>

        <Meal />
        
      </WrapperDiv>
      {isOpenModal && <Cart />}
    </>
  );
}

export default App;

const WrapperDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 30px;
`;
