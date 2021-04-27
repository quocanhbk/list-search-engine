import React from "react";
import styled from "styled-components";
import CardDashBoard from "./CardDashBoard";
import TableDashboard from "./TableDashboard";
import ChartDashBoard from "./ChartDashBoard";

const StyleContainer = styled.div`
  min-height: 100%;
  background-color: ${(props) => props.theme.color.background.primary};
  color: ${(props) => props.theme.color.text.primary};
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  flex: 1;
`;
const StyleTitle = styled.div`
  border-bottom: 1px solid;
`;

const ListContent = styled.div`
  display: flex;
  padding: 0.5rem;
  gap: 0.5rem;
  flex: 9;
  justify-content: space-around;
  color: ${(props) => props.theme.color.text.secondary};
  width: 100%;
`;

const data = [1, 2, 3];

function ProjectList() {
  return (
    <StyleContainer>
      <StyleTitle>Category Performance</StyleTitle>
      <ListContent>
        {data.map((value) => {
          return (
            <CardDashBoard key={value}>
              <CardDashBoard.Title>M01 Lancaster Lincon</CardDashBoard.Title>
              <TableDashboard />
              <ChartDashBoard />
            </CardDashBoard>
          );
        })}
      </ListContent>
    </StyleContainer>
  );
}

export default ProjectList;
