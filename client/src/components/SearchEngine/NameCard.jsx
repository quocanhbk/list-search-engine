/* eslint-disable react/prop-types */
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  flex: 1;
  & p {
    color: ${(props) => props.theme.color.fill.secondary};
    margin-bottom: 0.2rem;
  }
`;
const NameTagContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  & > div {
    margin-top: 0.5rem;
    margin-left: 0.5rem;
  }
`;
const NameCard = ({ headline, children }) => {
  return (
    <Container>
      {children && <p>{headline}</p>}
      <NameTagContainer>{children}</NameTagContainer>
    </Container>
  );
};

export default NameCard;
