import React from 'react';
import styled from 'styled-components';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import SwapLayout from '../components/Layout/SwapLayout';


const Swap = () => {
    return(
        <SwapWrapper>
            <Header/>
            <SwapLayout/>
            <Footer/>
        </SwapWrapper>
    );
};

export default Swap; 

const SwapWrapper = styled.main`
    width: 100%;
    background-color: ${({ theme }) =>
    theme.colors.Stblock_Color_Light_Blue_Gray};
`; 