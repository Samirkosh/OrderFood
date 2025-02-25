import React, { useContext } from "react";
import basketImage from "../../assets/icons/Group.svg";
import styled from "styled-components";
import { OrderContext } from "../../context/ContextOrder";
import { CartContext } from "../../context/cart-context";

export const HeaderCrdButton = () => {
  const context = useContext(OrderContext);

  const { addedMeal } = useContext(CartContext);

  const currentMealsCount = addedMeal.reduce((acc, meal) => {
    return acc + meal.amount;
  }, 0);

  return (
    <StyledButton onClick={context.openModalHandler}>
      <img src={basketImage} alt="basketImage" />
      <span>Your cart</span>
      <Badge>{currentMealsCount}</Badge>
    </StyledButton>
  );
};

const Badge = styled.span`
  background-color: #8a2b06;
  font-weight: 700;
  padding: 4px 20px;
  border-radius: 30px;
  font-size: 20px;
`;

const StyledButton = styled("button")`
  cursor: pointer;
  border: none;
  background-color: #5a1f08;
  padding: 0.75rem 2rem;
  color: white;
  border-radius: 30px;
  &:hover,
  &:active {
    background-color: #461805;
  }
  display: flex;
  gap: 10px;
  justify-content: space-around;
  align-items: center;

  &:active,
  &:hover > ${Badge} {
    background-color: #671f03;
    animation: BUMP 300ms ease-in-out;
  }

  & > svg {
    margin-right: 0.5rem;
  }
  .butp {
    font-size: 1rem;
    font-weight: 600;
  }

  @keyframes BUMP {
    0% {
      transform: scale(1);
    }
    10% {
      transform: scale(0.9);
    }
    30% {
      transform: scale(1.1);
    }
    50% {
      transform: scale(1.15);
    }
    100% {
      transform: scale(1);
    }
  }
`;
