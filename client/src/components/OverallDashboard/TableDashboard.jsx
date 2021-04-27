import React from "react";
import styled from "styled-components";
import Table from "../Table";

const Container = styled.div`
  width: 100%;
  height: 30%;
`;
const HeaderTable = styled.div`
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 1rem;
  display: flex;
  align-items: center;
  color: #807660;
  padding: 1rem 0;
  display: flex;
  justify-content: space-between;
`;
const CurrentStatus = styled.div`
  text-transform: uppercase;
  font-size: 1rem;
`;
const Acomplishment = styled.div`
  & p{
    
    text-align:right;

    &:first-child{
      font-size: 0.7rem;
    }

    &:last-child{
      font-size: 1.2rem;
      color: #fff;
    }
  }
`;
const dataRatio = [
  {
      id : 1,
      status: 'Completed',
      overdue: 2,
      task: 23
  },
  {
      id : 2,
      status: 'In progress',
      overdue: 2,
      task: 23
  },
  {
      id : 3,
      status: 'Not started',
      overdue: 2,
      task: 23
  },
  {
      id : 4,
      status: 'Pending',
      overdue: 2,
      task: 23
  },
  {
      id : 5,
      status: 'Blocked',
      overdue: 2,
      task: 23
  },
  {
      id : 6,
      status: 'Behind',
      overdue: 2,
      task: 23
  },
]
const TableDashboard = (props) => {
  return (
    <Container {...props}>
      <HeaderTable>
        <CurrentStatus>Current Status</CurrentStatus>
        <Acomplishment>
          <p>Accomplishment</p>
          <p>5/25 (20%)</p>
        </Acomplishment>
      </HeaderTable>
      <Table>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell textAlign="left" width="40%">Status</Table.HeaderCell>
            <Table.HeaderCell textAlign="center" width="30%">Overdue</Table.HeaderCell>
            <Table.HeaderCell textAlign="center" ># of Task</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {dataRatio.map(d => 
            <Table.Row key={d.id}>
              <Table.Cell textAlign="left">{d.status}</Table.Cell>
              <Table.Cell textAlign="center">{d.overdue}</Table.Cell>
              <Table.Cell textAlign="center">{d.task}</Table.Cell>
            </Table.Row>
            )}
        </Table.Body>
      </Table>
    </Container>
  );
};

export default TableDashboard;
