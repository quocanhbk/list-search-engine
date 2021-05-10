import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';

const ListWrapper = styled.ul`
  display: flex;
  list-style: none;
`;
const ListItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.color.background.primary};
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.32);
  border: ${(props) =>
    props.isActive ? `0.5px solid ${props.theme.color.fill.primary}` : 'none'};
  border-radius: 50%;
  width: 48px;
  height: 48px;
  margin-left: 1rem;
`;

const CarouselWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Carousel = ({ list = [], selectedItem, showArrowOn = 6, onItemClick = () => {} }) => {
  const showArrow = list.length > showArrowOn;
  return (
    <CarouselWrapper>
      {showArrow && <BsChevronLeft />}
      <ListWrapper>
        {list.map((item) => (
          <ListItem onClick={() => onItemClick(item.value)} isActive={selectedItem === item.value} key={item.value}>
            {item.label}
          </ListItem>
        ))}
      </ListWrapper>
      {showArrow && <BsChevronRight />}
    </CarouselWrapper>
  );
};

Carousel.propTypes = {
  list: PropTypes.array,
  selectedItem: PropTypes.any,
  showArrowOn: PropTypes.number,
  onItemClick: PropTypes.func,
};

export default Carousel;
