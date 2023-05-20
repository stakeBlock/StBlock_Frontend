import React, { useState } from "react";
import styled from "styled-components";
import LiquidityPair from "./LiquidityPair";
import LiquidityAmount from "./LiquidityAmount";
import LiquidityPool from "./LiquidityPool";

const LiquidityOption = () => {

    const [token_1, setToken_1] = useState('BFC');
    const [token_2, setToken_2] = useState('stBFC');
    return (
        <StWrapper>
            <LiquidityPair/>
            <LiquidityAmount/>
            <LiquidityPool token_1={token_1} token_2={token_2}/>
            <LiquidityExpYield>
                <ExpYieldText>
                    Expected Yield
                </ExpYieldText>
                <ExpYieldValue>
                    APR
                    <span>%</span>
                </ExpYieldValue>
            </LiquidityExpYield>
            <LiquidityConfirmBtn>Confirm</LiquidityConfirmBtn>
        </StWrapper>
    )
}

export default LiquidityOption;

const StWrapper = styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 3rem 2.6rem;
    background-color: ${({ theme }) =>
    theme.colors.Stblock_Color_Light_Blue_Gray_3};
    width: 100%;
    border-radius: 1.4rem 0  1.4rem 1.4rem;
`;

const LiquidityExpYield = styled.div`
    margin-top: 1.8rem;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2rem;
    background-color: ${({theme}) => theme.colors.Stblock_Color_Black};
    border-radius: 1rem;
;`


const ExpYieldText = styled.div`
    ${({ theme }) => theme.fonts.Stblock_SubText};
    color: ${({ theme }) => theme.colors.Stblock_Color_White};
;`

const ExpYieldValue = styled.div`
    ${({ theme }) => theme.fonts.Stblock_Heading_1};
    color: ${({ theme }) => theme.colors.Stblock_Color_White};
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 30%;
    span{
        ${({ theme }) => theme.fonts.Stblock_Heading_1};
        color: ${({ theme }) => theme.colors.Stblock_Color_White};
    }
;`

const LiquidityConfirmBtn = styled.button`
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
;`

