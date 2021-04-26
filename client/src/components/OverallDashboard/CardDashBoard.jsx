import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 90%;
  background-color: #252627;
  padding-top: 0.5rem;
  box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%),
    0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);
  border-radius: 8px;
  min-width: 32%;
  color: #575757;
  padding: 2% 1%;
  margin-bottom: 1%;
  color: ${(props) => props.theme.color.text.secondary};
`;
const Title = styled.h2`
  font-family: Roboto;
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 700;
  line-height: 30px;
  letter-spacing: 0em;
  text-align: left;
  padding: 0 0 2% 0;
  border-bottom: 1px solid #a59c87;
  color: ${(props) => props.theme.color.text.secondary};
`;

const CardDashBoard = (props) => {
  return <Container {...props} />;
};
CardDashBoard.Title = Title;

export default CardDashBoard;
