import React from "react";
import styled from "styled-components";
import ProjectList from "./ProjectList";



const Container = styled.div`
  min-height: 100vh;
  display: flex;
  background-color: red;
  color: ${(props) => props.theme.color.text.secondary};
`;

const OverallDashboardPage = () => {
  return (
    <Container>
      <ProjectList/>
    </Container>
  );
};

export default OverallDashboardPage;
