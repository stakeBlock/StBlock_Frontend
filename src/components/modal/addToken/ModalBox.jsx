import React from "react";
import styled from "styled-components";
import ModalHeader from "./ModalHeader";
import ModalTokenList from "./ModalTokenList";

const ModalBox = () => {
  return (
    <StWrapper>
      <ModalHeader />
      <ModalTokenList />
    </StWrapper>
  );
};

export default ModalBox;

const StWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: 76.4rem;
  height: 39.3rem;
  padding: 4.4rem 4.4rem 4.4rem 4.4rem;

  border-radius: 2rem;
  background-color: ${({ theme }) => theme.colors.Stblock_Color_White};

  box-shadow: 0 0.4rem 2.4rem rgba(0, 0, 0, 0.12);
`;
