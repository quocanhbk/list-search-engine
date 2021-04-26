import React from 'react';
import styled from 'styled-components'
import DonutChart from './DonutChart';

const StyleContainer = styled.div`
    flex: 1;
`
CurrentPerformance.propTypes = {
    
};

function CurrentPerformance() {
    return (
        <StyleContainer>
            <DonutChart/>
        </StyleContainer>
    );
}

export default CurrentPerformance;