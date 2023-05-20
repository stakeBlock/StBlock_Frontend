import React from "react";
import styled from "styled-components";
import Header from "../components/common/Header";
import StakingLayout from "../components/Layout/StakingLayout";
import Footer from "../components/common/Footer";
import AddToken from "../components/common/AddToken";

const Staking = () => {
  return (
    <StWrapper>
      <Header />
      <StakingLayout />
      <AddToken />
      <Footer />
    </StWrapper>
  );
};

export default Staking;

const StWrapper = styled.main`
  width: 100%;

  background-color: ${({ theme }) =>
    theme.colors.Stblock_Color_Light_Blue_Gray};
`;
