import React from 'react';
import styled from 'styled-components';
import {BsArrowLeftShort} from "react-icons/bs";
import { useHistory } from 'react-router';
const AppBarWrapper = styled.div`
  position: sticky;
  display: flex;
  box-sizing: border-box;
  width: 100%;
  z-index: 1;
  color: ${(props) => props.theme.color.fill.primary};
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.32);
  background-color:  #151516;
`

const AppBar = () => {
  const history = useHistory();
  return (
    <AppBarWrapper>
      <BsArrowLeftShort onClick={() => history.goBack()} size={40}/>
    </AppBarWrapper>
  )
};

export default AppBar;