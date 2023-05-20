import React from "react";
import styled from "styled-components";

const PENDING_TEXT =
  "Waiting for the transaction to be broadcasted \n and included in a block";
const PendingBox = () => {
  return (
    <StWrapper>
      <StTextBlock>
        <StTitle>Pending...</StTitle>
        <StDes>{PENDING_TEXT}</StDes>
      </StTextBlock>
    </StWrapper>
  );
};

export default PendingBox;

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

  color: ${({ theme }) => theme.colors.Stblock_Color_Blue};
`;
const StTitle = styled.span`
  margin-bottom: 1rem;

  ${({ theme }) => theme.fonts.Stblock_Heading}
`;
const StDes = styled.span`
  ${({ theme }) => theme.fonts.Stblock_SubText}

  white-space: pre-line;
`;
