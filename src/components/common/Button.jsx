import React from "react";
import styled, { css } from "styled-components";

const Button = (props) => {
  return <StWrapper {...props} />;
};

export default Button;

const StWrapper = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  border: none;
  border-radius: 4rem;
  background-color: ${({ theme }) =>
    theme.colors.Stblock_Color_Medium_Blue_Gray};
  color: ${({ theme }) => theme.colors.Stblock_Color_White};

  cursor: pointer;

  ${({ blue }) =>
    blue &&
    css`
      background-color: ${({ theme }) => theme.colors.Stblock_Color_Blue};
    `}

  ${({ lightGray }) =>
    lightGray &&
    css`
      background-color: ${({ theme }) =>
        theme.colors.Stblock_Color_Light_Blue_Gray};
      color: ${({ theme }) => theme.colors.Stblock_Color_Black};
    `}

    ${({ black }) =>
    black &&
    css`
      background-color: ${({ theme }) => theme.colors.Stblock_Color_Black};
    `}

    ${({ navy }) =>
    navy &&
    css`
      border-radius: 3rem;
      background-color: ${({ theme }) => theme.colors.Stblock_Color_Navy};
    `}
`;
