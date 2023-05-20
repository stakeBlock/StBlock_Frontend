import React, { useEffect, useState } from "react";
import styled from "styled-components";
import IcBifrost from "../../../assets/icon/modal/ic_bifrost_wallet.svg";
import IcUnStack from "../../../assets/icon/lockup/ic_lockup.svg";
import { accountAtom } from "../../../store/account";
import { networkAtom } from "../../../store/network";
import { useRecoilValue } from "recoil";
import BfcLiquidStakingTx from "../../../utils/web3/transactions/bfc/BfcLiquidStakingTx";
import { fixBalance } from "../../../utils/web3/fixValues/fixBalance";
import getCoinPrice from "../../../utils/web3/utils/getCoinPrice";
import Web3 from "web3";
import { useParams } from "react-router-dom";

const web3 = new Web3(window.ethereum);
const StatsList = () => {
  //------states------//
  const [totalStaked, setTotalStaked] = useState(0);
  const [totalReward, setTotalReward] = useState(0);
  const [coinPrice, setCoinPrice] = useState(0);
  const [tvl, setTvl] = useState(0);
  const { staking } = useParams();

  //------recoil states------//
  const account = useRecoilValue(accountAtom);
  const network = useRecoilValue(networkAtom);

  //------Tx states------//
  const bfcLiquidStakingTx = new BfcLiquidStakingTx(network);
  //------functions------//
  const getData = async () => {
    const totalStaked = await bfcLiquidStakingTx.totalStaked();
    setTotalStaked(totalStaked);
    const totalReward = await bfcLiquidStakingTx.totalReward();
    setTotalReward(totalReward);
    const coinPrice = await getCoinPrice("BFC");
    setCoinPrice(coinPrice);
    const tvl = web3.utils.toBN(totalStaked * coinPrice).toString();
    setTvl(tvl);
  };

  //------effects------//
  useEffect(() => {
    getData();
  }, [account]);

  const rewardText = "Accumulated \n Rewards";

  return (
    <>
      <StStatsTitle>Stats</StStatsTitle>
      <StWrapper>
        <StStatsItem>
          <StStatsWrapper>
            <StStatsItemText>Total Value Locked</StStatsItemText>
            <StStatsItemDollar>${fixBalance(tvl, network)}</StStatsItemDollar>
          </StStatsWrapper>
          <StStatsWrapper>
            <StStatsItemText>TVL amount</StStatsItemText>
            <StStatsItemText>
              {fixBalance(totalStaked, network)} BFC
            </StStatsItemText>
          </StStatsWrapper>
        </StStatsItem>
        <StStatsItem>
          <StStatsWrapper>
            <StStatsItemText>{rewardText}</StStatsItemText>
            <StStatsItemDollar>
              {fixBalance(totalReward, network)} BFC
            </StStatsItemDollar>
          </StStatsWrapper>
        </StStatsItem>
        <StStatsItem>
          {staking === "stake" ? (
            <StStatsAprBlock>
              <img
                src={IcBifrost}
                alt="bifrost"
                width={20}
                style={{ marginRight: "1rem" }}
              />
              BFC
            </StStatsAprBlock>
          ) : (
            <StStatsAprBlock>
              <img
                src={IcUnStack}
                alt="unStack"
                width={20}
                style={{ marginRight: "1rem" }}
              />
              stBFC
            </StStatsAprBlock>
          )}
          <StStatsWrapper>
            <StStatsItemText>APR</StStatsItemText>
            <StStatsItemDollar>%</StStatsItemDollar>
          </StStatsWrapper>
          <StStatsWrapper>
            <StStatsItemText>Price</StStatsItemText>
            <StStatsItemDollar>1BFC ≈ 1stBFC</StStatsItemDollar>
          </StStatsWrapper>
        </StStatsItem>
      </StWrapper>
    </>
  );
};

export default StatsList;

const StWrapper = styled.div`
  width: 100%;
  margin-top: 2.4rem;
`;
const StStatsTitle = styled.span`
  ${({ theme }) => theme.fonts.Stblock_Heading};
  color: ${({ theme }) => theme.colors.Stblock_Color_Navy};
`;

const StStatsItem = styled.div`
  width: 100%;
  padding: 2rem;

  border-top: 1px solid ${({ theme }) => theme.colors.Stblock_Color_Navy};
  filter: drop-shadow(0 -0.6rem 2rem rgba(0, 0, 0, 0.25));
  border-radius: 1.4rem;
`;

const StStatsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  & + & {
    margin-top: 1.4rem;
  }
`;
const StStatsItemText = styled.span`
  ${({ theme }) => theme.fonts.Stblock_BodyText};
  color: ${({ theme }) => theme.colors.Stblock_Color_Navy};

  white-space: pre-line;
`;

const StStatsItemDollar = styled.span`
  ${({ theme }) => theme.fonts.Stblock_SubText_1};
  color: ${({ theme }) => theme.colors.Stblock_Color_Navy};
`;

const StStatsAprBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  margin-bottom: 1.6rem;

  ${({ theme }) => theme.fonts.Stblock_BodyText};
`;
