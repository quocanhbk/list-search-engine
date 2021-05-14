import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Logo from '../assets/TT_Logo.png';
import { useMsalAuthentication } from '@azure/msal-react';

const LoginWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #212223;
  height: 100vh;
`;

const Background = styled.img`
  object-fit: scale-down;
  width: 100vw;
`

const LoginButton = styled.button`
  background-color: #A59C87;
  color: #252627;
  font-size: 1.6rem;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  outline: none;
  border: 0;
  cursor: pointer;
  &:hover {
    opacity: 0.94;
  }
`

const Login = ({instance}) => {
  useMsalAuthentication('redirect');
  return(
    <LoginWrapper>
      <Background src={Logo} />
      <LoginButton onClick={() => instance.loginRedirect()}>Login</LoginButton>
    </LoginWrapper>
  )
};

Login.propTypes = {
  instance: PropTypes.object
}

export default Login;