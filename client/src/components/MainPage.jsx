/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import SideBar from "./SideBar";
import styled from "styled-components";
import List from "./SearchEngine/List";
import { BrowserRouter, Route, Switch, useParams } from "react-router-dom";
import DetailTaskMobile from "./DetailTaskMobile";
import SearchEnginePage from "./SearchEngine";
import NoSelectionIndicator from "./SearchEngine/NoSelectionIndicator";
const PageContainer = styled.div`
  display: flex;
  height: 100%;
`;

const Desktop = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 768 });
  return isDesktop ? children : null;
};

const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  return isMobile ? children : null;
};

const MobileSearchPage = () => {
  const [open, setSideBar] = useState(false);
  const handleToggleSideBar = () => {
    setSideBar(!open);
  };
  const handleSelectCardMobile = (id, history, project) => {
    history.push(`/${id}?project=${project}`);
  };

  return (
    <>
      <SideBar open={open} mobile={true} setSideBar={setSideBar} />
      <List
        isMobile={true}
        handleToggleSideBar={handleToggleSideBar}
        handleSelectCard={handleSelectCardMobile}
      />
    </>
  );
};

const DesktopSearchPage = () => {
  const handleSelectionCardDesktop = (id, history, project) => {
    history.push(`/${id}?project=${project}`);
  };
  const { itemId } = useParams();
  return (
    <>
      <SideBar />
      <List selectedId={itemId} handleSelectCard={handleSelectionCardDesktop} />
    </>
  );
};

// Cant fucking scroll with the shitass reach-router lib, have to use react router dom;
const MainPage = () => {
  return (
    <>
      <Desktop>
        <BrowserRouter>
          <PageContainer>
            <DesktopSearchPage />
            <Switch>
              <Route exact path="/">
                <NoSelectionIndicator />
              </Route>
              <Route path={`/:itemId`}>
                <SearchEnginePage />
              </Route>
            </Switch>
          </PageContainer>
        </BrowserRouter>
      </Desktop>
      <Mobile>
        <BrowserRouter>
          <Switch>
            <Route exact path="/">
              <MobileSearchPage />
            </Route>
            <Route>
              <DetailTaskMobile path="/:itemId" />
            </Route>
          </Switch>
        </BrowserRouter>
      </Mobile>
    </>
  );
};

export default MainPage;
