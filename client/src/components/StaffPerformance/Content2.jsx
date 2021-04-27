import React from 'react';
import styled from 'styled-components';
import CategoryPerformance from './CategoryPerformance';
import CurrentOverdueRatio from './CurrentOverdueRatio';

const StyleContent =styled.div`
    flex: 1;
    display:flex;
    flex-direction: column;
    margin-top: 0.5rem;
    margin-left: 0.5rem;
`
Content2.propTypes = {
    
};

function Content2() {
    return (
        <StyleContent>
            <CurrentOverdueRatio/>
            <CategoryPerformance/>
        </StyleContent>
    );
}

export default Content2;