import React from 'react';
import { BsFolderPlus } from 'react-icons/bs';
import styled from 'styled-components';
import Divider from '../../Divider';
import StatusTag from '../../StatusTag';
import Typography from '../../Typography';

const DisplayContentWrapper = styled.div`
  width: 51.25vw;
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

const TaskInfoLayout = styled.div`
  display: flex;
  width: 100%;
  padding: 8px 0;
  &:nth-child(2) {
    flex-grow: 2;
    color: red !important;
  }
`

const DisplayContent = () => {
  return (
    <DisplayContentWrapper>
      <TaskTitleAnndStatus>
        <Typography.H4>Work Item 1</Typography.H4>
        <StatusTag>In Progress</StatusTag>
      </TaskTitleAnndStatus>
      <Divider />
      <TaskInfoLayout>
        <BsFolderPlus size="20px" />
        <Typography.CAPTION>TASKLIST</Typography.CAPTION>
        <Typography.CAPTION>M04 Lancaster Luminaire</Typography.CAPTION>
      </TaskInfoLayout>
    </DisplayContentWrapper>
  );
};

export default DisplayContent;
