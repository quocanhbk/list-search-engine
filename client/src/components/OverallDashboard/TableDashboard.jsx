import React from "react";
import styled from "styled-components";
import Table from "../Table";
import Progress from '../Progress'
const Container = styled.div`
  width: 100%;
  padding: 0.5rem;
`;
const HeaderTable = styled.div`
  font-size: 1rem;
  display: flex;
  align-items: center;
  color: ${props => props.theme.color.text.primary};
  padding: 0.5rem 0;
  display: flex;
  justify-content: space-between;

`;
const CurrentStatus = styled.div`
  font-size: 1rem;
  font-weight: 700;
`;
const Acomplishment = styled.div`
  font-size: 0.8rem;
  color: ${props => props.theme.color.text.secondary};
  & b {
    font-size: 1rem;
    color: ${props => props.theme.color.text.info};
  }
`;
const TableWrapper = styled.div`
  background: ${props => props.theme.color.background.primary};
  padding: 0.5rem;
  border: 1px solid ${props => props.theme.color.border.primary};
  border-radius: 0.5rem;
  & .cell {
    font-size: 0.8rem;
  }
`
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
          Accomplishment: <b>5/25 (20%)</b>
        </Acomplishment>
      </HeaderTable>
      <TableWrapper>
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
                <Table.Cell className="cell" textAlign="left"><Progress textOnly progress={d.status}/></Table.Cell>
                <Table.Cell className="cell" textAlign="center">{d.overdue}</Table.Cell>
                <Table.Cell className="cell" textAlign="center">{d.task}</Table.Cell>
              </Table.Row>
              )}
          </Table.Body>
        </Table>
      </TableWrapper>
    </Container>
  );
};

export default TableDashboard;
