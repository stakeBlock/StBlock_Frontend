import React from "react";
import styled from "styled-components";
import IcStep from "../../../assets/icon/modal/ic_step.svg";
import IcStep2 from "../../../assets/icon/modal/ic_step_2.svg";
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
    <>
      {wallet.img ? (
        <>
          <img src={IcStep2} alt="step2" />
          <StClose src={Icclose} alt="close" onClick={handleCloseModal} />
          <StModalTextWrapper>
            <StModalHeaderH1>Network</StModalHeaderH1>
            <StModalHeaderH2>Next, connect your network</StModalHeaderH2>
          </StModalTextWrapper>
        </>
      ) : (
        <>
          <img src={IcStep} alt="step" />
          <StClose src={Icclose} alt="close" onClick={handleCloseModal} />
          <StModalTextWrapper>
            <StModalHeaderH1>Connect wallet</StModalHeaderH1>
            <StModalHeaderH2>First. please connect your wallet</StModalHeaderH2>
          </StModalTextWrapper>
        </>
      )}
    </>
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
const StModalHeaderH2 = styled.span`
  color: ${({ theme }) => theme.colors.Stblock_Color_Black};
  ${({ theme }) => theme.fonts.Stblock_SubText}
`;
const StClose = styled.img`
  position: absolute;
  top: 3.4rem;
  right: 4.2rem;

  cursor: pointer;
`;
