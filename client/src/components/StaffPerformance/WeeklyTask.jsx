import React from 'react';
import styled from 'styled-components'
import Typography from '../Typography';

const StyleContainer = styled.div`
    flex: 1;
    background-color: #212223;
    margin-top: 0.5rem;
    padding: 0.5rem;
`
const StyleTitle = styled.div`
    border-bottom: 1px solid;
    margin-bottom: 0.5rem;
`
WeeklyTask.propTypes = {
    
};

function WeeklyTask() {
    return (
        <StyleContainer>
            <StyleTitle>
                <Typography.H6>Weekly Task</Typography.H6>
            </StyleTitle>
        </StyleContainer>
    );
}

export default WeeklyTask;