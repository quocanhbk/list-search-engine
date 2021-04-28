import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  flex: 8;
  display: flex;
  align-items: center;

  & .icon-angle{
    color: ${(props) => props.theme.color.text.secondary};
    cursor: pointer;
    padding: 0.5rem;
    
    i {
      font-size: 2rem;
    }
    p {
      font-size: 0.7rem;
    }
  }
`;
const Ul = styled.ul`
  display: flex;
  flex-wrap: wrap;
  color: ${(props) => props.theme.color.text.secondary};
  justify-content: space-around;
  flex: 1;
  align-items: center;

  .active_pagination {
    color: #ffc107;
  }
`;
const Li = styled.li`
  text-align: center;
  list-style: none;
  cursor: pointer;
  width: 3rem;
  line-height: 1.5;
`;
function PaginationDate() {
  const [date_temp, setDateTemp] = useState([]);
  const [today, setToday] = useState(new Date());

  const RenderDate = () => {
    let list_date = [];
    for (let i = -6; i < 7; i++) {
      let tomorrow = new Date(
        today.getFullYear(),
        today.getMonth(),
        today.getDate() + i
      );
      let dateString = tomorrow.toDateString();
      let month = dateString.slice(3, 7);
      let date = dateString.slice(8, 10);
      list_date.push({
        tomorrow: tomorrow,
        month: month,
        date: date,
      });
    }
    setDateTemp(list_date);
  };
  useEffect(() => {
    RenderDate();
  }, [today]);

  const handleSetDate = (value) => {
    let tomorrow = new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDate() + value
    );
    setToday(tomorrow);
  };
  const handleChooseDate = (value) => {
    setToday(value.tomorrow);
    // handleGetDate(today)
  };
  return (
    <Container>
      <p className="icon-angle" onClick={() => handleSetDate(-7)}>
        <i className="fa fa-angle-left" aria-hidden="true"></i>
        <p>-7</p>
      </p>
      <p className="icon-angle" onClick={() => handleSetDate(-1)}>
        <i className="fa fa-angle-left" aria-hidden="true"></i>
        <p>-1</p>
      </p>
      <Ul>
        {date_temp.map((value, index) => {
          return (
            <Li
              key={index}
              className={
                index === date_temp.length / 2 - 0.5
                  ? "active_pagination"
                  : "list"
              }
              onClick={() => handleChooseDate(value)}
            >
              <p>{value.date}</p>
              <p>{value.month}</p>
            </Li>
          );
        })}
      </Ul>
      <p className="icon-angle" onClick={() => handleSetDate(1)}>
        <i className="fa fa-angle-right" aria-hidden="true"></i>
        <p>+1</p>
      </p>
      <p className="icon-angle" onClick={() => handleSetDate(7)}>
        <i className="fa fa-angle-right" aria-hidden="true"></i>
        <p>+7</p>
      </p>
    </Container>
  );
}

export default PaginationDate;
