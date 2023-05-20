import React, { useState } from "react";
import styled, { css } from "styled-components";
import Header from "../components/common/Header";
import MainLayout from "../components/Layout/MainLayout";
import ModalLayout from "../components/Layout/ModalLayout";
import Footer from "../components/common/Footer";
import IcMainLogo from "../assets/icon/home/ic_mainLogo.svg";
import Button from "../components/common/Button";
import Profit from "../assets/image/profit.png";
import Rewards from "../assets/image/rewards.png";
import Icflow from "../assets/icon/home/ic_flow.svg";
import { useRecoilState } from "recoil";
import { modalAtom } from "../store/modal";

const Home = () => {
  const [modal, setModal] = useRecoilState(modalAtom);

  const { isWalletOpen } = modal;

  const handleOpenModal = () => {
    setModal({ ...modal, isWalletOpen: !isWalletOpen });
  };

  return (
    <StWrapper>
      <MainLayout>
        <Header />
        <StHome>
          <StMainTitle>
            <img src={IcMainLogo} alt="mainLogo" style={{ marginBottom: "5.8rem" }} />
            <StMainTitleText>Generate bilateral rewards. </StMainTitleText>
            <StMainTitleText>Stake and liquidify your asset. </StMainTitleText>
          </StMainTitle>
          <StHomeBtnWrapper>
            <StHomeBtn lightgray="true">Learn more</StHomeBtn>
            <StHomeBtn black="true">Launch App</StHomeBtn>
          </StHomeBtnWrapper>
        </StHome>
        <StMiddleBlock>
          <StMainTitleText middle="true">Stake BFC, Get stBFC</StMainTitleText>
          <StMainTitleText middle="true">: Unleash the power of your staked assets</StMainTitleText>
          <StMainTitleText middlesmall="true" margintop="true">
            stBlock provides liquid staking that enable users to make extra pay-offs
          </StMainTitleText>
          <StMainTitleText middlesmall="true">by both of staking and liquidifying the staked asset.</StMainTitleText>
        </StMiddleBlock>
        <StBottomBlock>
          <StMiddleImage>
            <img src={Profit} alt="profit" style={{ paddingBottom: "1rem" }} />
            <img src={Icflow} alt="flow" style={{ margin: "0 5rem" }} />
            <img src={Rewards} alt="reward" />
          </StMiddleImage>
          <StStackBtn black="true">Stake</StStackBtn>
          <StMainTitleText middle="true">Secure your future</StMainTitleText>
          <StMainTitleText middle="true">with invincible leverage staking</StMainTitleText>
          <StStackBtn black="true" margintop="true">
            Move to Invincible Node
          </StStackBtn>
        </StBottomBlock>
        <Footer />
      </MainLayout>
    </StWrapper>
  );
};

export default Home;

const StWrapper = styled.div`
  position: relative;
`;

const StHome = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding-bottom: 10rem;
`;

const StMainTitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin: 32rem 0 5.2rem 0;
`;
const StMainTitleText = styled.span`
  ${({ theme }) => theme.fonts.Stblock_Title_2}

  ${({ middle }) =>
    middle &&
    css`
      ${({ theme }) => theme.fonts.Stblock_SubTitle}
    `}

  ${({ middlesmall }) =>
    middlesmall &&
    css`
      ${({ theme }) => theme.fonts.Stblock_SubText_1}
    `}

  ${({ margintop }) =>
    margintop &&
    css`
      margin-top: 3rem;
    `}
`;

const StHomeBtnWrapper = styled.div`
  display: flex;

  margin-bottom: 5rem;
`;
const StHomeBtn = styled(Button)`
  padding: 1.2rem 2rem;

  ${({ theme }) => theme.fonts.Stblock_SubText_2}

  box-shadow :(0px 0px 10px rgba(0, 0, 0, 0.15));

  & + & {
    margin-left: 1.3rem;
  }
`;

const StMiddleBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  padding: 20rem 0 1.1rem 0;

  background: linear-gradient(0deg, #e1e3ea 49.34%, rgba(225, 227, 234, 0) 90.07%);
`;

const StBottomBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;

  background-color: ${({ theme }) => theme.colors.Stblock_Color_Light_Blue_Gray};
`;

const StMiddleImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  margin: 6rem 0 7rem 0;
`;

const StStackBtn = styled(Button)`
  margin-bottom: 26rem;
  padding: 1.4rem 4rem;

  ${({ theme }) => theme.fonts.Stblock_SubText_2};

  ${({ margintop }) =>
    margintop &&
    css`
      margin-top: 5rem;
    `}
`;
