/* eslint-disable react/prop-types */
import React from "react";
import styled from "styled-components";
import { getFader } from "../../utils/color";
import Progress from "../Progress";
import NoSelectionIndicator from "./NoSelectionIndicator";
import InfoContainer from "./InfoContainer";
import Tag from "../Tag";
import NameCard from "./NameCard";
import NameTag from "./NameTag";
import ListLoader from "./ListLoader";
const DisplayContentWrapper = styled.div`
  flex: 1;
  background-color: ${(props) => props.theme.color.background.secondary};
  color: ${(props) => props.theme.color.text.primary};
  padding: 0.5rem;
  padding-bottom: 5rem;
  border-left: 1px solid ${(props) => props.theme.color.border.primary};
  overflow-y: auto;
  overflow-x: hidden;
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  & > div {
    margin-top: 1rem;
  }
  ::-webkit-scrollbar {
    width: 0.5rem;
  }
  ::-webkit-scrollbar-track {
    background: transparent;
  }
  ::-webkit-scrollbar-thumb {
    background: ${(props) => getFader(props.theme.color.fill.secondary, 0.5)};
    border-radius: 99px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: ${(props) => props.theme.color.fill.secondary};
  }
`;

const TaskTitleAnndStatus = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 0;
  margin-bottom: 0.5rem;
  & .title {
    font-size: 1.2rem;
    color: ${(props) => props.theme.color.fill.primary};
  }
`;
const TagContainer = styled.div`
  display: flex;
  gap: 0.5rem;
`;
const SecondText = styled.div`
  font-style: italic;
  color: ${(props) => props.theme.color.text.secondary};
  font-size: 0.9rem;
`;
const ParRow = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
const HorizontalLine = styled.div`
  display: flex;
  justify-content: space-between;
  & >div {
    flex-basis: 50%;
  }
`;

const DisplayContent = ({ item, loading }) => {
  const dateToString = (date) =>
    date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();
  const shortenName = (name) =>
    name.slice(
      name.lastIndexOf("-") !== -1 ? name.lastIndexOf("-") + 1 : 0,
      name.length
    );
  return (
    <DisplayContentWrapper>
      {loading ? (
        <ListLoader />
      ) : !item && !loading ? (
        <NoSelectionIndicator />
      ) : (
        <>
          <TaskTitleAnndStatus>
            <p className="title">{item.Title}</p>
            <Progress progress={item.Progress} />
          </TaskTitleAnndStatus>
          <InfoContainer headline="Primary Information">
            <HorizontalLine>
              <div>
                <b>Tasklist</b>
              </div>
              <div>M04 Lancaster Luminaire</div>
            </HorizontalLine>
            <HorizontalLine>
              <div>
                <b>ID</b>
              </div>
              <div>
                {item.Task_x0020_ID_x0020_level_x0020_.Task_x002f_Subtask}
              </div>
            </HorizontalLine>
            <HorizontalLine>
              <div>
                <b>Category</b>
              </div>
              <div>
                <TagContainer>
                  {item.Category &&
                    item.Category.map((cate) => <Tag key={cate} text={cate} />)}
                </TagContainer>
              </div>
            </HorizontalLine>
            <HorizontalLine>
              <div>
                <b>Priority</b>
              </div>
              <div>{item.Priority}</div>
            </HorizontalLine>
            <HorizontalLine>
              <div>
                <b>Start Date</b>
              </div>
              <div>{dateToString(new Date(item.StartDate))}</div>
            </HorizontalLine>
            <HorizontalLine>
              <div>
                <b>Due Date</b>
              </div>
              <div>{dateToString(new Date(item.DueDate))}</div>
            </HorizontalLine>
          </InfoContainer>

          <InfoContainer headline="Participants">
            <ParRow>
              <NameCard headline="Creator">
                <NameTag
                  name={shortenName(item.Author.Title)}
                  email={item.Author.EMail}
                />
              </NameCard>
              <NameCard headline="Assignee">
                <NameTag
                  name={shortenName(item.AssignedTo.Title)}
                  email={item.AssignedTo.EMail}
                />
              </NameCard>
            </ParRow>
            <NameCard headline="Observators">
              {item.KeepinCC &&
                item.KeepinCC.map((i) => (
                  <NameTag
                    key={i.Title}
                    name={shortenName(i.Title)}
                    email={i.EMail}
                  />
                ))}
            </NameCard>
          </InfoContainer>
          <InfoContainer headline="Description">
            {item.Description ? (
              item.Description
            ) : (
              <SecondText>No description</SecondText>
            )}
          </InfoContainer>
          <InfoContainer headline="Notes">
            {item.Notes ? item.Notes : <SecondText>No notes</SecondText>}
          </InfoContainer>
        </>
      )}
    </DisplayContentWrapper>
  );
};

export default DisplayContent;
