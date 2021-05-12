import React from "react";
import styled, { ThemeProvider } from "styled-components";
import {
  AuthenticatedTemplate,
  UnauthenticatedTemplate,
  useMsal,
} from "@azure/msal-react";
import { ToastContainer, Flip } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import MainPage from "./components/MainPage";
import theme from "./utils/theme";
import Context from "./Context";
import Login from "./components/Login";

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
        <ToastContainer
          autoClose={3000}
          pauseOnFocusLoss={false}
          transition={Flip}
        />
      </StyledApp>
    </ThemeProvider>
  );
};
function App() {
  const { instance, inProgress } = useMsal();
  return (
    <>
      <UnauthenticatedTemplate>
        <Login instance={instance}/>
      </UnauthenticatedTemplate>
      {inProgress === "handleRedirect" && <div>LOADING</div>}
      <AuthenticatedTemplate>
        <Context.Provider>
          <Container />
        </Context.Provider>
      </AuthenticatedTemplate>
    </>
  );
}

export default App;
