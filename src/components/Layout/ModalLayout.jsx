import React from "react";
import styled from "styled-components";
import WalletModalBox from "../modal/wallet/ModalBox";
import AddTokenModalBox from "../modal/addToken/ModalBox";
import WalletInfoModalBox from "../modal/walletInfo/ModalBox";

const ModalLayout = ({ type }) => {
  const getModal = () => {
    switch (type) {
      case "wallet":
        return <WalletModalBox />;
      case "walletInfo":
        return <WalletInfoModalBox />;
      case "addToken":
        return <AddTokenModalBox />;
      default:
        return "";
    }
  };
  return <StWrapper>{getModal()}</StWrapper>;
};

export default ModalLayout;

const StWrapper = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;

  background: rgba(0, 0, 0, 0.5);
`;
