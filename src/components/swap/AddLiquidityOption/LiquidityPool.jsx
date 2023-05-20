import React from "react";
import styled from "styled-components";
import StBFC from "../../../assets/icon/token/ic_token.svg";
import IcBifrost from "../../../assets/icon/token/ic_bifrost.svg";


const LiquidityPool = ({token_1, token_2}) => {
    const getIcon = (token) => {
        switch (token) {
            case "BFC":
                return IcBifrost;
            case "stBFC":
                return StBFC;
        }};
    return(
        <StWrapper>
            <StPoolTitle>Pool Liquidity</StPoolTitle>
            <StTotalValueBlock>
                <StTotalValueTop>
                    Total value
                    <StToken>
                        <img src={getIcon(token_1)}/>
                        <StTokenTitle>{token_1}</StTokenTitle>
                        <StTokenValue>000,000</StTokenValue>
                    </StToken>
                </StTotalValueTop>
                <StToken>
                    <img src={getIcon(token_2)}/>
                    <StTokenTitle>{token_2}</StTokenTitle>
                    <StTokenValue>000,000</StTokenValue>
                </StToken>
                
            </StTotalValueBlock>

            <StCurrentPriceBlock>
                <CurrentPriceText>Current Price</CurrentPriceText>
                <CurrentPriceValue>
                    <StToken>
                        <img src={getIcon(token_1)}/>
                        <StTokenTitle>{token_1}</StTokenTitle>
                        <StTokenValue>000,000k</StTokenValue>
                    </StToken>
                    <StBorder/>
                    <StToken>
                    <img src={getIcon(token_2)}/>
                    <StTokenTitle>{token_2}</StTokenTitle>
                    <StTokenValue>000,000k</StTokenValue>
                </StToken>
                </CurrentPriceValue>
            </StCurrentPriceBlock>
        </StWrapper>
    )
};

export default LiquidityPool;

const StWrapper = styled.div`
    margin-top: 1.8rem;
    width: 100%;
    padding: 1.6rem 2.1rem 2rem 2.1rem;
    background-color: ${({ theme }) =>
    theme.colors.Stblock_Color_White};
    border-radius: 1rem;

    display: flex;
    flex-direction: column;
    
    justify-content: space-between;
`;

const StPoolTitle = styled.div`
    ${({ theme }) => theme.fonts.Stblock_SubText_1};
    color: ${({ theme }) => theme.colors.Stblock_Color_Blue};
    width: 100%;
    display: flex;
    justify-content: flex-start;
    border-bottom: 0.1rem solid ${({ theme }) => theme.colors.Stblock_Color_Light_Blue_Gray};
    padding: 0 0.6rem 1.6rem 0.6rem; 
`;

const StTotalValueBlock = styled.div`
    padding: 0 0.8rem;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap : 1.2rem;
    margin-top: 2.2rem;
`;

const StTotalValueTop = styled.div`
${({ theme }) => theme.fonts.Stblock_Heading_8};
    color: ${({ theme }) => theme.colors.Stblock_Color_Navy};
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const StToken = styled.div`
    display: flex;
    align-items: center;
    gap: 0.4rem;
    justify-content: flex-end;
`;

const StTokenTitle = styled.div`
   ${({ theme }) => theme.fonts.Stblock_Heading_8};
    color: ${({ theme }) => theme.colors.Stblock_Color_Navy};
`;

const StTokenValue = styled.div`
    ${({ theme }) => theme.fonts.Stblock_Heading_8};
    color: ${({ theme }) => theme.colors.Stblock_Color_Navy};
    margin-left: 0.8rem;
`;

const StBorder = styled.div`
    width: 0.4rem;
    height: 1rem;
    border-radius: 1rem;
    background-color: ${({ theme }) => theme.colors.Stblock_Color_Light_Blue_Gray};
`;

const StCurrentPriceBlock = styled.div`
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;
    padding: 0 0.6rem;
`;

const CurrentPriceText = styled.div`
    ${({ theme }) => theme.fonts.Stblock_Heading_8};
    color: ${({ theme }) => theme.colors.Stblock_Color_Navy};
    width: 100%;
    height: 2.8rem;
    display: flex;
    justify-content: flex-start;
`;

const CurrentPriceValue = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 2.6rem 4.2rem;
    border-radius: 1rem;
    border: 1px solid #E1E3EA;
    align-items: center;
;`



