import React from "react";
import styled from "styled-components";
import SwapFrom from "../swap/SwapFrom";
import SwapTo from "../swap/SwapTo";
import Pool from "../swap/Pool";

const SwapOption = () => {
  return (
    <StWrapper>
      <SwapFrom />
      <SwapTo />
      <Pool />
    </StWrapper>
  );
};
const StWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 3rem 2.8rem;

  background-color: ${({ theme }) =>
    theme.colors.Stblock_Color_Light_Blue_Gray_3};

  width: 100%;
  border-radius: 0rem 1.4rem 1.4rem 1.4rem;
`;

export default SwapOption;
