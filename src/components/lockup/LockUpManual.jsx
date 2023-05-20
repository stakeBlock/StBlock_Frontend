import React from "react";
import styled from "styled-components";
import ICManual1 from "../../assets/icon/lockup/ic_manual_1.svg";
import ICManual2 from "../../assets/icon/lockup/ic_manual_2.svg";
import ICManual3 from "../../assets/icon/lockup/ic_manual_3.svg";

const LockUpManual = () => {
  return (
    <StWrapper>
      <StManualText>How it works</StManualText>
      <StImageBlock>
        <StImage src={ICManual1} alt="ICManual1" />
        <StImage src={ICManual2} alt="ICManual2" />
        <StImage src={ICManual3} alt="ICManual3" />
      </StImageBlock>
    </StWrapper>
  );
};

export default LockUpManual;

const StWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const StManualText = styled.span`
  ${({ theme }) => theme.fonts.Stblock_Heading};
  color: ${({ theme }) => theme.colors.Stblock_Color_Navy};
`;

const StImageBlock = styled.div`
  display: flex;
`;

const StImage = styled.img`
  & + & {
    margin-left: 10rem;
  }
`;
