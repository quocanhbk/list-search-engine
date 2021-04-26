import React from "react";
import styled from "styled-components";
import CardDashBoard from "./CardDashBoard";
import TableDashboard from "./TableDashboard";
import ChartDashBoard from './ChartDashBoard';

const HeaderDashBoard = styled.div`
  color: #a59c87;
  font-family: Roboto;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 28px;
  letter-spacing: 0em;
  text-align: left;
  border-bottom: 1px solid #a59c87;
  padding: 1.5%;
`;
const Container = styled.div`
  max-width: 95%;
  margin: auto;
  height: 100%;
  color: ${(props) => props.theme.color.text.secondary};
`;
const Content = styled.div`
  height: 97%;
  overflow-y: scroll;
  margin-top: 2%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  color: ${(props) => props.theme.color.text.secondary};
`;

const data = [1, 2, 3, 4, 5];
const OverallDashboardPage = () => {
  return (
    <Container>
      <HeaderDashBoard>Dashboard Overall</HeaderDashBoard>
      <Content>
        {data.map((value) => {
          return (
            <CardDashBoard key={value}>
              <CardDashBoard.Title>M01 Lancaster Lincon</CardDashBoard.Title>
              <TableDashboard/>
              <ChartDashBoard/>
            </CardDashBoard>
          );
        })}
      </Content>
    </Container>
  );
};

export default OverallDashboardPage;
