import React from "react";
import styled from "styled-components";
import Icclose from "../../../assets/icon/modal/ic_close.svg";
import { useRecoilState, useRecoilValue } from "recoil";
import { modalAtom } from "../../../store/modal";
import { walletAtom } from "../../../store/wallet";

const ModalHeader = () => {
  const [modal, setModal] = useRecoilState(modalAtom);
  const wallet = useRecoilValue(walletAtom);

  const isWalletOpen = modal.isWalletOpen;
  console.log(isWalletOpen);

  const handleCloseModal = () => {
    setModal({ ...modal, isWalletOpen: !isWalletOpen });
  };
  return (
    <StModalTextWrapper>
      <StModalHeaderH1>Wallet</StModalHeaderH1>
      <StCloseButton
        src={Icclose}
        onClick={() => {
          setModal({ ...modal, isWalletInfoOpen: false });
        }}
      ></StCloseButton>
    </StModalTextWrapper>
  );
};

export default ModalHeader;

const StModalTextWrapper = styled.div`
  width: 100%;
  margin: 1.6rem 0 2.8rem 0;

  text-align: center;
`;
const StModalHeaderH1 = styled.p`
  color: ${({ theme }) => theme.colors.Stblock_Color_Black};
  ${({ theme }) => theme.fonts.Stblock_SubText_2}
`;

const StCloseButton = styled.img`
  width: 1.6rem;
  height: 1.6rem;
  position: absolute;
  top: 1.6rem;
  right: 1.6rem;
  cursor: pointer;
  z-index: 10;
  &:hover {
    transform: scale(1.1);
  }
`;
