import React from 'react';
import PropTypes from 'prop-types';
import { BsX } from 'react-icons/bs';
import styled from 'styled-components';
import Typography from './Typography';

const TagWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  height: 24px;
  background-color: transparent;
  border: 1px solid ${(props) => props.theme.color.fill.primary};
  border-radius: 4px;
  padding: 4px 8px 4px 8px;
  margin: 0 8px 8px 0px;
  color: ${(props) => props.theme.color.fill.secondary};
`;

const Tag = ({ text, display }) => {
  return (
    <TagWrapper>
      <Typography.CAPTION>{text}</Typography.CAPTION>
      {!display && <BsX style={{marginLeft: '16px'}}/> }
    </TagWrapper>
  );
};

Tag.propTypes = {
  text: PropTypes.string,
  display: PropTypes.boolean,
}

export default Tag;
