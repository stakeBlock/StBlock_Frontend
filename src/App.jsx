import React from "react";
import GlobalStyle from "./styles/globalStyle";
import Router from "./components/common/Router";
import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router />
    </ThemeProvider>
  );
};

export default App;
