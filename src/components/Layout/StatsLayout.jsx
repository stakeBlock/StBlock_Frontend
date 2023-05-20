import React from "react";
import styled from "styled-components";
import StatsList from "../staking/stats/StatsList";

const StatsLayout = () => {
  return (
    <StWrapper>
      <StatsList />
    </StWrapper>
  );
};

export default StatsLayout;

const StWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 51.2rem;
  margin-top: 3.4rem;
  padding: 3.6rem 3.8rem 4rem;

  background-color: ${({ theme }) =>
    theme.colors.Stblock_Color_Light_Blue_Gray_3};
  border-radius: 2.6rem;
`;
