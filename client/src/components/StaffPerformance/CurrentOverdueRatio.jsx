import React from 'react';
import styled from 'styled-components'
import Typography from '../Typography';
import Table from '../Table'

const StyleContainer = styled.div`
    flex: 1;
    background-color: #212223;
    padding: 0.5rem;
`
const StyleTitle = styled.div`
    border-bottom: 1px solid;
    margin-bottom: 0.5rem;
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

CurrentOverdueRatio.propTypes = {
    
};

function CurrentOverdueRatio() {
    return (
        <StyleContainer>
            <StyleTitle>
                <Typography.H6>Current Overdue Ratio</Typography.H6>
            </StyleTitle>
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
        </StyleContainer>
    );
}

export default CurrentOverdueRatio;