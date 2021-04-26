import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 35%;
`;
const HeaderTable = styled.div`
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 19px;
  display: flex;
  align-items: center;
  color: #807660;
  padding-top: 2%;
  display: flex;
  justify-content: space-between;
`;
const CurrentStatus = styled.h3`
  text-transform: uppercase;
`;
const Acomplishment = styled.div`
  h3 {
    font-weight: bold;
    font-size: 16px;
    line-height: 23px;
    text-align: right;
    color: #a59c87;
  }
`;
const Table = styled.table`
  width: 100%;
  text-align: left;
  margin-top: 2%;
  color: #a59c87;
`;
const Thead = styled.thead`
  font-size: 15px;
  color: #807660;
`;
const Tbody = styled.tbody`
  font-size: 13px;
`;
const Tr = styled.tr`
  th,
  td {
    padding: 3px;
  }
`;
const TableDashboard = (props) => {
  return (
    <Container {...props}>
      <HeaderTable>
        <CurrentStatus>Current Status</CurrentStatus>
        <Acomplishment>
          <p>Accomplishment</p>
          <h3>5/25 (20%)</h3>
        </Acomplishment>
      </HeaderTable>
      <Table>
        <Thead>
          <Tr>
            <th width="50%">Status</th>
            <th>Overdue</th>
            <th># of Task</th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <th>Completed</th>
            <td>2</td>
            <td>23</td>
          </Tr>
          <Tr>
            <th>In Progress</th>
            <td>2</td>
            <td>23</td>
          </Tr>
          <Tr>
            <th>Not started</th>
            <td>2</td>
            <td>23</td>
          </Tr>
          <Tr>
            <th>Pending</th>
            <td>2</td>
            <td>23</td>
          </Tr>
          <Tr>
            <th>Blocked</th>
            <td>2</td>
            <td>23</td>
          </Tr>
          <Tr>
            <th>Behind</th>
            <td>2</td>
            <td>23</td>
          </Tr>
        </Tbody>
      </Table>
    </Container>
  );
};

export default TableDashboard;
