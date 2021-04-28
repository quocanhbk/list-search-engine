/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import { getFader } from '../../utils/color';
import Progress from '../Progress';
import NoSelectionIndicator from './NoSelectionIndicator'
import InfoContainer from './InfoContainer';
import Table from '../Table'
import Tag from '../Tag'
import NameCard from './NameCard';
import NameTag from './NameTag';
import ListLoader from './ListLoader';
const DisplayContentWrapper = styled.div`
  flex: 10;
  background-color: ${props => props.theme.color.background.secondary};
  color: ${(props) => props.theme.color.text.primary};
  padding: 0.5rem;
  border-left: 1px solid ${props => props.theme.color.border.primary};
  overflow: overlay;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 1rem;
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
  margin-bottom: 0.5rem;
  & .title {
    font-size: 1.2rem;
    color: ${props => props.theme.color.fill.primary};
  }
  border-bottom: 1px solid ${props => props.theme.color.border.primary};
`;
const TagContainer = styled.div`
  display: flex;
  gap: 0.5rem;
`
const SecondText = styled.div`
  font-style: italic;
  color: ${props => props.theme.color.text.secondary};
  font-size: 0.9rem;
`
const ParRow = styled.div`
  display: flex;

`
const DisplayContent = ({item, loading}) => {
  const dateToString = (date) => date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear()
    return (
        <DisplayContentWrapper>
        {loading ? <ListLoader/> :
        !item && !loading ? <NoSelectionIndicator/> :
        <>
            <TaskTitleAnndStatus>
                <p className="title">{item.Title}</p>
                <Progress progress={item.Progress}/>
            </TaskTitleAnndStatus>
            <InfoContainer headline="Primary Information">
                <Table>
                  <Table.Body>
                      <Table.Row>
                        <Table.Cell width="15%"><b>Tasklist</b></Table.Cell>
                        <Table.Cell width="35%">M04 Lancaster Luminaire</Table.Cell>
                        <Table.Cell width="15%"><b>ID</b></Table.Cell>
                        <Table.Cell width="35%">{item.Task_x0020_ID_x0020_level_x0020_.Task_x002f_Subtask}</Table.Cell>
                      </Table.Row>
                      <Table.Row>
                        <Table.Cell><b>Category</b></Table.Cell>
                        <Table.Cell>
                          <TagContainer>
                            {item.Category && item.Category.map(cate => <Tag key={cate} text={cate}/>)}
                          </TagContainer>
                        </Table.Cell>
                        <Table.Cell><b>Priority</b></Table.Cell>
                        <Table.Cell>{item.Priority}</Table.Cell>
                      </Table.Row>
                      <Table.Row>
                        <Table.Cell><b>Created date</b></Table.Cell>
                        <Table.Cell>{dateToString(new Date(item.StartDate))}</Table.Cell>
                        <Table.Cell><b>Due date</b></Table.Cell>
                        <Table.Cell>{dateToString(new Date(item.DueDate))}</Table.Cell>
                      </Table.Row>
                    </Table.Body>
                </Table>
            </InfoContainer>

            <InfoContainer headline="Participants">
              <ParRow>
                <NameCard headline="Creator">
                  <NameTag name={item.Author.Title} email={item.Author.EMail}/>
                </NameCard>
                <NameCard headline="Assignee">
                  <NameTag name={item.AssignedTo.Title} email={item.AssignedTo.EMail}/>
                </NameCard>
              </ParRow>
              <NameCard headline="Observators">
                  {item.KeepinCC && item.KeepinCC.map(i => <NameTag key={i.Title} name={i.Title} email={i.EMail}/>)}
              </NameCard>
            </InfoContainer>
            <InfoContainer headline="Description">
              {item.Description ? item.Description : <SecondText>No description</SecondText>}
            </InfoContainer>
            <InfoContainer headline="Notes">
              {item.Notes ? item.Notes : <SecondText>No notes</SecondText>}
            </InfoContainer>
        </>
        }
        </DisplayContentWrapper>
    );
}

export default DisplayContent;
