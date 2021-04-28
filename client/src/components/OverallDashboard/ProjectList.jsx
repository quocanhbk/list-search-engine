import React from "react";
import styled from "styled-components";
import CardDashBoard from "./CardDashBoard";
import Typography from '../Typography'

const StyleContainer = styled.div`
  height: 100%;
  background-color: ${(props) => props.theme.color.background.primary};
  //background: red;
  color: ${(props) => props.theme.color.text.primary};
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 100%;
`;
const StyleTitle = styled.div`
  border-bottom: 1px solid ${props => props.theme.color.border.primary};
  padding: 0.5rem 0;
`;

const ListContent = styled.div`
  display: flex;
  gap: 0.5rem;
  flex: 1;
  justify-content: space-around;
  width: 100%;
  overflow: hidden;
`;

const data = [1, 2, 3];

function ProjectList() {
  return (
    <StyleContainer>

      <StyleTitle>
        <Typography.H5>Overall Dashboard</Typography.H5>
      </StyleTitle>

      <ListContent className="list">
        {data.map((value) => {
          return (
            <CardDashBoard key={value}/>
          );
        })}
      </ListContent>
    </StyleContainer>
  );
}

export default ProjectList;
