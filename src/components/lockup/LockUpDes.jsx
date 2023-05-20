import React from "react";
import styled, { css } from "styled-components";
import IcAlert from "../../assets/icon/lockup/ic_alert.svg";
import { useParams } from "react-router-dom";

const LockUpDes = () => {
  const { staking } = useParams();

  return staking === "stake" ? (
    <StWrapper staking={staking}>
      <StDesTitleBlock staking={staking}>
        <StDesTitleText>Stake stBFC and get rewards BLK</StDesTitleText>
      </StDesTitleBlock>
    </StWrapper>
  ) : (
    <StWrapper>
      <StDesTitleBlock>
        <img src={IcAlert} alt="alert" />
        <StDesTitleText>
          Once withdraw transfer is started you will :
        </StDesTitleText>
      </StDesTitleBlock>
      <StDesUl>
        <StDesLi>
          not receive any BLK incentives that you have received.
        </StDesLi>
      </StDesUl>
    </StWrapper>
  );
};

export default LockUpDes;

const StWrapper = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  margin: 1rem 0 2.4rem 0;
  padding: 2rem 5.2rem;

  background-color: #fffbfb;
  box-shadow: inset 0px 4px 10px rgba(95, 64, 64, 0.15);

  color: #e44545;

  ${({ staking }) =>
    staking === "stake" &&
    css`
      background-color: white;
      box-shadow: none;
      color: ${({ theme }) => theme.colors.Stblock_Color_Blue_1};
    `}
`;

const StDesTitleBlock = styled.div`
  display: flex;
  align-items: center;

  margin-bottom: 1rem;

  ${({ staking }) =>
    staking === "stake" &&
    css`
      margin: 0;
    `}
`;

const StDesTitleText = styled.span`
  margin-left: 1rem;

  ${({ theme }) => theme.fonts.Stblock_BodyText};
`;
const StDesUl = styled.ul`
  margin: 0;
  padding-left: 0.8rem;

  list-style: inside;
`;
const StDesLi = styled.li`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 1.1rem;
  line-height: 1.5rem;
`;
