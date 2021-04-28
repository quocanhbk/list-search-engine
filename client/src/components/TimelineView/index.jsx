import React from "react";
import styled from "styled-components";
import HeaderTimeLine from "./HeaderTimeLine";
import ChooseDate from "./ChooseDate";

const Container = styled.div`
  height: 100%;
  padding: 2%;
`;

const TimelineViewPage = () => {
  return (
    <Container>
      <HeaderTimeLine />
      <ChooseDate />
    </Container>
  );
};

export default TimelineViewPage;
