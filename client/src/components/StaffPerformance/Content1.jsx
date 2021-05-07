/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import CurrentPerformance from './CurrentPerformance';
import WeeklyTask from './WeeklyTask';

const StyleContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

Content1.propTypes = {};

function Content1({ performanceData }) {
  return (
    <StyleContent>
      <CurrentPerformance performanceData={performanceData} />
      <WeeklyTask />
    </StyleContent>
  );
}

export default Content1;
