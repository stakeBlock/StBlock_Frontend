import React from "react";
import styled from "styled-components";
import IcError from "../../../assets/icon/toast/ic_error.svg";

const ErrorBox = () => {
  return (
    <StWrapper>
      <img src={IcError} alt="error" />
      <StTextBlock>
        <StTitle>Error</StTitle>
        <StDes>Aborted for unknown reasons. Please try again</StDes>
      </StTextBlock>
    </StWrapper>
  );
};

export default ErrorBox;

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

  color: ${({ theme }) => theme.colors.Stblock_Color_Dark_Gray_2};
`;
const StTitle = styled.span`
  margin-bottom: 0.4rem;

  ${({ theme }) => theme.fonts.Stblock_Heading_3}
`;
const StDes = styled.span`
  ${({ theme }) => theme.fonts.Stblock_SubText}

  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 400;
  font-size: 1.4rem;
  line-height: 1.8rem;

  white-space: pre-line;
`;
