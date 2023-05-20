import React from "react";
import styled from "styled-components";
import { addTokenMetamask } from "../../../utils/web3/utils/addTokenMetamask";
import IcMetaMask from "../../../assets/icon/modal/ic_metamask_wallet.svg";
import { useRecoilValue } from "recoil";
import { accountAtom } from "../../../store/account";
import { fixAddress } from "../../../utils/web3/fixValues/fixAddress";

const ModalWalletInfo = () => {
  //------ States ------//

  //------ Recoil ------//
  const account = useRecoilValue(accountAtom);

  //------ Functions ------//
  const handleCopy = () => {
    navigator.clipboard.writeText(account.address);
  };
  const handleViewOnExplorer = () => {};

  return (
    <StWrapper>
      <StWalletImg src={IcMetaMask} alt="metamask" />
      <StTokenInfoWrapper>
        <StAddress>{fixAddress(account.address, 30)}</StAddress>
        <StWalletFunctions>
          <StCopy
            onClick={() => {
              handleCopy();
            }}
          >
            Copy
          </StCopy>
          <StExplorer
            onClick={() => {
              handleViewOnExplorer();
            }}
          >
            View on Explorer
          </StExplorer>
        </StWalletFunctions>
      </StTokenInfoWrapper>
    </StWrapper>
  );
};

export default ModalWalletInfo;

const StWrapper = styled.div`
  display: flex;
  justify-content: left;
  width: 31.7rem;
  height: 8rem;

  border-radius: 2rem;
  border: 1px solid ${({ theme }) => theme.colors.Stblock_Color_Black};
  background-color: ${({ theme }) => theme.colors.Stblock_Color_White};

  & + & {
    margin-top: 2.8rem;
  }
`;

const StWalletImg = styled.img`
  margin-left: 2rem;
  width: 4rem;
`;

const StTokenInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 2rem;
  width: 21.7rem;
`;

const StAddress = styled.div`
  color: ${({ theme }) => theme.colors.Stblock_Color_Dark_Gray};
  font-size: 1.3rem;
  font-weight: 300;
  line-height: 1.6rem;
  margin-top: 2rem;
`;

const StWalletFunctions = styled.div`
  display: flex;
  justify-content: left;
  margin-bottom: 2rem;
`;

const StCopy = styled.div`
  color: ${({ theme }) => theme.colors.Stblock_Color_Black};
  ${({ theme }) => theme.fonts.Stblock_Heading_6};

  cursor: pointer;
`;

const StExplorer = styled(StCopy)`
  margin-left: 1.6rem;

  cursor: pointer;
`;
