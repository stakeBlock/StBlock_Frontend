import React from "react";
import styled from "styled-components";
import StBFC from "../../../assets/icon/token/ic_token.svg";
import IcBifrost from "../../../assets/icon/token/ic_bifrost.svg";

const Pool = () => {
    return (
        <StWrapper>
        <StPoolTitle>Pool Liquidity</StPoolTitle>
        <StTvl>
            <StTvlTitle>TVL</StTvlTitle>
            <StTvlValue>{`$ 251.53m`}</StTvlValue>
        </StTvl>
        <StTotalToken>
            <StTotalTokenTitle>Total Tokens Locked</StTotalTokenTitle>
            <StTokenWrapper>
                <StToken>
                    <img src={IcBifrost} alt="BFC" />
                    <StTokenTitle>BFC</StTokenTitle>
                    <StTokenValue>000,000k</StTokenValue>
                </StToken>
                <StBorder/>
                <StToken>
                    <img src={StBFC} alt="StBFC" />
                    <StTokenTitle>stBFC</StTokenTitle>
                    <StTokenValue>000,000k</StTokenValue>
                </StToken>
            </StTokenWrapper>
        </StTotalToken>
        <StFee>
            <StFeeTitle>24hFees</StFeeTitle>
            <StFeeValue>{`$ 79.82k`}</StFeeValue>
        </StFee>
        </StWrapper>
    );
};

export default Pool;

const StWrapper = styled.div`
    margin-top: 1.8rem;
    width: 100%;
    padding: 1.6rem;
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
    padding: 0 0 1.6rem 1rem;
    width: 100%;
    display: flex;
    justify-content: flex-start;
    border-bottom: 1px solid #E1E3EA;
`;

const StTvl = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 2rem 1.6rem;
`;

const StTvlTitle = styled.div`
    ${({ theme }) => theme.fonts.Stblock_SubText};
    color: ${({ theme }) => theme.colors.Stblock_Color_Navy};
`;

const StTvlValue = styled.div`
    ${({ theme }) => theme.fonts.Stblock_Heading_1};
    color: ${({ theme }) => theme.colors.Stblock_Color_Black};
`;

const StTotalToken = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 2rem 3rem 2rem 2rem;
    gap: 1.4rem;
    border: 0.1rem solid #E1E3EA;
    border-radius: 1rem;
`;

const StTotalTokenTitle = styled.div`
    ${({ theme }) => theme.fonts.Stblock_SubText};
    color: ${({ theme }) => theme.colors.Stblock_Color_Navy};
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
`;

const StTokenWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    gap: 2rem;
    align-items: center;
    width: 100%;
   
;`

const StToken = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    gap: 0.8rem;
    img{
        width: 2rem;
    }
`;  

const StTokenTitle = styled.div`
    ${({ theme }) => theme.fonts.Stblock_Heading_7};
    color: ${({ theme }) => theme.colors.Stblock_Color_Navy};
    font-size: 1.4rem;
    
`;

const StTokenValue = styled(StTokenTitle)``;

const StBorder = styled.div`
    width: 0.4rem;
    height: 1rem;
    border-radius: 1rem;
    background-color: ${({ theme }) => theme.colors.Stblock_Color_Medium_Blue_Gray};
`;


const StFee = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 2rem 1.6rem 0.4rem 1.6rem;
`;

const StFeeTitle = styled.div`
    ${({ theme }) => theme.fonts.Stblock_SubText};
    color: ${({ theme }) => theme.colors.Stblock_Color_Navy};
`;

const StFeeValue = styled.div`
    ${({ theme }) => theme.fonts.Stblock_Heading_1};
    color: ${({ theme }) => theme.colors.Stblock_Color_Black};
`;
