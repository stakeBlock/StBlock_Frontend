import React from "react";
import styled from "styled-components";
import { useState } from "react";
import OptionLayout from "../swap/OptionLayout";

import LiquidityOption from "../swap/AddLiquidityOption/LiquidityOption";
import SwapOption from "../swap/SwapOption/SwapOption";
import AddToken from "../common/AddToken";

const SwapLayout = () => {
    const [option, setOption]  = useState(0);
    return ( 
        <StWrapper>
        <SwapTitle>Swap</SwapTitle>
        <SwapWrapper>
            <OptionLayout option={option} setOption ={setOption}/>
            {option === 0 ?
                <SwapOption/>
            : <LiquidityOption/>}
        </SwapWrapper>
        <AddToken/>
        </StWrapper>
    );
};

export default SwapLayout;

const StWrapper = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 7.7rem;
`;

const SwapTitle = styled.h1`
    ${({ theme }) => theme.fonts.Stblock_Title}
`;  

const SwapWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 50.6rem;
    margin-top: 3.4rem;
    border-radius: 1.8rem;
    background-color: ${({ theme }) =>
    theme.colors.Stblock_Color_Dark_Gray_2};
`;

