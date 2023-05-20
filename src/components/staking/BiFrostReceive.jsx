import React from "react";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { stakeInfoAtom } from "../../store/stakeInfo";
import { useParams } from "react-router-dom";

const BiFrostReceive = () => {
  const stakeInfo = useRecoilValue(stakeInfoAtom);
  const { staking } = useParams();

  return (
    <StWrapper>
      <StWrapperReceive>
        <StWrapperReceiveTopLeft>You will receive</StWrapperReceiveTopLeft>
        {staking == "stack" ? (
          <StWrapperReceiveTopRight>{stakeInfo.bfcAmount} stBFC</StWrapperReceiveTopRight>
        ) : (
          <StWrapperReceiveTopRight>{stakeInfo.bfcAmount} BFC</StWrapperReceiveTopRight>
        )}
      </StWrapperReceive>
      <STWrapperReward>
        <StWrapperRewardText>Reward APR</StWrapperRewardText>
        <StWrapperRewardText>000000 %</StWrapperRewardText>
      </STWrapperReward>
      <STWrapperReward>
        <StWrapperRewardText>Exchange rate</StWrapperRewardText>
        <StWrapperRewardText>1 stBFC ≈ 1 BFC</StWrapperRewardText>
      </STWrapperReward>
    </StWrapper>
  );
};

export default BiFrostReceive;

const StWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  margin-top: 1rem;
  padding: 2rem;
`;

const StWrapperReceive = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  margin-bottom: 2rem;
`;
const StWrapperReceiveTopLeft = styled.span`
  ${({ theme }) => theme.fonts.Stblock_SubText_2};
  color: ${({ theme }) => theme.colors.Stblock_Color_Blue};
`;
const StWrapperReceiveTopRight = styled.span`
  ${({ theme }) => theme.fonts.Stblock_Heading};
  color: ${({ theme }) => theme.colors.Stblock_Color_Blue};
`;
const STWrapperReward = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;

  & + & {
    margin-top: 1rem;
  }
`;
const StWrapperRewardText = styled.span`
  ${({ theme }) => theme.fonts.Stblock_SubText_1};
  color: ${({ theme }) => theme.colors.Stblock_Color_Medium_Gray};
`;
