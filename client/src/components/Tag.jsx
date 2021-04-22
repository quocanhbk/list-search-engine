import React from 'react';
import { BsX } from 'react-icons/bs';
import styled from 'styled-components';
import Typography from './Typography';

const TagWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  height: 24px;
  background-color: #80766066;
  border-radius: 4px;
  padding: 4px 0px 4px 8px;
  margin: 0 8px 8px 0px;
  color: ${(props) => props.theme.color.fill.secondary};
`;

const Tag = ({ text }) => {
  return (
    <TagWrapper>
      <Typography.CAPTION>{text}</Typography.CAPTION>
      <BsX style={{marginLeft: '16px'}}/>
    </TagWrapper>
  );
};

export default Tag;
