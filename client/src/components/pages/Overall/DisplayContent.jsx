import React from 'react';
import {
  BsArchive,
  BsExclamation,
  BsFileText,
  BsFillInboxFill,
  BsFolderPlus,
  BsPeople,
} from 'react-icons/bs';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Divider from '../../Divider';
import StatusTag from '../../StatusTag';
import Tag from '../../Tag';
import Typography from '../../Typography';
import UserInfoCard from '../../UserInfoCard';
import Avatar from '../../Avatar';

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

const TaskInfoHorizontal = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 8px 0;
  & div:nth-child(3) {
    flex-grow: 3;
    margin-left: 16px;
  }
  & div:nth-child(2) {
    margin-left: 24px;
    min-width: 96px;
  }
`;

const TagsWrapper = styled.div`
  display: flex;
  & > div {
    margin: 0;
  }
`;

const TaskLegend = styled.div`
  border: 1px solid #a59c87;
  box-sizing: border-box;
  border-radius: 4px;
  padding: 24px;
  margin: 8px 0;
  width: 100%;
`;

const CreatorAndAssignee = styled.div`
  display: flex;
  margin-bottom: 8px;
  & > div {
    width: 50%;
  }
`;

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

const ObservatorsWrapper = styled.div`
  display: flex;
  margin: 8px 0;
  &>div {
    margin-right: 16px;
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
      <TaskInfoHorizontal>
        <BsFolderPlus size="20px" />
        <Typography.CAPTION>TASKLIST</Typography.CAPTION>
        <Typography.CAPTION>M04 Lancaster Luminaire</Typography.CAPTION>
      </TaskInfoHorizontal>
      <TaskInfoHorizontal>
        <BsFillInboxFill size="20px" />
        <Typography.CAPTION>ID</Typography.CAPTION>
        <Typography.CAPTION>A.2 Preliminary design</Typography.CAPTION>
      </TaskInfoHorizontal>
      <TaskInfoHorizontal>
        <BsArchive size="20px" />
        <Typography.CAPTION>CATEGORY</Typography.CAPTION>
        <TagsWrapper>
          <Tag text="Design" display={true} />
          <Tag text="Construction" display={true} />
        </TagsWrapper>
      </TaskInfoHorizontal>
      <TaskInfoHorizontal>
        <BsExclamation size="20px" />
        <Typography.CAPTION>Priority</Typography.CAPTION>
        <Typography.CAPTION>Normal</Typography.CAPTION>
      </TaskInfoHorizontal>
      
      <TaskInfoHorizontal>
        <BsPeople size="20px" />
        <Typography.CAPTION>PARTICIPANTS</Typography.CAPTION>
      </TaskInfoHorizontal>
      <TaskLegend>
        <CreatorAndAssignee>
          <div>
            <Typography.CAPTION>Creator</Typography.CAPTION>
            <UserInfoCard />
          </div>
          <div>
            <Typography.CAPTION>Assignee</Typography.CAPTION>
            <UserInfoCard showOverdue={true} />
          </div>
        </CreatorAndAssignee>
        <Typography.CAPTION>Observator(s)</Typography.CAPTION>
        <ObservatorsWrapper>
          <Observator name="K.Son"/>
          <Observator name="K.Son"/>
        </ObservatorsWrapper>
      </TaskLegend>

      <TaskInfoHorizontal>
        <BsFileText size="20px" />
        <Typography.CAPTION>DESCRIPTION</Typography.CAPTION>
      </TaskInfoHorizontal>
      <TaskLegend>
        <Typography.CAPTION>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Typography.CAPTION>
      </TaskLegend>
      <TaskInfoHorizontal>
        <BsFileText size="20px" />
        <Typography.CAPTION>NOTES</Typography.CAPTION>
      </TaskInfoHorizontal>
      <TaskLegend>
        <Typography.CAPTION>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Typography.CAPTION>
      </TaskLegend>

    </DisplayContentWrapper>
  );
};

export default DisplayContent;
