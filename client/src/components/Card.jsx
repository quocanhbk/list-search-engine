import React from 'react';
import styled from 'styled-components';
import Avatar from './Avatar';

const CardWrapper = styled.div`
  display: flex;
  align-items: center;
  min-height: 104px;
  width: 100%;
  box-sizing: border-box;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.32);
  border-radius: 8px;
  padding: 16px;
`

const Card = () => {
  return (
    <CardWrapper>
      <Avatar src="http://localhost:3600/api/v1/avatar/son.nk@ttgvn.com"/>
    </CardWrapper>
  )
}

export default Card;
