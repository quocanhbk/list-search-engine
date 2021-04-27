import React from "react";
import styled from "styled-components";
import ChartDashBoard from "./ChartDashBoard";
import TableDashboard from "./TableDashboard";

const Container = styled.div`
  background-color: ${props => props.theme.color.background.secondary};
  box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%),
    0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);
  border-radius: 0.5rem;
  border: 1px solid ${props => props.theme.color.border.primary};
  flex: 1;
  padding: 0.5rem;

  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;
const Title = styled.h3`
  font-weight: 500;
  border-bottom: 1px solid ${props => props.theme.color.border.primary};
  padding-bottom: 0.5rem;
`
const CardDashBoard = (props) => {
  return (
      <Container {...props}>
          <Title>M01 Lancaster Lincoln</Title>
          <TableDashboard />
          <ChartDashBoard />
      </Container>);
};

export default CardDashBoard;
