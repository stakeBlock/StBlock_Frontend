import React, { useState, useEffect } from "react";
import styled from "styled-components";
import BiFrostLayout from "./BiFrostLayout";
import StatsLayout from "./StatsLayout";
import ModalBox from "../modal/toast/ModalBox";
import PendingBox from "../modal/toast/PendingBox";
import ErrorBox from "../modal/toast/ErrorBox";

const StakingLayout = () => {
  const [isProcess, setIsProcess] = useState(false);
  const [pending, setPending] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    if (isProcess || isError) {
      setTimeout(() => {
        setIsProcess(false);
        setIsError(false);
      }, 2000);
    }
  }, [isProcess]);

  return (
    <>
      {pending && <PendingBox />}
      {isProcess && <ModalBox />}
      {isError && <ErrorBox />}
      <StWrapper>
        <StStackingTitle>Liquid Staking</StStackingTitle>
        <BiFrostLayout
          setIsProcess={setIsProcess}
          setPending={setPending}
          setIsError={setIsError}
        />
        <StatsLayout />
      </StWrapper>
    </>
  );
};

export default StakingLayout;

const StWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin-top: 7.7rem;
`;

const StStackingTitle = styled.h1`
  ${({ theme }) => theme.fonts.Stblock_Title}
`;
