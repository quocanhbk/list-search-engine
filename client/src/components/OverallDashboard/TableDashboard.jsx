/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import Table from '../Table';
import Progress from '../Progress';
const Container = styled.div`
  width: 100%;
  padding: 0.5rem;
`;
const HeaderTable = styled.div`
  font-size: 1rem;
  display: flex;
  align-items: center;
  color: ${(props) => props.theme.color.text.primary};
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
  color: ${(props) => props.theme.color.text.secondary};
  & b {
    font-size: 1rem;
    color: ${(props) => props.theme.color.text.info};
  }
`;
const TableWrapper = styled.div`
  background: ${(props) => props.theme.color.background.primary};
  padding: 0.5rem;
  border: 1px solid ${(props) => props.theme.color.border.primary};
  border-radius: 0.5rem;
  & .cell {
    font-size: 0.8rem;
  }
`;

const TableDashboard = (props) => {
  const { data } = props;
  return (
    <Container {...props}>
      {!data ? (
        <div>No Data</div>
      ) : (
        <>
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
                  <Table.HeaderCell textAlign="left" width="40%">
                    Status
                  </Table.HeaderCell>
                  <Table.HeaderCell textAlign="center" width="30%">
                    Overdue
                  </Table.HeaderCell>
                  <Table.HeaderCell textAlign="center">
                    # of Task
                  </Table.HeaderCell>
                </Table.Row>
              </Table.Header>
              <Table.Body>
                {Object.keys(data).map((status) => (
                  <Table.Row key={status}>
                    <Table.Cell className="cell" textAlign="left">
                      <Progress textOnly progress={status} />
                    </Table.Cell>
                    <Table.Cell className="cell" textAlign="center">
                      {data[status]['overdue']}
                    </Table.Cell>
                    <Table.Cell className="cell" textAlign="center">
                      {data[status]['total']}
                    </Table.Cell>
                  </Table.Row>
                ))}
              </Table.Body>
            </Table>
          </TableWrapper>
        </>
      )}
    </Container>
  );
};

export default TableDashboard;
