import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import light from './styles/themes/light';
import GlobalStyle, { Container, MainContainer } from './styles/styles'
import Home from "./pages/Home"
import { MatchsProvider } from "./store";
import { NavBar } from "./components/NavBar/"
import { Matchs } from "./pages/Matchs/index"
function App() {
  
  const [page, setPage] = useState('home');
  
  const changePage = () => {
    if(page === 'home'){
      return <Home />
    }else{
      return <Matchs />
    }
  }

  return (
    <MatchsProvider>
      <ThemeProvider theme={light}>
        <Container>
          <MatchsProvider>
            <GlobalStyle />
            <MainContainer>
              <NavBar menu={setPage} page={page}/>
              {changePage()}
            </MainContainer>
          </MatchsProvider>
        </Container>
      </ThemeProvider>
    </MatchsProvider>
  );
}

export default App;
