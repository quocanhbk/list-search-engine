import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Typography from '../Typography';
import Avatar from '../Avatar';
import CurrentPerformance from './CurrentPerformance';
import OtherPerformance from './OtherPerformance';

const DisplayContentWrapper = styled.div`
  flex: 10;
  min-height: 100vh;
  background-color: #000000;
  color: ${(props) => props.theme.color.text.primary};
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.32);
  box-sizing: border-box;
  padding: 24px;
`;

const TaskTitleAnndStatus = styled.div`
  display: flex;
  justify-content: space-between;
`;

const StyleContainer = styled.div`
  display:flex;
`

const Observator = ({ name }) => {
  return (
    <div>
      <Avatar
        width="56px"
        height="56px"
        src="http://localhost:3600/api/v1/avatar/son.nk@ttgvn.com"
      />
      <Typography.CAPTION style={{textAlign: 'center'}}>{name}</Typography.CAPTION>
    </div>
  );
};

Observator.propTypes = {
  name: PropTypes.string,
};


const DisplayContent = () => {
  return (
    <DisplayContentWrapper>
      <TaskTitleAnndStatus>
        <Typography.H5>Work Item 1</Typography.H5>
      </TaskTitleAnndStatus>
      <StyleContainer> 
        <CurrentPerformance/>
        <OtherPerformance/>
      </StyleContainer>
    </DisplayContentWrapper>
  );
};

export default DisplayContent;
