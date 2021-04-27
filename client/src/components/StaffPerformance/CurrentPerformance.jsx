import React from 'react';
import styled from 'styled-components'
import Typography from '../Typography';
import DonutChart from './DonutChart';

const StyleContainer = styled.div`
    flex: 1;
    background-color: #212223;
    padding: 0.5rem;
`
const StyleTitle = styled.div`
    border-bottom: 1px solid;
    margin-bottom: 1rem;
`
CurrentPerformance.propTypes = {
    
};

function CurrentPerformance() {
    return (
        <StyleContainer>
            <StyleTitle>
                <Typography.H6>Current Performance</Typography.H6>
            </StyleTitle>
            <DonutChart/>
        </StyleContainer>
    );
}

export default CurrentPerformance;