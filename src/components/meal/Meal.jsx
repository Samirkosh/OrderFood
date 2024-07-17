import React, { useContext } from "react";
import { MealItem } from "./MealItem";
import styled from "styled-components";
import { OrderContext } from "../../context/ContextOrder";

export const Meal = () => {
  const { state } = useContext(OrderContext);

  return (
    <StyledDiv>
      <ul>
        {state.map((item) => (
          <MealItem
            key={item.id}
            description={item.description}
            title={item.title}
            price={item.price}
            id={item.id}
          />
        ))}
      </ul>
    </StyledDiv>
  );
};

const StyledDiv = styled.div`
  width: 80%;
  background-color: white;
  display: flex;
  justify-content: center;
  border-radius: 16px;
  padding: 40px;
  ul {
    width: 100%;
  }
`;
