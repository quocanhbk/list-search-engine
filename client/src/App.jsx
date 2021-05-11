import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import {
  AuthenticatedTemplate,
  UnauthenticatedTemplate,
  useMsal
} from '@azure/msal-react';
import MainPage from './components/MainPage';
import theme from './utils/theme';
import Context from './Context';

const StyledApp = styled.div`
  background: ${(props) => props.theme.color.background.primary};
  height: 100vh;
  overflow: hidden;
  transition: background 0.25s ease-out;
  scroll-behavior: smooth;
`;

const Container = () => {
  const { themeContext } = Context.useContainer();
  return (
    <ThemeProvider theme={themeContext.isDark ? theme.dark : theme.light}>
      <StyledApp>
        <MainPage />
      </StyledApp>
    </ThemeProvider>
  );
};
function App() {
  const { instance, inProgress } = useMsal();
  return (
    <>
      <UnauthenticatedTemplate>
        <button onClick={() => instance.loginPopup()}>Login</button>
      </UnauthenticatedTemplate>
      {inProgress === 'handleRedirect' && <div>LOADING</div>}
      <AuthenticatedTemplate>
        <Context.Provider>
          <Container />
        </Context.Provider>
      </AuthenticatedTemplate>
    </>
  );
}

export default App;
