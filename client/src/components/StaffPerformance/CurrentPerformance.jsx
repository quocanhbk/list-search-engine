import React from 'react';
import styled from 'styled-components'
import DonutChart from './DonutChart';

const StyleContainer = styled.div`
    flex: 1;
    background-color: #212223;
    padding: 0.5rem;
`
const StyleTitle = styled.div`
    border-bottom: 1px solid;
    margin-bottom: 0.3rem;
    padding-bottom: 0.5rem;
    text-transform: uppercase;
    font-size: 0.9rem;
`
CurrentPerformance.propTypes = {
    
};

function CurrentPerformance() {
    return (
        <StyleContainer>
            <StyleTitle>Current Performance</StyleTitle>
            <DonutChart/>
        </StyleContainer>
    );
}

export default CurrentPerformance;