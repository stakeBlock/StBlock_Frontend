import React from 'react';
import styled from 'styled-components';
import StBFC from "../../../assets/icon/token/ic_token.svg";
import IcBifrost from "../../../assets/icon/token/ic_bifrost.svg";
import IcDown from "../../../assets/icon/swap/ic_down.svg";
import IcDownGr from "../../../assets/icon/swap/ic_down_gr.svg";

const LiquidityPair = () => {
    return(
        <StWrapper>
            <LiquidityPairText>Liquidity Pair</LiquidityPairText>
            <LiquidityPairWrapper>
                <TokenSelect>
                    <img src={IcBifrost} alt="BFC" />
                    <TokenSelectText>BFC</TokenSelectText>
                    <img src={IcDownGr} alt="toggle" />
                </TokenSelect>
                <StBorder/>
                <TokenSelect>
                    <img src={StBFC} alt="stBFC" />
                    <TokenSelectText>stBFC</TokenSelectText>
                    <img src={IcDown} alt="toggle" />
                </TokenSelect>
            </LiquidityPairWrapper>
            <ProtocolFee>
                <ProtocolFeeText>Protocol Fee</ProtocolFeeText>
                <ProtocolFeeValue>0.3%</ProtocolFeeValue>
            </ProtocolFee>
        </StWrapper>
    );
};

export default LiquidityPair;
  
const StWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.4rem;
`;
 
const LiquidityPairText = styled.div`
    ${({theme}) => theme.fonts.Stblock_SubText_1};
    color: ${({theme}) => theme.colors.Stblock_Color_Medium_Gray};
    margin-bottom: 0.4rem;
`;

const LiquidityPairWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    padding: 0.6rem 0rem;
    background-color: ${({theme}) => theme.colors.Stblock_Color_White};
    border-radius: 1.4rem;
`;

const TokenSelect = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
    height: 3.6rem;
`;

const TokenSelectText = styled.div`
    ${({theme}) => theme.fonts.Stblock_Heading_1};
    color: ${({theme}) => theme.colors.Stblock_Color_Navy};
`;

const StBorder = styled.div`
background: ${({ theme }) => theme.colors.Stblock_Color_Light_Blue_Gray_3};
border-radius: 1rem;
width: 0.2rem;
height: 3rem;
`;

const ProtocolFee = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    padding: 0 3rem;
`;

const ProtocolFeeText = styled.div`
    ${({theme}) => theme.fonts.Stblock_Heading_8};
    color: ${({theme}) => theme.colors.Stblock_Color_Navy};
`;

const ProtocolFeeValue = styled(ProtocolFeeText)``;


