import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { getFader } from "../../utils/color";

const ListWrapper = styled.ul`
  display: flex;
  list-style: none;
  margin-bottom: 0.5rem;
`;
const ListItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.color.background.primary};
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.32);
  border: ${(props) =>
    props.isActive ? `0.5px solid ${props.theme.color.fill.primary}` : "none"};
  border-radius: 50%;
  font-size: 0.8rem;
  width: 40px;
  height: 40px;
  margin-left: 1rem;
`;

const CarouselWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-x: auto;
  ::-webkit-scrollbar {
    width: 0.3rem;
    height: 0.3rem;
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

const Carousel = ({ list = [], selectedItem, onItemClick = () => {} }) => {
  return (
    <CarouselWrapper>
      <ListWrapper>
        {list.map((item) => (
          <ListItem
            onClick={() => onItemClick(item.value)}
            isActive={selectedItem === item.value}
            key={item.value}
          >
            {item.label}
          </ListItem>
        ))}
      </ListWrapper>
    </CarouselWrapper>
  );
};

Carousel.propTypes = {
  list: PropTypes.array,
  selectedItem: PropTypes.any,
  onItemClick: PropTypes.func,
};

export default Carousel;
