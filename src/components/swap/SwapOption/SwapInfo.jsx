import React from 'react';
import styled from 'styled-components';
import IcTooltip from '../../../assets/icon/swap/ic_tooltip.svg';
import IcToggle from '../../../assets/icon/swap/ic_toggle.svg';

const SwapInfo = () => {
    return(
        <StWrapper>
            <BFCInfo>
                <BFCLeft>
                    <p/>
                    <BFCTitle>
                        1 inBFC ≈ 1BFC
                    </BFCTitle>
                    <Price>{`($1.000)`}</Price>
                    <img src={IcTooltip} alt="tooltip"/>
                </BFCLeft>
                <img src={IcToggle} alt="toggle"/>
            </BFCInfo>

            <SwapOutputBox>
                <ExpOutputText>
                    <Title>Expected Output</Title>
                    <Value>8.84832 BFC</Value>
                </ExpOutputText>
                <PriceImpactText>
                    <Title>PriceImpact</Title>
                    <Value>0.08%</Value>
                </PriceImpactText>
                <StBorder/>
                <MinReceivedText>
                    <Title>PriceImpact</Title>
                    <Value>0.08%</Value>
                </MinReceivedText>
                <ProtocolFeeText>
                    <Title>Protocol Fee</Title>
                    <Value>Max. %</Value>
                </ProtocolFeeText>


            </SwapOutputBox>
        </StWrapper>
    );
};

export default SwapInfo;


const StWrapper = styled.div`
    margin-top: 1.8rem;
    width: 100%;
    padding: 1.5rem 0.9rem;
    background-color: ${({ theme }) =>
    theme.colors.Stblock_Color_White};
    border-radius: 1rem;
    display : flex;
    flex-direction: column;
    gap: 2.2rem;
    justify-content: space-between;
`;
const BFCInfo = styled.div`
    display: flex;
    padding-left: 0.45rem;
    width: 100%;
    justify-content: space-between;
    p{
        border: 0.1rem solid ${({ theme }) => theme.colors.Stblock_Color_Medium_Blue_Gray};
        border-radius: 100rem;
        width: 1.2rem;
        height: 1.2rem;
    }
    `;

const BFCLeft = styled.div`
    display: flex;
    gap: 0.4rem;
    align-items: center;
    `;

const BFCTitle = styled.div`
    ${({ theme }) => theme.fonts.Stblock_SubText};
    color: ${({ theme }) => theme.colors.Stblock_Color_Blue};
`;

const Price = styled.div`
    ${({ theme }) => theme.fonts.Stblock_SubText};
    color: ${({ theme }) => theme.colors.Stblock_Color_Navy};
`;


const SwapOutputBox = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;
    padding: 1.4rem 1.3rem 1.5rem 1.3rem;
    border: 0.1rem solid #F4F5F6;
    border-radius: 1.5rem;
;`

const ExpOutputText = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
;`

const PriceImpactText = styled(ExpOutputText)``;

const MinReceivedText = styled(ExpOutputText)``;

const ProtocolFeeText = styled(ExpOutputText)``;

const Title = styled.div`
    ${({ theme }) => theme.fonts.Stblock_SubText};
    color: ${({ theme }) => theme.colors.Stblock_Color_Navy};
`;

const Value = styled.div`
    ${({ theme }) => theme.fonts.Stblock_BodyText};
    color: ${({ theme }) => theme.colors.Stblock_Color_Navy};
`;

const StBorder = styled.div`
    border: 1.5px solid #F4F5F6;
    width: 100%;
`;


