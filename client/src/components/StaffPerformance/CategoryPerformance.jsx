import React from 'react';
import styled from 'styled-components'
import Typography from '../Typography';
import RadarChart from './RadaChart';

const StyleContainer = styled.div`
    flex: 2;
    background-color: #212223;
    padding: 0.5rem;
    margin-top: 0.5rem;

`
const StyleTitle = styled.div`
    border-bottom: 1px solid;
    margin-bottom: 0.5rem;
`
CategoryPerformance.propTypes = {
    
};

function CategoryPerformance() {
    return (
        <StyleContainer>
            <StyleTitle>
                <Typography.H6>Category Performance</Typography.H6>
            </StyleTitle>
            <RadarChart/>
        </StyleContainer>
    );
}

export default CategoryPerformance;