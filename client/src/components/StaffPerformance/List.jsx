import React from 'react';
import styled from 'styled-components';
const DisplayListWrapper = styled.div`
  flex: 5;
  background-color: ${(props) => props.theme.color.background.primary};
  color: ${(props) => props.theme.color.text.primary};
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 0 0.5rem;
`;

const DisplayList = () => {
  return (
    <DisplayListWrapper>

     
    </DisplayListWrapper>
  );
};

export default DisplayList;
