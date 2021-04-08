import React, { useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import light from './styles/themes/light';
import GlobalStyle, { Container } from './styles/styles'
import Home from "./pages/Home"
import { MatchsProvider } from "./store";

function App() {
  return (
    <MatchsProvider>
      <ThemeProvider theme={light}>
        <Container>
          <MatchsProvider>
            <GlobalStyle />
            <Home />
          </MatchsProvider>
        </Container>
      </ThemeProvider>
    </MatchsProvider>
  );
}

export default App;
