/* eslint-disable react/prop-types */
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
import Tag from '../Tag';
import Typography from '../Typography';
import UserInfoCard from '../UserInfoCard';
import Avatar from '../Avatar';
import { getFader } from '../../utils/color';
import Progress from '../Progress';
import NoSelectionIndicator from './NoSelectionIndicator'

const DisplayContentWrapper = styled.div`
  flex: 10;
  background-color: ${props => props.theme.color.background.secondary};
  color: ${(props) => props.theme.color.text.primary};
  padding: 0.5rem;
  border-left: 1px solid ${props => props.theme.color.border.primary};
  overflow: overlay;
  position: relative;
  ::-webkit-scrollbar {
    width: 0.5rem;
  }
  ::-webkit-scrollbar-track {
    background: transparent;
  }
  ::-webkit-scrollbar-thumb {
    background: ${props => getFader(props.theme.color.fill.secondary, 0.5)};
    border-radius: 99px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: ${props => props.theme.color.fill.secondary};
  }
`;

const TaskTitleAnndStatus = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 0;
  & .title {
    font-size: 1.2rem;
    color: ${props => props.theme.color.fill.primary};
  }
  border-bottom: 1px solid ${props => props.theme.color.border.primary};
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

const DisplayContent = ({item}) => {
  return (
    <DisplayContentWrapper>
      {!item ? <NoSelectionIndicator/> : 
      <>
      <TaskTitleAnndStatus>
        <p className="title">{item.Title}</p>
        <Progress progress={item.Progress}/>
      </TaskTitleAnndStatus>

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
      </>
    }
    </DisplayContentWrapper>
  );
};

export default DisplayContent;
