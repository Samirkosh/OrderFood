import React from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";

export const Modal = ({ children, onClose }) => {
  return (
    <>
      {createPortal(
        <Backdrop onClick={onClose}>
          <Content onClick={(e) => e.stopPropagation()}>{children}</Content>
        </Backdrop>,
        document.getElementById("modal")
      )}
    </>
  );
};

const Backdrop = styled.div`
  position: fixed;
  z-index: 20;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #000000b3;
`;

const Content = styled.div`
  padding: 40px;
  background-color: white;
  border-radius: 20px;
`;
