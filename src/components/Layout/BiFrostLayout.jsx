import React from "react";
import styled from "styled-components";
import BiFrostInfo from "../staking/BiFrostInfo";
import BiFrostStaking from "../staking/BiFrostStaking";
import BiFrostReceive from "../staking/BiFrostReceive";
import Button from "../common/Button";
import BfcLiquidStakingTx from "../../utils/web3/transactions/bfc/BfcLiquidStakingTx";
import { networkAtom } from "../../store/network";
import { useRecoilValue } from "recoil";
import { accountAtom } from "../../store/account";
import { stakeInfoAtom } from "../../store/stakeInfo";
import Web3 from "web3";
import { useParams } from "react-router-dom";

const web3 = new Web3(window.ethereum);
const BiFrostLayout = ({ setIsProcess, setPending, setIsError }) => {
  //------ Recoil States ------ //
  const account = useRecoilValue(accountAtom);
  const network = useRecoilValue(networkAtom);
  const stakeInfo = useRecoilValue(stakeInfoAtom);
  const { staking } = useParams();
  const bfcLiquidStakingTx = new BfcLiquidStakingTx(network);

  return (
    <StWrapper>
      <BiFrostInfo />
      <BiFrostStaking />
      <BiFrostReceive />
      {staking === "stake" ? (
        <STStakeBtn
          onClick={async () => {
            const amount = web3.utils.toWei(stakeInfo.bfcAmount.toString(), "ether");
            setPending(true);
            console.log(amount);
            await bfcLiquidStakingTx
              .stake(account, amount)
              .then((res) => {
                setPending(false);
                setIsProcess((prev) => !prev);
              })
              .catch((err) => setIsError((prev) => !prev));
          }}
          blue="true"
        >
          Stake
        </STStakeBtn>
      ) : (
        <STStakeBtn
          onClick={async () => {
            const amount = web3.utils.toWei(stakeInfo.bfcAmount.toString(), "ether");
            setPending(true);
            console.log(amount);
            await bfcLiquidStakingTx
              .unstake(account, amount)
              .then((res) => {
                setPending(false);
                setIsProcess((prev) => !prev);
              })
              .catch((err) => setIsError((prev) => !prev));
          }}
          navy="true"
        >
          Unstake
        </STStakeBtn>
      )}
    </StWrapper>
  );
};

export default BiFrostLayout;

const StWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 51.2rem;
  padding: 2rem 4rem 4rem;
  margin-top: 3.4rem;

  border-radius: 2.6rem;
  background-color: ${({ theme }) => theme.colors.Stblock_Color_Light_Blue_Gray_3};
`;

const STStakeBtn = styled(Button)`
  width: 100%;
  padding: 2rem 18.3rem;

  ${({ theme }) => theme.fonts.Stblock_Heading};
`;
