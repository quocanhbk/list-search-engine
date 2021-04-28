import React from "react";
import styled from "styled-components";
import HeaderTimeLine from "./HeaderTimeLine";
import ChooseDate from "./ChooseDate";
import ContentTimeLine from './ContentTimeLine';

const Container = styled.div`
  height: 100%;
  padding: 2%;
`;

const TimelineViewPage = () => {
  return (
    <Container>
      <HeaderTimeLine />
      <ChooseDate />
      <ContentTimeLine />
    </Container>
  );
};

export default TimelineViewPage;
