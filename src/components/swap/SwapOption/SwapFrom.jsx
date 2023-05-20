import React from "react";
import styled from "styled-components";
import { useState } from "react";
import StBFC from "../../../assets/icon/token/ic_token.svg";
import IcDown from "../../../assets/icon/swap/ic_down.svg";
import IcSwap from "../../../assets/icon/swap/ic_swap.svg";

const SwapFrom = () => {
    //------ States ------//
    const [swapAmount, setSwapAmount] = useState("");
    const [balance, setBalance] = useState(0);
    
    //------ Functions ------//
    const handleInputChange = (e) => {
        setSwapAmount(e.target.value);
    };




    return (
        <>
            <StWrapper>
                <FromText>From</FromText>
            <StSwapAmount>
                <StSwapInput
                    type="number"
                    placeholder="0"
                    value={swapAmount}
                    onChange={handleInputChange}></StSwapInput>
                <StSwapSelect>
                    <img src={StBFC} alt="StBFC" />
                    <TokenName>
                        stBFC
                    </TokenName>
                    <img src={IcDown} alt="IcDown"/>
                </StSwapSelect>
            </StSwapAmount>
            <StSwapInfo>
                <StPrice>$8.86</StPrice>
                <StBalance>Balance: {balance}</StBalance>
            </StSwapInfo>
            <SwapIcon><img src={IcSwap} alt="IcSwap"/></SwapIcon>
            </StWrapper>
           
        </>
    );
};

export default SwapFrom;

const StWrapper = styled.div`
    width: 100%;
    padding: 1.6rem 2.2rem 3rem 2.2rem;
    background-color: ${({ theme }) =>
    theme.colors.Stblock_Color_White};
    border-radius: 1rem;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 1.4rem;
    margin-bottom   : 0.8rem;

    position: relative;
`;

const FromText = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    ${({ theme }) => theme.fonts.Stblock_Heading_7}
`;


const StSwapAmount = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`;

const StSwapInput = styled.input`
    width: 60%;
    height: 4.1rem;
    border: none;
    font-family: "Pretendard";
    font-style: normal;
    font-weight: 600;
    font-size: 3.4rem;
    line-height: 4.1rem;
    color: ${({ theme }) => theme.colors.Stblock_Color_Black};
    &:focus {   
       outline: none;
    }
`;

const StSwapSelect = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 30%;
    height: 3rem;
    `;

const TokenName = styled.div`
    ${({ theme }) => theme.fonts.Stblock_Heading_1}
    color: ${({ theme }) => theme.colors.Stblock_Color_Navy};
    `;

const StSwapInfo = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`;

const StPrice = styled.div`
    ${({ theme }) => theme.fonts.Stblock_SubText}
    color: ${({ theme }) => theme.colors.Stblock_Color_Grey_2};
    font-weight : 400;
`;

const StBalance = styled.div`
    ${({ theme }) => theme.fonts.Stblock_SubText}
    color: ${({ theme }) => theme.colors.Stblock_Color_Grey_2};
    font-weight : 400;
`;

const SwapIcon = styled.div`
    width: 3.6rem;
    height: 3.6rem;
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translate(-50%, -50%);
`


