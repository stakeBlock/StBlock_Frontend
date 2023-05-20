import React from 'react';
import styled from 'styled-components';

const OptionLayout = ({ option, setOption }) => {
    return(
        <OptionWrapper>
             <SwapOption option={option === 0}>
                <SwapButton
                    option={option === 0}
                    onClick={() => setOption(0)}    
                >
                    <OptionTitle>Swap</OptionTitle>
                </SwapButton>
             </SwapOption>
             <LiquidityOption option={option === 1}>
                <LiquidityButton
                    option={option === 1}
                    onClick={() => setOption(1)}
                >
                    <OptionTitle>Add Liquidity</OptionTitle>
                </LiquidityButton>
             </LiquidityOption>
        </OptionWrapper>
                

    )
};

export default OptionLayout;

const OptionWrapper = styled.section`
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-around;
    height: 6.7rem;
    border-radius: 1.8rem;
    background-color: ${(props) => props.theme.colors.Stblock_Color_Dark_Gray_2};
`;

const SwapOption = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 50%;
    

    border-radius: 2rem 0 0 0;
    background-color: ${(props) =>
    props.option ? props.theme.colors.Stblock_Color_Dark_Gray_2 : props.theme.colors.Stblock_Color_Light_Blue_Gray_3};
    cursor: pointer;
`;

const SwapButton = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    color: ${ (props) =>
        props.option ? props.theme.colors.Stblock_Color_Black : props.theme.colors.Stblock_Color_White};
    border-radius: ${ ({option}) =>
        option ? "1.4rem 1.4rem 0 0" : "1.4rem 0 1.4rem 0"};
    background-color: ${ (props) =>
        props.option ? props.theme.colors.Stblock_Color_Light_Blue_Gray_3 : props.theme.colors.Stblock_Color_Dark_Gray_2};
`;

const LiquidityOption = styled(SwapOption)`
    border-radius: ${ ({option}) => 
        option ? "1.4rem 1.8rem 0 0" : "0 1.4rem 1.4rem 0"};
`;

const LiquidityButton = styled(SwapButton)`
    border-radius: ${ ({option}) =>
        option ? "1.4rem 1.4rem 0 0" : "0 1.4rem 0 1.4rem"};
`;

const OptionTitle = styled.h2`
    ${({ theme }) => theme.fonts.Stblock_Heading_4};
`;
