import React, { useEffect, useState } from "react";
import styled from "styled-components";
import IcRoboto from "../../assets/icon/lockup/ic_roboto.svg";
import IcBlk from "../../assets/icon/lockup/ic_blk.svg";
import IcLockUp from "../../assets/icon/lockup/ic_lockup.svg";
import Button from "../common/Button";
import { useRecoilValue } from "recoil";
import { accountAtom } from "../../store/account";
import { networkAtom } from "../../store/network";
import { stakeInfoAtom } from "../../store/stakeInfo";
import StakeStBfcTx from "../../utils/web3/transactions/bfc/StakeStBfcTx";
import { fixBalance } from "../../utils/web3/fixValues/fixBalance";

const LockUpReward = () => {
  //------ States ------ //
  const [blkReward, setBlkReward] = useState(0);
  const [stBfcReward, setStBfcReward] = useState(0);
  const [unstakedAmount, setUnstakedAmount] = useState(0);
  const [unstakablePeriod, setUnstakablePeriod] = useState(0);
  const [leftTime, setLeftTime] = useState([0, 0, 0]);

  //------ Recoil States ------ //
  const account = useRecoilValue(accountAtom);
  const network = useRecoilValue(networkAtom);
  const stakeInfo = useRecoilValue(stakeInfoAtom);

  //----- Tx Objects ------//
  const stakeStBfcTx = new StakeStBfcTx(network);

  //------ Functions ------//
  const getData = async () => {
    const blkReward = await stakeStBfcTx.rewardAmountBlk(account);
    setBlkReward(blkReward);

    const stBfcReward = await stakeStBfcTx.rewardAmountBfc(account);
    setStBfcReward(stBfcReward);

    const unstakeAmount = await stakeStBfcTx.unstakedAmount(account);
    setUnstakedAmount(unstakeAmount);

    const unstakePeriod = await stakeStBfcTx.unstakablePeriod(account);
    setUnstakablePeriod(unstakePeriod);

    // convert second to hours and minutes and seconds
    const hours = Math.floor((unstakePeriod - Date.now() / 1000) / 3600);
    const minutes = Math.floor(((unstakePeriod - Date.now() / 1000) % 3600) / 60);
    const seconds = Math.floor(((unstakePeriod - Date.now() / 1000) % 3600) % 60);
    console.log(hours, minutes, seconds);
  };

  const claimBlk = async () => {
    await stakeStBfcTx.claimBlk(account);
  };

  const claimStBfc = async () => {
    await stakeStBfcTx.claimStBfc(account);
  };

  const claimUnstaked = async () => {
    await stakeStBfcTx.claimUnstaked(account);
  };

  //------ Effects ------//
  useEffect(() => {
    getData();
  }, [account]);

  useEffect(() => {
    const interval = setInterval(() => {
      const timeLeft = unstakablePeriod - Date.now() / 1000;
      if (timeLeft < 0) {
        setLeftTime([0, 0, 0]);
      } else {
        const hours = Math.floor(timeLeft / 3600);
        const minutes = Math.floor((timeLeft % 3600) / 60);
        const seconds = Math.floor((timeLeft % 3600) % 60);
        setLeftTime([hours, minutes, seconds]);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [unstakablePeriod]);

  return (
    <StWrapper>
      <StLeftTextBlock>
        <img src={IcRoboto} alt="roboto" />
        <StLeftText>You</StLeftText>
      </StLeftTextBlock>
      <StRectangle />
      <StRightTextBlock>
        <StRightText>Accrued Reward</StRightText>
        <StRightBottomBlock>
          <img src={IcBlk} alt="blk" />
          <StRightBottomText>BLK</StRightBottomText>
          <StRightBottomText>{fixBalance(blkReward, network)}</StRightBottomText>
          <StClaimBtn
            blue="true"
            onClick={async () => {
              await claimBlk();
            }}
          >
            claim
          </StClaimBtn>
        </StRightBottomBlock>
      </StRightTextBlock>
      <StRightTextBlock>
        <StRightText>Accrued Reward</StRightText>
        <StRightBottomBlock>
          <img src={IcLockUp} alt="lockup" width={20} />
          <StRightBottomText>stBFC</StRightBottomText>
          <StRightBottomText>{fixBalance(stBfcReward, network)}</StRightBottomText>
          <StClaimBtn
            blue="true"
            onClick={async () => {
              await claimStBfc();
            }}
          >
            claim
          </StClaimBtn>
        </StRightBottomBlock>
      </StRightTextBlock>
      <StRightTextBlock>
        <StRightText>Unstaked Amount</StRightText>
        <StRightBottomBlock>
          <img src={IcLockUp} alt="lockup" width={20} />
          <StRightBottomText>stBFC</StRightBottomText>
          <StRightBottomText>{fixBalance(unstakedAmount, network)}</StRightBottomText>
          <StUnstakeClaimBtn
            blue="true"
            claimable={unstakablePeriod - Date.now() / 1000 > 0}
            onClick={async () => {
              const timeLeft = unstakablePeriod - Date.now() / 1000;
              if (timeLeft < 0) {
                await claimUnstaked();
              } else {
                const hours = Math.floor(timeLeft / 3600);
                const minutes = Math.floor((timeLeft % 3600) / 60);
                const seconds = Math.floor((timeLeft % 3600) % 60);
                alert(`You can claim after ${hours} hours ${minutes} minutes ${seconds} seconds`);
              }
            }}
          >
            {unstakablePeriod - Date.now() / 1000 > 0 ? (
              <>
                {leftTime[0]}:{leftTime[1]}:{leftTime[2]}
              </>
            ) : (
              "claim"
            )}
          </StUnstakeClaimBtn>
        </StRightBottomBlock>
      </StRightTextBlock>
    </StWrapper>
  );
};

export default LockUpReward;

const StWrapper = styled.div`
  display: flex;
  align-items: center;

  margin: 5rem 0;
  padding: 4rem;

  border-radius: 3rem;

  background-color: ${({ theme }) => theme.colors.Stblock_Color_Dark_Gray_2};
  color: ${({ theme }) => theme.colors.Stblock_Color_White};
`;

const StLeftTextBlock = styled.div`
  display: flex;
  align-items: center;
`;
const StLeftText = styled.span`
  margin-left: 0.8rem;
  ${({ theme }) => theme.fonts.Stblock_SubTitle_1}
`;

const StRectangle = styled.div`
  width: 0.4rem;
  height: 1rem;
  margin: 0 3.4rem;

  border-radius: 1rem;
  background-color: ${({ theme }) => theme.colors.Stblock_Color_Medium_Gray};
`;

const StRightTextBlock = styled.div`
  display: flex;
  flex-direction: column;

  & + & {
    margin-left: 3.4rem;
  }
`;
const StRightText = styled.div`
  margin-bottom: 1.4rem;

  ${({ theme }) => theme.fonts.Stblock_SubText}
  color : ${({ theme }) => theme.colors.Stblock_Color_Light_Blue_Gray}
`;
const StRightBottomBlock = styled.div`
  display: flex;
  align-items: center;
`;
const StRightBottomText = styled.div`
  margin-left: 0.6rem;

  ${({ theme }) => theme.fonts.Stblock_Heading_1}
`;

const StClaimBtn = styled(Button)`
  margin-left: 2.6rem;
  padding: 0.8rem 1.2rem;

  ${({ theme }) => theme.fonts.Stblock_SubText_2}
`;

const StUnstakeClaimBtn = styled(StClaimBtn)`
  width: 10rem;

  background-color: ${({ theme, claimable }) => (claimable ? theme.colors.Stblock_Color_Black : theme.colors.Stblock_Color_Dark_Gray)};
`;
