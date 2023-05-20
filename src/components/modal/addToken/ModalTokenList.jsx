import React, { useEffect, useState } from "react";
import styled from "styled-components";
import stBFCIcon from "../../../assets/icon/modal/ic_stBFC.svg";
import blkIcon from "../../../assets/icon/modal/ic_blk.svg";
import ModalToken from "./ModalToken";
import { useRecoilState, useRecoilValue } from "recoil";
import { accountAtom } from "../../../store/account";
import { networkAtom } from "../../../store/network";
import StBfcTx from "../../../utils/web3/transactions/bfc/stBfcTx";
import { fixBalance } from "../../../utils/web3/fixValues/fixBalance";
import BlkTx from "../../../utils/web3/transactions/bfc/BlkTx";
import { isTokenAdded } from "../../../utils/web3/utils/isTokenAdded";

const ModalTokenList = () => {
  //------ States ------ //
  const [tokenInfos, setTokenInfos] = useState([
    {
      name: "stBFC",
      description: "Liquid Staking Token",
      icon: stBFCIcon,
      balance: "0.0000",
      isAdded: false,
      address: "0x8CEc1c99c41d5e3a39445c187C3C48d2a20EF934",
      decimals: 18,
    },
    {
      name: "BLK",
      description: "Utility Token",
      icon: blkIcon,
      balance: "0.0000",
      isAdded: false,
      address: "0xb5672Dc8BBf454a75940aC4dA5240E98503d3636",
      decimals: 18,
    },
  ]);

  //------ Recoil values ------ //
  const account = useRecoilValue(accountAtom);
  const network = useRecoilValue(networkAtom);

  //------ Txs ------ //
  const stBfcTx = new StBfcTx(network);
  const blkTx = new BlkTx(network);

  const getData = async () => {
    // get stBFC balance
    const stBfcBalance = await stBfcTx.balanceOf(account);
    // get BLK balance
    const blkBalance = await blkTx.balanceOf(account);
    setTokenInfos((prevTokenInfos) => {
      const updatedTokenInfos = prevTokenInfos.map((token) => (token.name === "stBFC" ? { ...token, balance: fixBalance(stBfcBalance, network) } : token));
      return updatedTokenInfos;
    });
    setTokenInfos((prevTokenInfos) => {
      const updatedTokenInfos = prevTokenInfos.map((token) => (token.name === "BLK" ? { ...token, balance: fixBalance(blkBalance, network) } : token));
      return updatedTokenInfos;
    });
  };

  //------ Effects ------ //
  useEffect(() => {
    getData();
  }, []);

  return (
    <StWrapper>
      {tokenInfos.map((token, index) => (
        <ModalToken tokenInfo={token}></ModalToken>
      ))}
    </StWrapper>
  );
};

export default ModalTokenList;

const StWrapper = styled.div`
  width: 100%;
  margin-bottom: 2.8rem;
`;
