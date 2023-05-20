import React from "react";
import styled from "styled-components";
import grayLine from "../../../assets/figure/fg_gray_short_line.svg";
import { addTokenMetamask } from "../../../utils/web3/utils/addTokenMetamask";

const ModalToken = ({ tokenInfo }) => {
  console.log(tokenInfo);

  return (
    <StWrapper>
      <img src={tokenInfo.icon} alt="metamask" />
      <StTokenInfoWrapper>
        <StTokenName>{tokenInfo.name}</StTokenName>
        <StTokenDescription>{tokenInfo.description}</StTokenDescription>
      </StTokenInfoWrapper>
      <img src={grayLine} alt="grayLine" />
      <StTokenBalanceWrapper>
        <StTokenBalanceText>Balance</StTokenBalanceText>
        <StTokenBalance>
          {tokenInfo.balance} <span>{tokenInfo.name}</span>
        </StTokenBalance>
      </StTokenBalanceWrapper>
      {tokenInfo.isAdded ? (
        <StAddedButton>Added</StAddedButton>
      ) : (
        <StAddButton
          onClick={() => {
            addTokenMetamask(tokenInfo.address, tokenInfo.name, tokenInfo.decimals);
          }}
        >
          Add +
        </StAddButton>
      )}
    </StWrapper>
  );
};

export default ModalToken;

const StWrapper = styled.div`
  display: flex;
  align-items: center;

  padding: 1rem 4rem;

  border-radius: 1rem;
  border: 1px solid ${({ theme }) => theme.colors.Stblock_Color_Light_Blue_Gray};
  background-color: ${({ theme }) => theme.colors.Stblock_Color_White};

  & + & {
    margin-top: 2.8rem;
  }
`;

const StTokenInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  align-items: flex-start;

  margin-left: 2rem;
  width: 15.3rem;
`;

const StTokenName = styled.span`
  margin-bottom: 0.4rem;

  ${({ theme }) => theme.fonts.Stblock_SubText_1};
`;

const StTokenDescription = styled.span`
  ${({ theme }) => theme.fonts.Stblock_BodyText};
`;

const StTokenBalanceWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 2.6rem;
  width: 22rem;
`;

const StTokenBalanceText = styled.span`
  margin-bottom: 0.4rem;

  ${({ theme }) => theme.fonts.Stblock_BodyText};
`;

const StTokenBalance = styled.span`
  text-align: right;
  ${({ theme }) => theme.fonts.Stblock_BodyText};

  span {
    text-align: left;
    display: inline-block;
    width: 5rem;
    ${({ theme }) => theme.fonts.Stblock_SubText_2};
  }
`;

const StAddButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  margin-left: 6rem;
  width: 8.3rem;
  height: 4.5rem;
  padding: 0.4rem 0.8rem;

  border-radius: 1.2rem;
  border: none;

  color: ${({ theme }) => theme.colors.Stblock_Color_White};
  background-color: ${({ theme }) => theme.colors.Stblock_Color_Blue};

  ${({ theme }) => theme.fonts.Stblock_SubText_2};
`;

const StAddedButton = styled(StAddButton)`
  background-color: ${({ theme }) => theme.colors.Stblock_Color_Medium_Gray_2};
  color: ${({ theme }) => theme.colors.Stblock_Color_Medium_Gray};
`;
