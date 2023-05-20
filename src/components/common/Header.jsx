import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import IcStBlock from "../../assets/icon/ic_stBlock.svg";
import IcWallet from "../../assets/icon/ic_wallet.svg";

import Button from "./Button";
import { NAV_TEXT } from "../../constants/header.constants";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";
import { accountAtom } from "../../store/account";
import { networkAtom } from "../../store/network";
import { fixBalance } from "../../utils/web3/fixValues/fixBalance";

import { NETWORK_DEFAULT } from "../../constants/network.constants";

import { walletAtom } from "../../store/wallet";
import { WALLET_METAMASK } from "../../constants/wallet.constants";
import { modalAtom } from "../../store/modal";
import ModalLayout from "../Layout/ModalLayout";
import { connectionAtom } from "../../store/connection";
import getAddress from "../../utils/web3/utils/getAddress";
import getBalance from "../../utils/web3/utils/getBalance";

const Header = () => {
  //------ States ------ //

  const [isConnect, setIsConnect] = useState(false);
  const [modal, setModal] = useRecoilState(modalAtom);
  const [account, setAccount] = useRecoilState(accountAtom);
  const network = useRecoilValue(networkAtom);
  const wallet = useRecoilValue(walletAtom);
  const navigate = useNavigate();
  const { state } = useLocation();

  const handleOpenWalletModal = () => {
    setModal({ ...modal, isWalletOpen: true });
  };

  const handleOpenWalletInfoModal = () => {
    setModal({ ...modal, isWalletInfoOpen: true });
  };

  const fetchAccount = async () => {
    const _address = await getAddress();
    const _balance = await getBalance(_address);
    console.log("set account: ", _address, _balance);
    setAccount({ ...account, address: _address, balance: _balance });
  };
  useEffect(() => {
    fetchAccount();
  }, [network]);

  useEffect(() => {
    if (network != NETWORK_DEFAULT) {
      //계정 & 네트워크 연결되어 있는 경우
      setIsConnect(true); //connect 상태로 변경
    } else {
      //계정 | 네트워크 연결되어 있지 않은 경우
      setIsConnect(false); //disconnect 상태로 변경
    }
  }, [account, network]);

  const handleNavigate = (url, name) => {
    navigate(`/${url}`, { state: name });
  };

  console.log(account, network);

  console.log(NAV_TEXT);
  return (
    <>
      {modal.isWalletOpen && <ModalLayout type="wallet" />}
      {modal.isWalletInfoOpen && <ModalLayout type="walletInfo" />}
      <StWrapper>
        <StNav>
          <Link to="/">
            <img src={IcStBlock} alt="logo" />
          </Link>
          <StNavUl>
            {NAV_TEXT.map(({ name, url }, idx) => (
              <StNavLi key={idx} onClick={() => handleNavigate(url, name)} className={state === name ? "active" : "disactive"}>
                {name}
              </StNavLi>
            ))}
          </StNavUl>
        </StNav>
        <StRightBlock>
          <Link to="/stake">
            <StStakingBtn
              type="button"
              isConnect={isConnect}
              disabled={!isConnect}
              onClick={() => {
                console.log("click staking btn");
              }}
            >
              Staking
            </StStakingBtn>
          </Link>
          <StConnectWalletBtn type="button" isConnect={isConnect} onClick={handleOpenWalletModal}>
            <StWalletImg src={IcWallet} alt="wallet" />
            Connect wallet
          </StConnectWalletBtn>

          <StAccountBtn type="button" isConnect={isConnect} onClick={handleOpenWalletInfoModal}>
            {fixBalance(account.balance, network)}
            <StWalletLogoImg src={wallet.img} alt="wallet" />
          </StAccountBtn>

          <StNetworkBtn type="button" isConnect={isConnect}>
            <StNetworkLogoImg src={network.img} alt="network" />
            {network.name}
          </StNetworkBtn>
        </StRightBlock>
      </StWrapper>
    </>
  );
};

export default Header;

const StWrapper = styled.main`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  height: 6.8rem;
`;

const StNav = styled.nav`
  display: flex;
  align-items: center;

  width: 53.1rem;
`;

const StNavUl = styled.ul`
  display: flex;

  width: 31.2rem;
  padding: 4rem 1rem 2rem 1rem;
`;
const StNavLi = styled.li`
  ${({ theme }) => theme.fonts.Stblock_BodyText}

  &+& {
    margin-left: 3rem;
  }

  &.active {
    color: ${({ theme }) => theme.colors.Stblock_Color_Black};
  }

  &.disactive {
    color: ${({ theme }) => theme.colors.Stblock_Color_Medium_Gray_2};
  }
  cursor: pointer;
`;

const StWalletImg = styled.img`
  margin-right: 1rem;
`;

const StNetworkLogoImg = styled.img`
  width: 2rem;
  height: 2rem;
  margin-right: 1rem;
`;

const StWalletLogoImg = styled.img``;

const StRightBlock = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  padding: 1.4rem 3rem 0.6rem 3rem;
`;

const StRightElement = styled(Button)`
  height: 4.6rem;
  padding: 0.8rem 1.8rem;
  margin-right: 2rem;
  box-shadow: 0 0 1rem rgba(0, 0, 0, 0.15);
`;

const StStakingBtn = styled(StRightElement)`
  background-color: ${(props) =>
    props.isConnect ? ({ theme }) => theme.colors.Stblock_Color_Blue : ({ theme }) => theme.colors.Stblock_Color_Medium_Blue_Gray};
  ${({ theme }) => theme.fonts.Stblock_BodyText};
`;

const StConnectWalletBtn = styled(StRightElement)`
  display: ${(props) => (!props.isConnect ? "flex" : "none")};
  ${({ theme }) => theme.fonts.Stblock_BodyText};
`;

const StAccountBtn = styled(StRightElement)`
  display: ${(props) => (props.isConnect ? "flex" : "none")};
  gap: 0.8rem;
  background-color: ${({ theme }) => theme.colors.Stblock_Color_Dark_Gray};
  ${({ theme }) => theme.fonts.Stblock_BodyText};
`;

const StNetworkBtn = styled(StRightElement)`
  display: ${(props) => (props.isConnect ? "flex" : "none")};
  background-color: ${({ theme }) => theme.colors.Stblock_Color_Dark_Gray};
  ${({ theme }) => theme.fonts.Stblock_BodyText};
`;
