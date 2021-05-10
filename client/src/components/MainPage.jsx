import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import SideBar from './SideBar';
import styled from 'styled-components';
import pageList from '../pageList';
import List from './SearchEngine/List';
import { Router } from '@reach/router';
const PageContainer = styled.div`
  display: flex;
  height: 100%;
`;

const BodyContainer = styled.div`
  flex: 18;
  height: 100%;
  & .router {
    height: 100%;
  }
`;
const Desktop = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 768 });
  return isDesktop ? children : null;
};

const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  return isMobile ? children : null;
};

const MainPage = () => {
  const [open, setSideBar] = useState(false);
  const handleToggleSideBar = () => {
    setSideBar(!open);
  }
  return (
    <>
      <Desktop>
        <PageContainer>
          <SideBar />
          <BodyContainer className="abc">
            <Router className="router">
              {pageList.map((page) => {
                return React.cloneElement(page.comp, {
                  key: page.text,
                  path: page.path,
                });
              })}
            </Router>
          </BodyContainer>
        </PageContainer>
      </Desktop>
      <Mobile>
        <SideBar open={open} mobile={true} setSideBar={setSideBar}/>
        <List isMobile={true} handleToggleSideBar={handleToggleSideBar}/>
      </Mobile>
    </>
  );
};

export default MainPage;
