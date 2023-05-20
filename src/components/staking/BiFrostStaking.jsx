import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import IcBifrost from "../../assets/icon/modal/ic_bifrost_wallet.svg";
import IcUnStack from "../../assets/icon/lockup/ic_lockup.svg";
import getBalance from "../../utils/web3/utils/getBalance";
import { accountAtom } from "../../store/account";
import { networkAtom } from "../../store/network";
import { useRecoilState, useRecoilValue } from "recoil";
import { fixBalance } from "../../utils/web3/fixValues/fixBalance";
import { stakeInfoAtom } from "../../store/stakeInfo";
import { useNavigate, useParams } from "react-router-dom";
import StBfcTx from "../../utils/web3/transactions/bfc/stBfcTx";

const BiFrostStaking = () => {
  //------ States ------ //
  const [balance, setBalance] = useState("");
  const [stBfcBalance, setStBfcBalance] = useState("");
  const navigate = useNavigate();
  const { staking } = useParams();

  //------ Recoil States ------ //
  const account = useRecoilValue(accountAtom);
  const network = useRecoilValue(networkAtom);
  const [stakeInfo, setStakeInfo] = useRecoilState(stakeInfoAtom);

  //------ Tx Objects ------//
  const stBfcTx = new StBfcTx(network);

  //------ Functions ------//
  const getData = async () => {
    const balanceValue = await getBalance(account.address);
    setBalance(balanceValue);
    const stBfcBalanceValue = await stBfcTx.balanceOf(account);
    setStBfcBalance(stBfcBalanceValue);
  };
  const handleInputChange = (e) => {
    const value = e.target.value;
    setStakeInfo({ ...stakeInfo, bfcAmount: value });
  };
  const handleNavigate = (staking) => {
    navigate(`/${staking}`);
  };

  //------ Effects ------//
  useEffect(() => {
    getData();
  }, [account]);

  return (
    <StWrapper>
      <StStakingBtnWrapper>
        <StStakingStakeBtn staking={staking} onClick={() => handleNavigate("stake")}>
          Stake
        </StStakingStakeBtn>
        <StStakingUnStakeBtn staking={staking} onClick={() => handleNavigate("unstake")}>
          UnStake
        </StStakingUnStakeBtn>
      </StStakingBtnWrapper>
      <StStakePrice>
        <StStakePriceInput type="number" placeholder="0" onChange={handleInputChange}></StStakePriceInput>
        <StStakePriceUnit>
          {staking === "stake" ? (
            <>
              <StStakePriceUnitText>BFC</StStakePriceUnitText>
              <img src={IcBifrost} alt="bifrost" width={30} />
            </>
          ) : (
            <>
              <StStakePriceUnitText>stBFC</StStakePriceUnitText>
              <img src={IcUnStack} alt="unStack" width={30} />
            </>
          )}
        </StStakePriceUnit>
      </StStakePrice>
      <StBalanceBlock>
        {staking === "stake" ? (
          <StBalanceText>Balance : {fixBalance(balance, network)}</StBalanceText>
        ) : (
          <StBalanceText>Available to unstake : {fixBalance(stBfcBalance, network)}</StBalanceText>
        )}
        <StBalanceMax>MAX</StBalanceMax>
      </StBalanceBlock>
    </StWrapper>
  );
};

export default BiFrostStaking;

const StWrapper = styled.div`
  width: 100%;
  margin-top: 3rem;
  padding: 1.6rem 3.6rem 3rem;

  border-radius: 1rem;
  background-color: ${({ theme }) => theme.colors.Stblock_Color_White};

  text-align: center;
`;

const StStakePrice = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-top: 3rem;
`;
const StStakePriceInput = styled.input`
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 600;
  font-size: 3.4rem;
  line-height: 4.1rem;
  color: ${({ theme }) => theme.colors.Stblock_Color_Blue};
  width: 60%;
  border: none;
  &:focus {
    outline: none;
  }
`;

const StStakePriceUnit = styled.div`
  display: flex;
  align-items: center;
`;
const StStakePriceUnitText = styled.span`
  margin-right: 1rem;

  ${({ theme }) => theme.fonts.Stblock_Heading_1};
  color: ${({ theme }) => theme.colors.Stblock_Color_Medium_Gray};
`;

const StBalanceBlock = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  margin-top: 1rem;
`;
const StBalanceText = styled.div`
  margin-right: 1.6rem;

  ${({ theme }) => theme.fonts.Stblock_Heading_6};
  color: ${({ theme }) => theme.colors.Stblock_Color_Medium_Blue_Gray};
`;
const StBalanceMax = styled.div`
  padding: 0.4rem 0.8rem;

  border: 0.1rem solid ${({ theme }) => theme.colors.Stblock_Color_Medium_Blue_Gray};
  border-radius: 0.4rem;
  ${({ theme }) => theme.fonts.Stblock_Heading_6};
  color: ${({ theme }) => theme.colors.Stblock_Color_Medium_Blue_Gray};
`;

const StStakingBtnWrapper = styled.div`
  width: 13.6rem;
  height: 3rem;
  margin: 0 auto;

  background-color: ${({ theme }) => theme.colors.Stblock_Color_Light_Blue_Gray_3};
  border-radius: 3rem;
`;

const StStakingStakeBtn = styled.button`
  height: 100%;
  margin-right: 0.4rem;
  padding: 0.4rem 1.5rem;

  border: none;
  border-radius: 3rem;
  background-color: ${({ theme }) => theme.colors.Stblock_Color_Black};
  color: ${({ theme }) => theme.colors.Stblock_Color_White};
  ${({ theme }) => theme.fonts.Stblock_Heading_6}

  box-shadow: 0 0.4rem 2.4rem rgba(0, 0, 0, 0.12);
  cursor: pointer;

  ${({ staking }) =>
    staking === "unstake" &&
    css`
      padding: 0.4rem 1rem;

      background-color: transparent;
      box-shadow: none;
      color: ${({ theme }) => theme.colors.Stblock_Color_Black};
    `}
`;
const StStakingUnStakeBtn = styled.button`
  height: 100%;
  padding: 0.4rem 1rem;

  border: none;
  border-radius: 3rem;
  background-color: transparent;
  ${({ theme }) => theme.fonts.Stblock_Heading_6};

  ${({ staking }) =>
    staking === "unstake" &&
    css`
      padding: 0.4rem 1.5rem;

      background-color: ${({ theme }) => theme.colors.Stblock_Color_Black};
      box-shadow: 0 0.4rem 2.4rem rgba(0, 0, 0, 0.12);
      color: ${({ theme }) => theme.colors.Stblock_Color_White};
    `}
`;
