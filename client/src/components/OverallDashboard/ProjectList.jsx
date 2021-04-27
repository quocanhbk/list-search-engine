import React from "react";
import styled from "styled-components";
import CardDashBoard from "./CardDashBoard";
import TableDashboard from "./TableDashboard";
import ChartDashBoard from "./ChartDashBoard";
import Typography from "../Typography";

const StyleContainer = styled.div`
  min-height: 100%;
  background-color: #fff;
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
      <StyleTitle>
        <Typography.H5>Category Performance</Typography.H5>
      </StyleTitle>
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
