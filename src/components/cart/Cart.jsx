import React, { useContext } from "react";
import { CartItem } from "./CartItem";
import { Modal } from "../UI/Modal";
import styled from "styled-components";
import { Button } from "../UI/Button";
import { OrderContext } from "../../context/ContextOrder";
import { CartContext } from "../../context/cart-context";

export const Cart = () => {
  const { closeModalHandler } = useContext(OrderContext);

  const { addedMeal } = useContext(CartContext);
  console.log(addedMeal);
  return (
    <Modal onClose={closeModalHandler}>
      <CartContent>
        <ListStyle>
          {addedMeal.map((item) => (
            <CartItem
              key={item.id}
              title={item.title}
              price={item.price}
              amount={item.amount}
            />
          ))}
        </ListStyle>

        <TotalAmountContainer>
          <h1>Total Amount</h1>

          <div>
            <b>$ 200</b>
            <section>
              <Button variant="contained" onClick={closeModalHandler}>
                Close
              </Button>
              <Button variant="warning">Order</Button>
            </section>
          </div>
        </TotalAmountContainer>
      </CartContent>
    </Modal>
  );
};

const CartContent = styled.div`
  border-radius: 20px;
  padding: 40px 32px;
`;

const ListStyle = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: start;
  width: 671px;
  max-height: 200px;
  overflow-y: auto;
`;

const TotalAmountContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 20px;

  div {
    display: flex;
    flex-direction: column;
    gap: 24px;
    align-items: end;
  }

  b {
    font-size: 24px;
    font-weight: bold;
    color: #8a2b06;
  }

  section {
    display: flex;
    gap: 16px;
  }
`;
