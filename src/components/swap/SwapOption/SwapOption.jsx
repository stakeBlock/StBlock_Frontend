import React from "react";
import styled from "styled-components";
import SwapFrom from "./SwapFrom";
import SwapTo from "./SwapTo";
import Pool from "./Pool";
import SwapInfo from "./SwapInfo";

const SwapOption = () => {
    return(
        <StWrapper>
            <SwapFrom/>
            <SwapTo/>
            <Pool/>
            <SwapInfo/>
            <StSwapBtn>
                Swap
            </StSwapBtn>
        </StWrapper>
    )
};

export default SwapOption;

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

const StSwapBtn = styled.button`
  width: 100%;
  height: 6.4rem;
  margin-top: 1.8rem;
  margin-right: 0.4rem;

  border: none;
  border-radius: 3rem;
  background-color: ${({ theme }) => theme.colors.Stblock_Color_Blue};
  color: ${({ theme }) => theme.colors.Stblock_Color_White};
  ${({ theme }) => theme.fonts.Stblock_Heading}

  cursor: pointer;
`;

