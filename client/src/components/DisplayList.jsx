import React from 'react';
import { BsFilterLeft, BsFunnel, BsSearch } from 'react-icons/bs';
import styled from 'styled-components';
import Card from './Card';
import Tag from './Tag';
import Typography from './Typography';

const DisplayListWrapper = styled.div`
  width: 25vw;
  min-height: 100vh;
  background-color: ${(props) => props.theme.color.background.primary};
  color: ${(props) => props.theme.color.text.primary};
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.32);
  box-sizing: border-box;
  padding: 24px;
`;

const SearchInputWrapper = styled.div`
  position: relative;
  width: 100%;
`;

const SearchInput = styled.input.attrs(() => ({
  type: 'text',
  placeholder: 'Search...',
}))`
  min-height: 48px;
  width: 100%;
  border-radius: 24px;
  background-color: #080909;
  outline: none;
  border: 0;
  box-sizing: border-box;
  padding-left: 56px;
  color: ${(props) => props.theme.color.text.primary};
`;

const IconWrapper = styled.button`
  color: ${(props) => props.theme.color.text.primary};
  background-color: transparent;
  outline: none;
  border: 0;
  width: 56px;
  height: 48px;
  border-radius: 24px;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;

const SearchIconWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
`;

const TagsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 16px 0;
`;

const Search = () => {
  return (
    <SearchInputWrapper>
      <SearchIconWrapper>
        <IconWrapper>
          <BsSearch size="20px" />
        </IconWrapper>
      </SearchIconWrapper>

      <SearchInput />
    </SearchInputWrapper>
  );
};

const SearchAndFilter = styled.div`
  display: flex;
  align-items: center;
`;

const CountAndSort = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const IconWithText = styled.div`
  display: flex;
  align-items: center;
`;
const CardList = styled.div`
  width: 100%;
`;

const DisplayList = () => {
  return (
    <DisplayListWrapper>
      <SearchAndFilter>
        <Search />
        <IconWrapper>
          <BsFunnel size="24px" />
        </IconWrapper>
      </SearchAndFilter>
      <TagsWrapper>
        <Tag text="M04" />
        <Tag text="Ngo Kim Son" />
      </TagsWrapper>
      <CountAndSort>
        <Typography.CAPTION>7 RESULTS</Typography.CAPTION>
        <IconWithText>
          <Typography.CAPTION>Sort By </Typography.CAPTION>
          <IconWrapper>
            <BsFilterLeft size="24px" />
          </IconWrapper>
        </IconWithText>
      </CountAndSort>
      <CardList>
        <Card
          title="Work item 1"
          subtitle="04/23/2021"
          description={<span style={{ color: 'red' }}>Overdue</span>}
          tags={['Design','Construction']}
        />
      </CardList>
    </DisplayListWrapper>
  );
};

export default DisplayList;
