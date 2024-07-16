import styled from "styled-components";
import { Header } from "./components/header/Header";
import { Meal } from "./components/meal/Meal";
import { MealsSummary } from "./components/mealsSummary/MealsSummary";
import { OrderProvider } from "./context/ContextOrder";
import { Cart } from "./components/cart/Cart";

function App() {
  return (
    <OrderProvider>
      <Header />
      <MealsSummary />
      <WrapperDiv>
        <Meal />
      </WrapperDiv>

      <Cart />
    </OrderProvider>
  );
}

export default App;

const WrapperDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 30px;
`;
