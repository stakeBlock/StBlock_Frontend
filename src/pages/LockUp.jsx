import React from "react";
import styled from "styled-components";
import Header from "../components/common/Header";
import LockUpLayout from "../components/Layout/LockUpLayout";

const LockUp = () => {
  return (
    <StWrapper>
      <Header />
      <LockUpLayout />
    </StWrapper>
  );
};

export default LockUp;

const StWrapper = styled.main`
  width: 100%;

  background-color: ${({ theme }) =>
    theme.colors.Stblock_Color_Light_Blue_Gray};
`;
