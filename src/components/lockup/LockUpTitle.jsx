import React, { useEffect, useState } from "react";
import styled from "styled-components";
import IcLockUp from "../../assets/icon/lockup/ic_lockup.svg";
import { useRecoilValue } from "recoil";
import { networkAtom } from "../../store/network";
import { accountAtom } from "../../store/account";
import StakeStBfcTx from "../../utils/web3/transactions/bfc/StakeStBfcTx";
import { fixBalance } from "../../utils/web3/fixValues/fixBalance";
const LockUpTitle = () => {
  //------ States ------//
  const [totalStaked, setTotalStaked] = useState("-");
  // const [bfcDueTime, setBfcDueTime] = useState(0);
  // const [bfcLeftTime, setBfcLeftTime] = useState([0, 0, 0]);
  const [blkDueTime, setBlkDueTime] = useState(0);
  const [blkLeftTime, setBlkLeftTime] = useState([0, 0, 0]);

  //------ Recoil States ------//
  const account = useRecoilValue(accountAtom);
  const network = useRecoilValue(networkAtom);

  //----- Tx Objects ------//
  const stakeStBfcTx = new StakeStBfcTx(network);

  //------ Functions ------//
  const getData = async () => {
    const totalStaked = await stakeStBfcTx.totalStaked();
    setTotalStaked(totalStaked);
    const blkLastMinted = await stakeStBfcTx.blkLastMinted();
    const blkMintingPeriod = await stakeStBfcTx.blkMintingPeriod();
    const blkDueTime = parseInt(blkLastMinted) + parseInt(blkMintingPeriod);
    setBlkDueTime(blkDueTime);
    console.log(blkLastMinted, blkMintingPeriod, blkDueTime, Date.now() / 1000);
  };
  //------ Effects ------//
  useEffect(() => {
    getData();
  }, [account]);

  useEffect(() => {
    const interval = setInterval(() => {
      const blkTime = parseInt(blkDueTime - Date.now() / 1000);
      if (blkTime < 0) {
        setBlkLeftTime([0, 0, 0]);
      } else {
        const hours = Math.floor(blkTime / 3600);
        const minutes = Math.floor((blkTime % 3600) / 60);
        const seconds = Math.floor((blkTime % 3600) % 60);
        setBlkLeftTime([hours, minutes, seconds]);
      }

      // const bfcTime = parseInt(bfcDueTime - Date.now() / 1000);
      // console.log(bfcTime, bfcDueTime);
      // if (bfcDueTime < 0) {
      //   setBfcLeftTime([0, 0, 0]);
      // } else {
      //   const hours = Math.floor(bfcTime / 3600);
      //   const minutes = Math.floor((bfcTime % 3600) / 60);
      //   const seconds = Math.floor((bfcTime % 3600) % 60);
      //   setBfcLeftTime([hours, minutes, seconds]);
      // }
    }, 1000);
    return () => clearInterval(interval);
  }, [blkDueTime]);

  return (
    <StWrapper>
      <img src={IcLockUp} alt="lockUp" />
      <StTitleText>Lockup stBFC</StTitleText>
      <StTitleBlock>
        <StSubTitleBlock>
          <StTitleDes>Total Staked</StTitleDes>
          <StTitleDesText>{fixBalance(totalStaked, network)} stBFC</StTitleDesText>
        </StSubTitleBlock>
        <StSubTitleBlock>
          <StTitleDes>Reward Distribution</StTitleDes>
          <StTitleDesText>{blkLeftTime[0] + ":" + blkLeftTime[1] + ":" + blkLeftTime[2]}</StTitleDesText>
        </StSubTitleBlock>
      </StTitleBlock>
    </StWrapper>
  );
};

export default LockUpTitle;

const StWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin: 1.8rem 0 5rem 0;
`;
const StTitleText = styled.div`
  margin: 4rem 0 5rem 0;

  font-family: "Montserrat";
  font-style: normal;
  font-weight: 800;
  font-size: 40px;
  line-height: 49px;
`;
const StTitleBlock = styled.div`
  display: flex;
`;
const StSubTitleBlock = styled.div`
  margin-right: 3.5rem;
`;
const StTitleDes = styled.span`
  margin-right: 3.5rem;

  ${({ theme }) => theme.fonts.Stblock_Heading_4};
  color: ${({ theme }) => theme.colors.Stblock_Color_Medium_Blue_Gray};
`;
const StTitleDesText = styled.span`
  ${({ theme }) => theme.fonts.Stblock_SubTitle_2};
  color: ${({ theme }) => theme.colors.Stblock_Color_Blue};
`;
