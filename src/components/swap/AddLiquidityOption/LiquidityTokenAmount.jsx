import React from "react";
import styled from "styled-components";
import StBFC from "../../../assets/icon/token/ic_token.svg";
import IcBifrost from "../../../assets/icon/token/ic_bifrost.svg";

const LiquidityTokenAmount = ({token, price, balance, amount}) => {

 const getIcon = (token) => {
    switch (token) {
        case "BFC":
            return IcBifrost;
        case "stBFC":
            return StBFC;
    }};

    return(
        <StWrapper>
            <LiquidityAmountBlock>
                <LiquidityAmountValue>{amount}</LiquidityAmountValue>
                <LiquidityToken>
                    <img src={getIcon(token)} alt="IcBifrost"/>
                    <TokenName>{token}</TokenName>
                </LiquidityToken>
            </LiquidityAmountBlock>
            <LiquidityInfoBlock>
                <LiquidityPrice>{price}</LiquidityPrice>
                <LiquidityBalance>Balance: {balance}</LiquidityBalance>
            </LiquidityInfoBlock>
        </StWrapper>
    );
};

export default LiquidityTokenAmount;

const StWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 3rem 2.2rem;
    background-color: ${({ theme }) =>
    theme.colors.Stblock_Color_White};
    border-radius: 1.4rem;
    gap: 1.2rem;
`;

const LiquidityAmountBlock = styled.div`
    width: 100%;
    display: flex;  
    justify-content: space-between;
    align-items: center;
    `;

const LiquidityAmountValue = styled.div`
    ${({ theme }) => theme.fonts.Stblock_Title};
    color: ${({ theme }) => theme.colors.Stblock_Color_Black};
    font-weight: 600;
    font-size: 3.4rem;  
    `;

const LiquidityToken = styled.div`
    display: flex;
    align-items: center;
    gap: 0.4rem;
    `;

const TokenName = styled.div`
    ${({ theme }) => theme.fonts.Stblock_Heading_1};
    color: ${({ theme }) => theme.colors.Stblock_Color_Navy};
    `;

const LiquidityInfoBlock = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    `;
const LiquidityPrice = styled.div`
    ${({ theme }) => theme.fonts.Stblock_SubText};
    font-weight : 400;
    color: ${({ theme }) => theme.colors.Stblock_Color_Navy};
    `;

const LiquidityBalance = styled(LiquidityPrice)``;

