import React, { useEffect, useState } from "react";

import styled, { css } from "styled-components";
import StBfcTx from "../../utils/web3/transactions/bfc/stBfcTx";

import getBalance from "../..//utils/web3/utils/getBalance";
import { useRecoilValue } from "recoil";
import { accountAtom } from "../../store/account";
import { networkAtom } from "../../store/network";
import { fixBalance } from "../../utils/web3/fixValues/fixBalance";
import { useParams } from "react-router-dom";
import IcAlert from "../../assets/icon/lockup/ic_alert.svg";
import { LOCKUP_TEXT } from "../../constants/lockup.constants";

const BiFrostInfo = () => {
  //------ States ------//
  const [balance, setBalance] = useState(0);
  const [stakedAmount, setStakedAmount] = useState(0);
  const { staking } = useParams();

  // ------ Recoil States ------ //
  const account = useRecoilValue(accountAtom);
  const network = useRecoilValue(networkAtom);

  //------ Tx objects ------//
  const stBfcTx = new StBfcTx(network);

  //------ Functions ------//
  const getData = async () => {
    console.log(account);
    const balance = await getBalance(account.address);
    setBalance(balance);
    const stBfcBalance = await stBfcTx.balanceOf(account);
    setStakedAmount(stBfcBalance);
    console.log(balance, stBfcBalance);
  };

  //------ Effects ------//
  useEffect(() => {
    getData();
  }, [account]);

  return (
    <>
      <StBiFrostTitle>Bifrost</StBiFrostTitle>
      {staking === "stake" ? (
        <StBiFrostStackInfo>
          <StBiFrostStackInfoBlock>
            <StBiFrostStackLeftText>Available to stake</StBiFrostStackLeftText>
            <StBiFrostStackRightText>{fixBalance(balance, network)} BFC</StBiFrostStackRightText>
          </StBiFrostStackInfoBlock>
          <StBiFrostStackInfoBlock>
            <StBiFrostStackLeftText>Staked amount</StBiFrostStackLeftText>
            <StBiFrostStackRightText>{fixBalance(stakedAmount, network)} BFC</StBiFrostStackRightText>
          </StBiFrostStackInfoBlock>
        </StBiFrostStackInfo>
      ) : (
        <StBiFrostStackInfo>
          <StBiFrostStackInfoBlock unstack="true">
            <StBiFrostStackLeftText unstack="true">
              <img src={IcAlert} alt="alert" style={{ marginRight: "1rem" }} />
              Once the unbonding period begins you will:
            </StBiFrostStackLeftText>
            <StDesUl>
              {LOCKUP_TEXT.map((lock, idx) => (
                <StDesLi key={idx}>{lock}</StDesLi>
              ))}
            </StDesUl>
          </StBiFrostStackInfoBlock>
        </StBiFrostStackInfo>
      )}
    </>
  );
};

export default BiFrostInfo;

const StBiFrostTitle = styled.p`
  ${({ theme }) => theme.fonts.Stblock_Heading}
`;

const StBiFrostStackInfo = styled.div`
  width: 100%;
  margin-top: 2rem;
`;
const StBiFrostStackInfoBlock = styled.div`
  display: flex;
  justify-content: space-between;

  width: 100%;

  & + & {
    margin-top: 1rem;
  }
  ${({ unstack }) =>
    unstack &&
    css`
      display: flex;
      flex-direction: column;

      color: #e44545;
    `}
`;

const StBiFrostStackLeftText = styled.span`
  color: ${({ theme }) => theme.colors.Stblock_Color_Medium_Blue_Gray};
  ${({ theme }) => theme.fonts.Stblock_SubText};

  ${({ unstack }) =>
    unstack &&
    css`
      display: flex;
      align-items: center;

      margin-bottom: 1rem;

      ${({ theme }) => theme.fonts.Stblock_BodyText};
      color: #e44545;
    `}
`;
const StBiFrostStackRightText = styled.span`
  color: ${({ theme }) => theme.colors.Stblock_Color_Medium_Gray};
  ${({ theme }) => theme.fonts.Stblock_SubText};
`;

const StDesUl = styled.ul`
  margin: 0;
  padding-left: 0.8rem;

  list-style: inside;
`;
const StDesLi = styled.li`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 1.1rem;
  line-height: 1.5rem;
`;
