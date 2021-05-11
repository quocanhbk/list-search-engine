import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import {
  AuthenticatedTemplate,
  UnauthenticatedTemplate,
  useMsal
} from '@azure/msal-react';
import PropTypes from 'prop-types';
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

const Container = ({account}) => {
  const { themeContext, userContext } = Context.useContainer();
  const { setUser } = userContext;
  setUser(account);
  return (
    <ThemeProvider theme={themeContext.isDark ? theme.dark : theme.light}>
      <StyledApp>
        <MainPage />
      </StyledApp>
    </ThemeProvider>
  );
};
function App() {
  const { instance, accounts, inProgress } = useMsal();
  return (
    <>
      <UnauthenticatedTemplate>
        <button onClick={() => instance.loginPopup()}>Login</button>
      </UnauthenticatedTemplate>
      {inProgress === 'handleRedirect' && <div>LOADING</div>}
      <AuthenticatedTemplate>
        <Context.Provider>
          <Container account={accounts[0]} />
        </Context.Provider>
      </AuthenticatedTemplate>
    </>
  );
}

Container.propTypes = {
  account: PropTypes.object,
}

export default App;
