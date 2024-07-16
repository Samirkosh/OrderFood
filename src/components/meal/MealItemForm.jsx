import React, { useState } from "react";
import PlusIcon from "../../assets/icons/Plus.svg";
import styled from "styled-components";
import { Button } from "../UI/Button";

export const MealItemForm = ({ inputId, onAdd }) => {
  const [amount, setAmount] = useState(1);
  const changeHandler = (e) => {
    setAmount(e.target.value);
  };

  return (
    <Container>
      <InputBlock>
        <label htmlFor={inputId}>Amount </label>
        <input
          value={amount}
          onChange={changeHandler}
          type="number"
          id={inputId}
          min={1}
        />
      </InputBlock>
      <Button>
        <img src={PlusIcon} alt="" /> Add
      </Button>
    </Container>
  );
};
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
`;

const InputBlock = styled.div`
  margin-bottom: 12px;
  label {
    font-size: 18px;
    color: #222222;
    margin-right: 20px;
    font-weight: 600;
  }
  input {
    border: 2px solid #d6d6d6;
    border-radius: 6px;
    width: 60px;
    height: 32px;
    outline: none;
    padding: 4px 12px;
    font-size: 16px;
    font-weight: 600;
    font-family: inherit;
  }
`;
