import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MainPage from './components/pages/MainPage';
import MainPageV2 from './components/pages/MainPageV2';
import theme from './utils/theme';
import ThemeContext from './components/ThemeContext';

const StyledApp = styled.div`
  background: ${(props) => props.theme.color.background.primary};
  height: 100vh;
  overflow: hidden;
  transition: background 0.25s ease-out;
`;
const Container = () => {
  const themeContext = ThemeContext.useContainer();

  return (
    <ThemeProvider theme={themeContext.isDark ? theme.dark : theme.light}>
      <Router>
        <StyledApp>
          <Switch>
            <Route exact path='/'>
              <MainPage />
            </Route>
            <Route path='/v1'>
              <MainPageV2 />
            </Route>
          </Switch>
        </StyledApp>
      </Router>
    </ThemeProvider>
  );
};
function App() {
  return (
    <ThemeContext.Provider>
      <Container />
    </ThemeContext.Provider>
  );
}

export default App;
