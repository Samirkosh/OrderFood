import React from "react";
import styled from "styled-components";

const styleButton = (variant) => {
  switch (variant) {
    case "outlined": {
      return {
        backgroundColor: "#8A2B06",
        fontWeight: "500",

        "&:hover": {
          backgroundColor: "#7E2A0A",
        },
        "&:active": {
          backgroundColor: "#993108",
        },
        "&:disabled": {
          backgroundColor: "#C9C9C9",
        },
      };
    }

    case "contained": {
      return {
        backgroundColor: "transparent",
        border: "1px solid #8A2B06",
        color: "#8A2B06",
        "&:hover": {
          backgroundColor: "#8A2B06",
          color: "white",
        },
        "&:active": {
          backgroundColor: "#993108",
        },
        "&:disabled": {
          backgroundColor: "#C9C9C9",
        },
      };
    }

    case "warning": {
      return {
        backgroundColor: "#8A2B06",
        "&:hover": {
          backgroundColor: "#7E2A0A",
        },
        "&:active": {
          backgroundColor: "#993108",
        },
        "&:disabled": {
          backgroundColor: "#C9C9C9",
        },
      };
    }
  }
};

export const Button = ({
  children,
  onClick,
  disabled,
  variant = "outlined",
  ...restProps
}) => {
  return (
    <StyledButton
      onClick={onClick}
      disabled={disabled}
      {...restProps}
      variant={variant}
    >
      {children}
    </StyledButton>
  );
};

const StyledButton = styled.button`
  width: 99px;
  height: 41px;
  color: white;
  font-size: 14px;
  border-radius: 20px;
  font-weight: 500;
  border: none;
  ${({ variant }) => styleButton(variant)}
`;
