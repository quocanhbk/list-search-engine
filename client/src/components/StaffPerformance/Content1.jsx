import React from 'react';
import styled from 'styled-components';
import CurrentPerformance from './CurrentPerformance';
import WeeklyTask from './WeeklyTask';

const StyleContent =styled.div`
    flex: 1;
    margin-top: 0.5rem;
    display:flex;
    flex-direction: column;
`

Content1.propTypes = {
    
};

function Content1() {
    return (
        <StyleContent>
            <CurrentPerformance/>
            <WeeklyTask/>
        </StyleContent>
    );
}

export default Content1;