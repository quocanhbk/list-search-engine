import React from 'react';
import styled from 'styled-components'
import MixChart from './MixChar';
import PaginationDate from './PaginationDate';

const StyleContainer = styled.div`
    flex: 1;
    background-color: ${props => props.theme.color.background.secondary};
    padding: 0.5rem;
    margin-top: 0.5rem;
`
const StyleHeader = styled.div`
    border-bottom: 1px solid;
    margin-bottom: 0.3rem;
    padding-bottom: 0.3rem;
    display:flex;
    justify-content: space-between;
    align-items: center;
`
const StyleTitle = styled.div`
    text-transform: uppercase;
    font-size: 0.9rem;
`

WeeklyTask.propTypes = {
    
};

function WeeklyTask() {
    return (
        <StyleContainer>
            <StyleHeader>
                <StyleTitle>Weekly Task</StyleTitle>
                <PaginationDate/>
            </StyleHeader>
            <MixChart/>
        </StyleContainer>
    );
}

export default WeeklyTask;