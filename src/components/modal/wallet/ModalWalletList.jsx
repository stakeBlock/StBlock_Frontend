import React from "react";
import styled from "styled-components";
import ModalWallet from "./ModalWallet";
import IcMetaMask from "../../../assets/icon/modal/ic_metamask_wallet.svg";
import IcBiport from "../../../assets/icon/modal/ic_biport_wallet.svg";
import IcBifrost from "../../../assets/icon/modal/ic_bifrost_wallet.svg";
import { useRecoilValue } from "recoil";
import { walletAtom } from "../../../store/wallet";
import { NETWORK_BFC } from "../../../constants/network.constants";

const ModalWalletList = ({ isClickWallet, handleCheckWallet }) => {
  const wallet = useRecoilValue(walletAtom);

  return (
    <StWrapper>
      {wallet.img ? (
        <ModalWallet
          src={IcBifrost}
          alt="bifrost"
          text="bifrost"
          isClickWallet={isClickWallet}
          handleCheckWallet={handleCheckWallet}
          onClick={async () => {
            await switchNetwork(NETWORK_BFC.id);
            console.log(NETWORK_BFC);
          }}
        />
      ) : (
        <>
          <ModalWallet src={IcMetaMask} alt="metamask" text="MetaMask" isClickWallet={isClickWallet} handleCheckWallet={handleCheckWallet} />
          <ModalWallet src={IcBiport} alt="biport" text="biport" idx="1" />
        </>
      )}
    </StWrapper>
  );
};

export default ModalWalletList;

const StWrapper = styled.div`
  width: 100%;
  margin-bottom: 2.8rem;
`;
