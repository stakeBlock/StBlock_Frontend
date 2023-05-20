import React, { useState } from "react";
import styled, { css } from "styled-components";
import ModalHeader from "./ModalHeader";
import Button from "../../common/Button";
import { WALLET_METAMASK } from "../../../constants/wallet.constants";
import { useRecoilState } from "recoil";
import { walletAtom } from "../../../store/wallet";
import { networkAtom } from "../../../store/network";
import { NETWORK_BFC } from "../../../constants/network.constants";
import { accountAtom } from "../../../store/account";
import getAddress from "../../../utils/web3/utils/getAddress";
import getBalance from "../../../utils/web3/utils/getBalance";
import { modalAtom } from "../../../store/modal";
import ModalDisconnectButton from "./ModalDisconnectButton";
import ModalWalletInfo from "./ModalWalletInfo";

const ModalBox = () => {
  const [isActive, setIsActive] = useState(true);
  const [isClickWallet, setIsClickWallet] = useState(false);
  const [wallet, setWallet] = useRecoilState(walletAtom);
  const [network, setNetwork] = useRecoilState(networkAtom);
  const [account, setAccount] = useRecoilState(accountAtom);
  const [modalState, setModalState] = useRecoilState(modalAtom);

  return (
    <StWrapper>
      <ModalHeader />
      <ModalWalletInfo />
      <ModalDisconnectButton />
    </StWrapper>
  );
};

export default ModalBox;

const StWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: 37rem;
  padding: 3.4rem 4.2rem;

  border-radius: 1.6rem;
  background-color: ${({ theme }) => theme.colors.Stblock_Color_Light_Blue_Gray_3};

  box-shadow: 0 0.4rem 2.4rem rgba(0, 0, 0, 0.12);
`;

const StWalletBtn = styled(Button)`
  width: 100%;
  padding: 1rem 1.6rem;

  border-radius: 0.8rem;
  background-color: ${({ theme }) => theme.colors.Stblock_Color_Medium_Gray};

  ${({ theme }) => theme.fonts.Stblock_SubText_2};

  ${({ isClickWallet }) =>
    isClickWallet &&
    css`
      background-color: ${({ theme }) => theme.colors.Stblock_Color_Black};
    `}
`;
