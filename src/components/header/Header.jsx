import React from "react";
import { HeaderCrdButton } from "./HeaderCrdButton";
import styled from "styled-components";

export const Header = () => {
  return (
    <StyledHeader>
      <h1>ReactMeals</h1>
      <HeaderCrdButton />
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;

  width: 100%;
  height: 5rem;
  background-color: #8a2b06;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10%;
  color: white;

  & > h1 {
    font-size: 2.4rem;
    font-weight: 600;
  }
`;
