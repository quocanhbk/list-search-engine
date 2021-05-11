/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Avatar from "../Avatar";
import Tag from "../Tag";
import Progress from "../Progress";
import DueDate from "./DueDate";
import Context from "../../Context";
import baseURL from "../../utils/baseURL";

const CardWrapper = styled.div`
  border: 1px solid ${(props) => props.theme.color.border.primary};
  border-radius: 1rem;
  background-color: ${(props) =>
    props.selected ? props.theme.color.background.secondary : "transparent"};
  box-shadow: ${(props) => props.theme.shadow};

  display: flex;
  min-height: 6rem;
  gap: 0.5rem;
  padding: 0.5rem;
  cursor: pointer;

  &:hover {
    background: ${(props) => props.theme.color.background.secondary};
  }
`;
const UserZone = styled.div`
  flex: 1;
  & p {
    font-size: 0.8rem;
    flex: 1;
    display: flex;
    align-items: center;
    text-align: center;
  }
  & div {
    flex: 2;
    display: flex;
    align-items: center;
  }
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const InformationZone = styled.div`
  flex: 5;
  display: flex;
  flex-direction: column;
  //justify-content: space-between;
`;
const HeadlineContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  color: ${(props) => props.theme.color.fill.primary};
`;
const Headline = styled.p`
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  font-size: 0.9rem;
`;
const DateAndProgress = styled.div`
  font-style: italic;
  font-size: 0.8rem;
  display: flex;
  align-items: center;
  flex: 1;
  margin-bottom: 0.2rem;
`;
const Category = styled.div`
  display: flex;
  gap: 0.5rem;
  flex: 1;
  align-items: center;
`;
const Card = ({
  assignee,
  email,
  headline,
  progress,
  category,
  dueDate,
  selected,
  onClick,
}) => {
  category = category === null ? [] : category;
  const getName = () => {
    let nameArr = assignee.split(" ");
    return nameArr.slice(nameArr.length - 2, nameArr.length).join(" ");
  };
  const { filterContext } = Context.useContainer();

  return (
    <CardWrapper selected={selected} onClick={onClick}>
      <UserZone
        onClick={(e) => {
          e.stopPropagation();
          filterContext.addFilter("assignee", assignee);
        }}
      >
        <div>
          <Avatar
            src={`${baseURL}/api/v1/avatar/${email}`}
            width="40px"
            height="40px"
          />
        </div>
        <p>{getName()}</p>
      </UserZone>
      <InformationZone>
        <HeadlineContainer>
          <Headline>{headline}</Headline>
        </HeadlineContainer>

        <DateAndProgress>
          <Progress
            progress={progress}
            onClick={(e) => {
              e.stopPropagation();
              filterContext.addFilter("progress", progress);
            }}
          />
          <DueDate
            dateString={dueDate}
            progress={progress}
            onClick={(e) => {
              e.stopPropagation();
              filterContext.addFilter("dueDate", dueDate);
            }}
          />
        </DateAndProgress>
        <Category>
          {category.map((item) => (
            <Tag
              key={item}
              text={item}
              onClick={(e) => {
                e.stopPropagation();
                filterContext.addFilter("category", item);
              }}
            />
          ))}
        </Category>
      </InformationZone>
    </CardWrapper>
  );
};

export default Card;
