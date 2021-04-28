import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 100%;
  width: 100%;
  .active{
    background: rgba(165, 156, 135, 0.2);
  }
`;
const Parent = styled.div`
    display: flex;
    padding: 1%;
    font-size: 1.2em;
    color: #807660;
`;
const ChildrenLeft = styled.div`
    width: 23%;
    border-right: 1px solid #807660;
    margin-right: 15px;
`;
const ChildrenRight = styled.div`
  width: auto;
  height: 100%;
  background: green;
  color: white;
  padding: 6px 20px;
  border-radius: 16px;
`;
const title = [
  { name: "Work item 1 name as a Completed" },
  { name: "Work item 2 name as" },  
  { name: "Work item 3 name as a Not Started" },
  { name: "Work item 4 name as a Pending" },
  { name: "Work item 5 name as a Blocking" },
  { name: "Work item 6 name as a Behind" },
];
function ContentTimeLine() {
  const [active, setActive] = useState();
  const handleClickChoose = (value) => {
    setActive(value);
  };
  
  return (
    <Container>
      {title.map((value, index) => {
        return (
            <Parent onClick={()=>handleClickChoose(index)} className={(index === active) ? 'active' : 'display_task'} key={index}>
                <ChildrenLeft>
                    {value.name}
                </ChildrenLeft>
                <ChildrenRight>
                    {value.name}
                </ChildrenRight>
            </Parent>
        );
      })}
    </Container>
  );
}

export default ContentTimeLine;
