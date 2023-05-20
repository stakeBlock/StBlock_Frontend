import React from "react";
import styled from "styled-components";
import LiquidityTokenAmount from "./LiquidityTokenAmount";

const LiquidityAmount = () => {

    return(
        <StWrapper>
            <AmountText>Amount</AmountText>
            <LiquidityTokenWrapper>
                <LiquidityTokenAmount token="BFC" balance="-.-------" price="$8.86" amount="0.005"/>
                <LiquidityTokenAmount token="stBFC" balance="0.03" price="$8.86(-0.050%)" amount="8.84833"/>
            </LiquidityTokenWrapper>
        </StWrapper>
    );
};

export default LiquidityAmount;

const StWrapper = styled.div`
    margin-top: 2rem;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.8rem;
;`

const AmountText = styled.div`
    ${({ theme }) => theme.fonts.Stblock_SubText_1};
    color: ${({ theme }) => theme.colors.Stblock_Color_Blue};
;`

const LiquidityTokenWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.8rem;
;`
