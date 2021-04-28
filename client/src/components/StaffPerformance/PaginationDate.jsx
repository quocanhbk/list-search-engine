import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;

  & .icon-angle{
    color: ${(props) => props.theme.color.text.secondary};
    cursor: pointer;
    padding: 0 0.5rem;
    
    i {
      font-size: 1.5rem;
    }
  }
`;
const StyteDate =styled.div`


  & p{
    font-size: 0.7rem;
  }
`
function PaginationDate() {
  const [date_temp, setDateTemp] = useState([]);
  const [today, setToday] = useState(new Date());

  const RenderDate = () => {
    let list_date = [];
    for (let i = 0; i < 1; i++) {
      let tomorrow = new Date(
        today.getFullYear(),
        today.getMonth(),
        today.getDate() + i
      );
      let dateString = tomorrow.toDateString();
      let date = dateString.slice(8, 10);
      list_date.push({
        tomorrow: tomorrow,
        month: today.getMonth()+ 1,
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

  return (
    <Container>
      <p className="icon-angle" onClick={() => handleSetDate(-1)}>
        <i className="fa fa-angle-left" aria-hidden="true"></i>
      </p>
      <div>
        {date_temp.map((value, index) => {
            return (
              <StyteDate
                key={index}
              >
                <p>{value.date}/{value.month}</p>
              </StyteDate>
            );
          })}
      </div>
      <p className="icon-angle" onClick={() => handleSetDate(1)}>
        <i className="fa fa-angle-right" aria-hidden="true"></i>
      </p>
    </Container>
  );
}

export default PaginationDate;
