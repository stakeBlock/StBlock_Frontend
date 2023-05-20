import React from "react";
import styled from "styled-components";
import { FOOTER_IMG, FOOTER_LI_LIST } from "../../constants/footer.constants";

const Footer = () => {
  return (
    <StWrapper>
      <StFooterUl>
        {FOOTER_LI_LIST.map((list, idx) => (
          <StFooterLi key={idx}>{list}</StFooterLi>
        ))}
      </StFooterUl>
      <StCommunity>
        <StCommunityTitle>Community</StCommunityTitle>
        <StCommunityUl>
          {FOOTER_IMG.map(({ id, src, alt }) => (
            <StCommunityLi key={id}>
              <img src={src} alt={alt} />
            </StCommunityLi>
          ))}
        </StCommunityUl>
      </StCommunity>
    </StWrapper>
  );
};

export default Footer;

const StWrapper = styled.footer`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 28rem;

  background-color: ${({ theme }) => theme.colors.Stblock_Color_Black};
`;

const StFooterUl = styled.ul`
  position: absolute;
  left: 10.5rem;
`;
const StFooterLi = styled.li`
  color: ${({ theme }) => theme.colors.Stblock_Color_Medium_Gray_2};

  font-family: "Pretendard";
  font-style: normal;
  font-weight: 700;
  font-size: 1.2rem;
  line-height: 3rem;
`;
const StCommunity = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 56rem;
`;
const StCommunityTitle = styled.span`
  margin-bottom: 2.4rem;

  font-family: "Pretendard";
  font-style: normal;
  font-weight: 700;
  font-size: 1.2rem;
  line-height: 3rem;
  color: ${({ theme }) => theme.colors.Stblock_Color_Medium_Gray_2};
`;
const StCommunityUl = styled.ul`
  display: flex;
`;
const StCommunityLi = styled.li`
  & + & {
    margin-left: 9rem;
  }
`;
