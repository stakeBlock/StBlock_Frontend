import React from "react";
import styled from "styled-components";
import background from "../../assets/image/background.png";

const MainLayout = ({ children }) => {
  return <StWrapper>{children}</StWrapper>;
};

export default MainLayout;

const StWrapper = styled.main`
  background-color: ${({ theme }) =>
    theme.colors.Stblock_Color_Light_Blue_Gray};

  background-image: url(${background});
`;
