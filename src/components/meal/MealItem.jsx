import React from "react";
import { MealItemForm } from "./MealItemForm";
import styled from "styled-components";

export const MealItem = ({ title, description, price }) => {
  return (
    <Container>
      <StyledMealItem>
        <h2>{title}</h2>
        <p>{description}</p>
        <b>$ {price}</b>
      </StyledMealItem>
      <div>
        <MealItemForm />
      </div>
    </Container>
  );
};

const Container = styled.li`
  display: flex;
  justify-content: space-between;
  border-bottom: 2px solid #d6d6d6;
  margin-top: 10px;
`;

const StyledMealItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-bottom: 20px;
  h2 {
    font-weight: 600;
    font-size: 18px;
    line-height: 27px;
    margin-top: 24px;
  }

  p {
    font-style: italic;
    font-weight: 400;
    font-size: 16px;
  }
  b {
    font-weight: 700;
    font-size: 20px;
    color: #ad5502;
  }
`;
