/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import ListLoader from '../SearchEngine/ListLoader';
import ListToolbar from '../SearchEngine/ListToolbar';
import Card from './Card';
import { getFader } from '../../utils/color';

const DisplayListWrapper = styled.div`
  flex: 5;
  background-color: ${(props) => props.theme.color.background.primary};
  color: ${(props) => props.theme.color.text.primary};
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 0 0.5rem;
`;

const CardList = styled.div`
  width: 100%;
  flex: 1;
  overflow: overlay;
  border-top: 1px solid ${props => props.theme.color.border.primary};
  border-bottom: 1px solid ${props => props.theme.color.border.primary};
  gap: 0.5rem;
  display: flex;
  flex-direction: column;
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

const DisplayList = ({ assigneesData, loading, cardOnClick }) => {
  return (
    <DisplayListWrapper>
      <ListToolbar/>

      <CardList>
        {loading? 
          <ListLoader/> : 
          <>
          {assigneesData && assigneesData.map((assignee) => (
            <Card
              key={assignee.EMail}
              email={assignee.EMail}
              name={assignee.Title}
              onClick={() => cardOnClick(assignee.EMail)}
            />
          ))}
          </>
        }
      </CardList>
    </DisplayListWrapper>
  );
};

export default DisplayList;
