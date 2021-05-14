/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { BsFilterLeft, BsFunnel, BsList } from "react-icons/bs";
import Searchbar from "../Searchbar";
import styled from "styled-components";
import Context from "../../Context";
import useClickOutside from "../../hooks/useClickOutside";
export const IconWrapper = styled.button`
  color: ${(props) => props.theme.color.fill.primary};
  background-color: ${(props) => props.theme.color.background.secondary};
  border: 1px solid ${(props) => props.theme.color.border.primary};
  height: 2.5rem;
  padding: 0.5rem;
  border-radius: 99px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  position: relative;

  &:hover {
    background: ${(props) => props.theme.color.border.primary};
  }
`;
export const PopupWrapper = styled.div`
  position: absolute;
  width: 160px;
  min-height: 120px;
  right: 0;
  top: 120%;
  z-index: 99;
  border: 1px solid ${(props) => props.theme.color.border.primary};
  background: ${(props) => props.theme.color.background.primary};
  border-radius: 1rem;
  padding: 1rem;
  box-sizing: border-box;
`;

const SearchAndFilter = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem 0 0.5rem;
  gap: 0.5rem;
`;
const ListToolbar = ({ isMobile, handleToggleSideBar, showFilter, showSort }) => {
  const { searchContext } = Context.useContainer();
  const [filterPopup, setFilterPopup] = useState(false);
  const [sortPopup, setSortPopup] = useState(false);
  const ref1 = useClickOutside(() => {
    setFilterPopup(false);
  });
  const ref2 = useClickOutside(() => {
    setSortPopup(false);
  });

  const handlePopup = (e, type) => {
    e.preventDefault();
    if (type === "filter") {
      setFilterPopup(!filterPopup);
    } else setSortPopup(!sortPopup);
  };
  useEffect(() => {
    if (filterPopup) setSortPopup(false);
    if (sortPopup) setFilterPopup(false);
  });
  return (
    <SearchAndFilter>
      {isMobile && <BsList onClick={handleToggleSideBar} />}
      <Searchbar
        search={searchContext.search}
        setSearch={searchContext.setSearch}
      />
      { showFilter && <IconWrapper ref={ref1}>
        <BsFunnel size="20px" onClick={(e) => handlePopup(e, "filter")} />
        {filterPopup && <PopupWrapper>Filter</PopupWrapper>}
      </IconWrapper> }
      {showSort && <IconWrapper ref={ref2}>
        <BsFilterLeft size="20px" onClick={(e) => handlePopup(e, "sort")} />
        {sortPopup && <PopupWrapper>Sort</PopupWrapper>}
      </IconWrapper>}
    </SearchAndFilter>
  );
};

export default ListToolbar;
