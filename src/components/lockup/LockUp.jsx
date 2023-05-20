import React from "react";
import styled, { css } from "styled-components";
import IcLockUp from "../../assets/icon/lockup/ic_lockup.svg";
import LockUpDes from "./LockUpDes";
import LockUpPrice from "./LockUpPrice";
import Button from "../common/Button";
import { useNavigate, useParams } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { stakeInfoAtom } from "../../store/stakeInfo";
import StakeStBfcTx from "../../utils/web3/transactions/bfc/StakeStBfcTx";
import { accountAtom } from "../../store/account";
import { networkAtom } from "../../store/network";
import Web3 from "web3";

const web3 = new Web3(window.ethereum);
const LockUp = ({ setPending, setIsProcess }) => {
  const { staking } = useParams();
  const navigate = useNavigate();
  //------ States ------ //

  //------ Recoil States ------ //
  const account = useRecoilValue(accountAtom);
  const network = useRecoilValue(networkAtom);
  const stakeInfo = useRecoilValue(stakeInfoAtom);

  //----- Tx Objects ------//
  const stakeStBfcTx = new StakeStBfcTx(network);

  //------ Functions ------//
  const handleNavigate = (staking) => {
    navigate(`/lockup/${staking}`);
  };
  const stake = async () => {
    const amount = web3.utils.toWei(stakeInfo.stBfcAmount.toString(), "ether");
    setPending(true);
    console.log(amount);
    await stakeStBfcTx.stake(account, amount).then((res) => {
      setPending(false);
      setIsProcess((prev) => !prev);
    });
  };
  const unstake = async () => {
    const amount = web3.utils.toWei(stakeInfo.stBfcAmount.toString(), "ether");
    setPending(true);
    await stakeStBfcTx.unstake(account, amount).then((res) => {
      setPending(false);
      setIsProcess((prev) => !prev);
    });
  };

  return (
    <StWrapper>
      <StLockUpBtnWrapper>
        <StLockUpStakeBtn
          staking={staking}
          onClick={() => handleNavigate("stake")}
        >
          Stake
        </StLockUpStakeBtn>
        <StLockUpUnStakeBtn
          staking={staking}
          onClick={() => handleNavigate("unstake")}
        >
          UnStake
        </StLockUpUnStakeBtn>
      </StLockUpBtnWrapper>
      <StlockUpTop>
        <StlockUpTopBlock>
          <img src={IcLockUp} alt="lockUp" width={36} />
          <StlockUpText>stBFC</StlockUpText>
        </StlockUpTopBlock>
        <StlockUpCommission>Commission -5%</StlockUpCommission>
      </StlockUpTop>
      <LockUpDes />
      <LockUpPrice />
      {staking === "stake" ? (
        <StLockUpBtnBlock>
          <StLockUpBtn
            blue="true"
            onClick={async () => {
              await stake();
            }}
          >
            Stake
          </StLockUpBtn>
        </StLockUpBtnBlock>
      ) : (
        <StLockUpBtnBlock>
          <StLockUpBtn
            navy="true"
            onClick={async () => {
              await unstake();
            }}
          >
            Unstake
          </StLockUpBtn>
        </StLockUpBtnBlock>
      )}
    </StWrapper>
  );
};

export default LockUp;

const StWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 53.4rem;
  padding-bottom: 4rem;

  border-radius: 2.6rem;
  background-color: ${({ theme }) =>
    theme.colors.Stblock_Color_Light_Blue_Gray_3};
`;

const StlockUpTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  padding: 0 3.6rem;
`;
const StlockUpTopBlock = styled.div`
  display: flex;
  align-items: center;
`;

const StlockUpText = styled.span`
  margin-left: 1rem;

  font-family: "Pretendard";
  font-style: normal;
  font-weight: 800;
  font-size: 2.2rem;
  line-height: 2.6rem;
`;
const StlockUpCommission = styled.span`
  ${({ theme }) => theme.fonts.Stblock_BodyText};
`;

const StLockUpBtnBlock = styled.div`
  width: 100%;
  padding: 0 4.1rem;
`;
const StLockUpBtn = styled(Button)`
  width: 100%;
  height: 5.6rem;

  ${({ theme }) => theme.fonts.Stblock_Heading};
`;

const StLockUpBtnWrapper = styled.div`
  width: 13.6rem;
  height: 3rem;
  margin: 4rem 2.4rem auto;

  background-color: ${({ theme }) => theme.colors.Stblock_Color_White};
  border-radius: 3rem;
`;

const StLockUpStakeBtn = styled.button`
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
const StLockUpUnStakeBtn = styled.button`
  height: 100%;
  padding: 0.4rem 1rem;

  border: none;
  border-radius: 3rem;
  background-color: ${({ theme }) => theme.colors.Stblock_Color_White};
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
