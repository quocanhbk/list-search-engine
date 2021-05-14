/* eslint-disable react/prop-types */
import React from "react";
import styled from "styled-components";
import baseURL from "../../utils/baseURL";

const StyledNameTag = styled.div`
  margin-top: 0.2rem;
  display: flex;
  height: 2.5rem;
  & img {
    border-radius: 99px;
    height: 100%;
  }
  border: 1px solid ${(props) => props.theme.color.border.primary};
  background: ${(props) => props.theme.color.background.secondary};
  align-items: center;
  border-radius: 99px;
  padding-right: 1rem;
`;
const Info = styled.div`
  display: flex;
  flex-direction: column;
  & h3 {
    font-weight: 700;
    font-size: 0.9rem;
  }
  & p {
    color: ${(props) => props.theme.color.text.secondary};
    font-size: 0.8rem;
  }
`;
const NameTag = ({ name, email }) => {
  return (
    <StyledNameTag>
      <img src={`${baseURL}/api/v1/avatar/${email}`} />
      <Info>
        <h3>{name}</h3>
        <p>{email}</p>
      </Info>
    </StyledNameTag>
  );
};

export default NameTag;
