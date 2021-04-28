import React from 'react';
import styled from 'styled-components'
import Progress from '../Progress';
import Table from '../Table'

const StyleContainer = styled.div`
    flex: 2;
    background-color: ${props => props.theme.color.background.secondary};
    padding: 0.5rem;
`
const StyleTitle = styled.div`
    border-bottom: 1px solid;
    margin-bottom: 0.3rem;
    padding-bottom: 0.5rem;
    text-transform: uppercase;
    font-size: 0.9rem;
`
const StyleTable =styled.div`
    height: 90%;

    & table{
        height: 100%;
    }
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

CurrentOverdueRatio.propTypes = {
    
};

function CurrentOverdueRatio() {
    return (
        <StyleContainer>
            <StyleTitle>Current Overdue Ratio</StyleTitle>
            <StyleTable>
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
            </StyleTable>
        </StyleContainer>
    );
}

export default CurrentOverdueRatio;