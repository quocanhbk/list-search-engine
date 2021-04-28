import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 21%;
  height: 100%;
  text-align: right;
  border-right: 1px solid #807660;
  padding: 2% 0%;
  font-size: 1.2em;
  .active{
    background: rgba(165, 156, 135, 0.2);
  }
`;
const Children = styled.div`
  padding: 5% 1%;
  color: #807660;
  cursor: pointer;
  padding-right: 7px;
`;

const title = [
  "Work item 1 name as a Completed",
  "Work item 2 name as",
  "Work item 3 name as a Not Started",
  "Work item 4 name as a Pending",
  "Work item 5 name as a Blocking",
  "Work item 6 name as a Behind",
];
function SidebarContent() {
  const [active, setActive] = useState();
  const handleClickChoose = (value) => {
    setActive(value);
  };
  return (
    <Container>
      {title.map((value, index) => {
        return (
          <Children key={index} onClick={() => handleClickChoose(index)} className={(index === active) ? 'active' : 'sidebar_timeline'}>
            {value}
          </Children>
        );
      })}
    </Container>
  );
}

export default SidebarContent;
