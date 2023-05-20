import React from "react";
import styled from "styled-components";
import IcToast from "../../../assets/icon/toast/ic_toast.svg";
import { useParams } from "react-router-dom";

const TOAST_MESSAGE =
  "Transaction is successfully executed. \n Check perks periodically in your wallet";

const ModalBox = () => {
  const { staking } = useParams();

  return (
    <StWrapper>
      <img src={IcToast} alt="toast" />
      <StTextBlock>
        {staking === "stake" ? (
          <StTitle>Successfully BFC staked</StTitle>
        ) : (
          <StTitle>Successfully stBFC Unstaked</StTitle>
        )}
        <StDes>{TOAST_MESSAGE}</StDes>
      </StTextBlock>
    </StWrapper>
  );
};

export default ModalBox;

const StWrapper = styled.div`
  position: absolute;
  left: 3.2rem;
  bottom: 3.2rem;
  display: flex;
  align-items: center;

  padding: 2rem 3rem;

  border-radius: 1.4rem;
  background-color: ${({ theme }) => theme.colors.Stblock_Color_White};
  box-shadow: 0 0.4rem 2.4rem rgba(0, 0, 0, 0.12);

  z-index: 10;
`;

const StTextBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  width: 100%;
  margin-left: 2.2rem;
`;
const StTitle = styled.span`
  margin-bottom: 1rem;

  ${({ theme }) => theme.fonts.Stblock_Heading}
  color : ${({ theme }) => theme.colors.Stblock_Color_Blue};
`;
const StDes = styled.span`
  ${({ theme }) => theme.fonts.Stblock_SubText}
  color : ${({ theme }) => theme.colors.Stblock_Color_Navy};

  white-space: pre-line;
`;
