import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 85%;
  text-align: right;
`;
const Ul = styled.ul`
  display: flex;
  flex-wrap: wrap;
  color: #807660;
  align-items: center;
  right: 0;
  i {
    font-size: 50px;
  }
  P.icon-angle {
    padding: 15px;
    text-align: center;
    color: #a59c87;
    cursor: pointer;
  }
  .active_pagination {
    color: #ffc107;
  }
`;
const Li = styled.li`
  padding: 0% 2%;
  text-align: center;
  list-style: none;
  cursor: pointer;
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
      let day = dateString.slice(0, 3);
      let month = dateString.slice(3, 7);
      let date = dateString.slice(8, 10);
      list_date.push({
        tomorrow: tomorrow,
        day: day,
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
  };
  return (
    <Container>
      <Ul>
        <p className="icon-angle" onClick={() => handleSetDate(-7)}>
          <i className="fa fa-angle-left" aria-hidden="true"></i>
          <p>-7</p>
        </p>
        <p className="icon-angle" onClick={() => handleSetDate(-1)}>
          <i className="fa fa-angle-left" aria-hidden="true"></i>
          <p>-1</p>
        </p>
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
              <p>{value.day}</p>
              <p>{value.month}</p>
            </Li>
          );
        })}
        <p className="icon-angle" onClick={() => handleSetDate(1)}>
          <i className="fa fa-angle-right" aria-hidden="true"></i>
          <p>+1</p>
        </p>
        <p className="icon-angle" onClick={() => handleSetDate(7)}>
          <i className="fa fa-angle-right" aria-hidden="true"></i>
          <p>+7</p>
        </p>
      </Ul>
    </Container>
  );
}

export default PaginationDate;
