import React, { useEffect, useState } from "react";
import styled from "styled-components";
import IclockUp from "../../assets/icon/lockup/ic_lockup.svg";
import { useParams } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";
import { accountAtom } from "../../store/account";
import { networkAtom } from "../../store/network";
import StakeStBfcTx from "../../utils/web3/transactions/bfc/StakeStBfcTx";
import StBfcTx from "../../utils/web3/transactions/bfc/stBfcTx";
import { fixBalance } from "../../utils/web3/fixValues/fixBalance";
import { stakeInfoAtom } from "../../store/stakeInfo";

const LockUpPrice = () => {
  const { staking } = useParams();
  //------ States ------//
  const [currentStaked, setCurrentStaked] = useState("-");
  const [stBfcBalance, setStBfcBalance] = useState("-");

  //------ Recoil States ------//
  const account = useRecoilValue(accountAtom);
  const network = useRecoilValue(networkAtom);
  const [stakeInfo, setStakeInfo] = useRecoilState(stakeInfoAtom);

  //----- Tx Objects ------//
  const stakeStBfcTx = new StakeStBfcTx(network);
  const stBfcTx = new StBfcTx(network);

  //------ Functions ------//
  const getData = async () => {
    const stakedAmount = await stakeStBfcTx.stakedAmount(account);
    setCurrentStaked(stakedAmount);
    const balance = await stBfcTx.balanceOf(account);
    setStBfcBalance(balance);
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setStakeInfo({ ...stakeInfo, stBfcAmount: value });
  };

  //------ Effects ------//
  useEffect(() => {
    getData();
  }, [account]);

  return (
    <StWrapper>
      {staking === "stake" ? (
        <>
          <StTextBlock>
            <StText>Current Staked</StText>
            <StText>{fixBalance(currentStaked, network)} stBFC</StText>
          </StTextBlock>
          <StTextBlock>
            <StText>Available Balance</StText>
            <StText> {fixBalance(stBfcBalance, network)} stBFC</StText>
          </StTextBlock>
          <StTextBlock>
            <StText>Amount to Stake</StText>
          </StTextBlock>
        </>
      ) : (
        <>
          <StTextBlock>
            <StText>Unstaking Available for</StText>
            <StText>{fixBalance(currentStaked, network)} stBFC</StText>
          </StTextBlock>
          <StTextBlock>
            <StText>Amount to Unstake</StText>
          </StTextBlock>
        </>
      )}
      <StBfcBlock>
        <StBfcInput placeholder="0.0" onChange={handleInputChange}></StBfcInput>
        <StBfcRight>
          <StBfcMaxBlock>MAX</StBfcMaxBlock>
          <img src={IclockUp} alt="lockup" width={30} />
          <StBfc>stBFC</StBfc>
        </StBfcRight>
      </StBfcBlock>
    </StWrapper>
  );
};

export default LockUpPrice;

const StWrapper = styled.div`
  width: 100%;
  padding: 0 4.8rem;
`;
const StTextBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  & + & {
    margin-top: 2.4rem;
  }
`;
const StText = styled.span`
  ${({ theme }) => theme.fonts.Stblock_BodyText};
`;

const StBfcBlock = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  width: 100%;
  margin: 1rem 0 3rem 0;
  padding: 1.6rem 3.6rem;

  border-radius: 1.4rem;
  background-color: ${({ theme }) => theme.colors.Stblock_Color_White};
`;
const StBfcInput = styled.input`
  display: flex;
  justify-content: center;
  width: 19rem;
  border: none;

  color: ${({ theme }) => theme.colors.Stblock_Color_Blue};

  font-family: "Pretendard";
  font-style: normal;
  font-weight: 500;
  font-size: 2rem;
  line-height: 2.4rem;

  &:focus {
    outline: none;
  }
`;
const StBfcRight = styled.div`
  display: flex;
  align-items: center;

  margin-left: 6rem;
`;
const StBfcMaxBlock = styled.div`
  margin-right: 0.4rem;
  padding: 0.4rem 0.8rem;

  border: 0.1rem solid ${({ theme }) => theme.colors.Stblock_Color_Medium_Blue_Gray};
  border-radius: 0.4rem;
  color: ${({ theme }) => theme.colors.Stblock_Color_Medium_Blue_Gray};
  ${({ theme }) => theme.fonts.Stblock_Heading_6};
`;
const StBfc = styled.span`
  ${({ theme }) => theme.fonts.Stblock_Heading_1};
`;
