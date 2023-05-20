import React from "react";
import styled from "styled-components";
import IcPlus from "../../assets/icon/staking/ic_plus.svg";
import ModalLayout from "../Layout/ModalLayout";
import { modalAtom } from "../../store/modal";
import { useRecoilState } from "recoil";

const AddToken = () => {
  const [modal, setModal] = useRecoilState(modalAtom);

  const isAddTokenOpen = modal.isAddTokenOpen;
  console.log("isAddTokenOpen", isAddTokenOpen);

  const openAddTokenModal = () => {
    setModal({ ...modal, isAddTokenOpen: true });
  };
  return (
    <>
      {isAddTokenOpen && <ModalLayout type="addToken" />}
      <StWrapper>
        <StAddToken
          onClick={() => {
            openAddTokenModal();
          }}
        >
          <img src={IcPlus} alt="plus" />
          <StAddTokenText>Add token</StAddTokenText>
        </StAddToken>
      </StWrapper>
    </>
  );
};

export default AddToken;

const StWrapper = styled.div`
  display: flex;
  justify-content: center;

  width: 100%;
  margin-top: 8.1rem;
  margin-bottom: 17.762rem;

  cursor: pointer;
`;

const StAddToken = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 12rem;
  padding: 1rem 0.2rem;
  margin-top: 0.2rem;

  border-bottom: 1px solid black;
`;

const StAddTokenText = styled.span`
  margin-left: 1rem;

  ${({ theme }) => theme.fonts.Stblock_SubText};
`;
