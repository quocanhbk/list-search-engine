import React from "react";
import styled from "styled-components";
import HeaderTimeLine from "./HeaderTimeLine";
import ContentTimeLine from "./ContentTimeLine";

const Container = styled.div`
  height: 100%;
  color: ${(props) => props.theme.color.text.secondary};
`;

const TimelineViewPage = () => {
  return (
    <Container>
        <HeaderTimeLine/>
        <ContentTimeLine/>
    </Container>
  )
};

export default TimelineViewPage;
