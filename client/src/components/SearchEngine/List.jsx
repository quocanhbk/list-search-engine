import React from 'react';
import { BsFilterLeft, BsFunnel } from 'react-icons/bs';
import styled from 'styled-components';
import sampleData from '../../sampleData'
import Card from './NewCard';
import Tag from '../Tag';
import Searchbar from '../Searchbar'
import { getFader } from '../../utils/color';
import Context from '../../Context';

const DisplayListWrapper = styled.div`
  flex: 8;
  background-color: ${(props) => props.theme.color.background.primary};
  color: ${(props) => props.theme.color.text.primary};
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 0 0.5rem;
`;

const IconWrapper = styled.button`
  color: ${(props) => props.theme.color.fill.primary};
  background-color: ${props => props.theme.color.background.secondary};
  border: 1px solid ${props => props.theme.color.border.primary};
  height: 2.5rem;
  padding: 0.5rem;
  border-radius: 99px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:hover {
    background: ${props => props.theme.color.border.primary};
  }
`;
const TagBar = styled.div`
  display: flex;
  gap: 0.5rem;
  padding: 0.5rem 0;
`;
const TagContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const SearchAndFilter = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem 0 0.5rem;
  gap: 0.5rem;
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
const ListFooter = styled.div`
  font-size: 0.8rem;
  padding: 0.5rem 0;
`
const DisplayList = () => {
  const {searchContext} = Context.useContainer()
  const searchData = () => {
    return sampleData.filter(item => {
      const itemString = item.AssignedTo.Title + " " + item.AssignedTo.EMail + " " + item.Title + item.Progress + item.Category + item.DueDate
      return itemString.toLowerCase().includes(searchContext.search.toLowerCase())
    })
  }
  return (
    <DisplayListWrapper>

      <SearchAndFilter>
        <Searchbar search={searchContext.search} setSearch={searchContext.setSearch}/>
        <IconWrapper>
          <BsFunnel size="20px" />
        </IconWrapper>
        <IconWrapper>
          <BsFilterLeft size="20px" />
        </IconWrapper>
      </SearchAndFilter>

      <TagBar>
        <p>Filter: </p>
        <TagContainer>
          <Tag text="M04" />
          <Tag text="Ngo Kim Son" />
        </TagContainer>
      </TagBar>

      <CardList>
        {searchData().map((task) => (
          <Card
            key={task.Id}
            assignee={task.AssignedTo.Title}
            headline={task.Title}
            progress={task.Progress}
            category={task.Category}
            dueDate={task.DueDate}
            selected={false}
          />
        ))}
      </CardList>
      <ListFooter>
        Total <b>37</b> results
      </ListFooter>
    </DisplayListWrapper>
  );
};

export default DisplayList;
