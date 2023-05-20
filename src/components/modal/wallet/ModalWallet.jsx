import React from "react";
import styled, { css } from "styled-components";

const ModalWallet = ({ src, alt, text, isClickWallet, handleCheckWallet }) => {
  return (
    <StWrapper onClick={handleCheckWallet} isClickWallet={isClickWallet}>
      <img src={src} alt={alt} />
      <StWalletText>{text}</StWalletText>
    </StWrapper>
  );
};

export default ModalWallet;

const StWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 1rem 4rem;

  border-radius: 1rem;
  background-color: ${({ theme }) => theme.colors.Stblock_Color_White};

  & + & {
    margin-top: 2.8rem;
  }

  ${({ isClickWallet }) =>
    isClickWallet &&
    css`
      border: 1px solid black;
    `}
`;

const StWalletText = styled.span`
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 400;
  font-size: 1.4rem;
  line-height: 1.8rem;
`;
