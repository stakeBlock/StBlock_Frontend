import React from "react";
import styled from "styled-components";
import closeModal from "../../../assets/icon/modal/ic_close.svg";
import { useRecoilState } from "recoil";
import { modalAtom } from "../../../store/modal";

const ModalHeader = () => {
  const [modal, setModal] = useRecoilState(modalAtom);
  const handleCloseModal = () => {
    setModal({ ...modal, isAddTokenOpen: false });
  };
  return (
    <>
      <StModalTextWrapper>
        <StModalHeaderH1>Welcome!</StModalHeaderH1>
        <StModalHeaderH2>Add token to your metamask</StModalHeaderH2>
        <StClose
          src={closeModal}
          onClick={() => {
            handleCloseModal();
          }}
        ></StClose>
      </StModalTextWrapper>
    </>
  );
};

export default ModalHeader;

const StModalTextWrapper = styled.div`
  width: 100%;
  margin: 1.6rem 0 2.8rem 0;

  text-align: left;
`;
const StModalHeaderH1 = styled.p`
  color: ${({ theme }) => theme.colors.Stblock_Color_Black};
  ${({ theme }) => theme.fonts.Stblock_Heading}
  margin-bottom: 0.6rem;
`;
const StModalHeaderH2 = styled.span`
  color: ${({ theme }) => theme.colors.Stblock_Color_Blue};
  ${({ theme }) => theme.fonts.Stblock_SubTitle}
`;

const StClose = styled.img`
  position: absolute;
  top: 4.9rem;
  right: 4.9rem;
  width: 1.6rem;
  height: 1.6rem;
  margin: 1.6rem 1.6rem 0 0;
  cursor: pointer;
`;
