import styled from "styled-components";
import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";

const Container = styled.div`
  margin-top: 6%;
  width: 100%;
`;
const Header = styled.div`
  text-transform: uppercase;
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  line-height: 19px;
  color: #807660;
`;
const Chart = styled.div`
    width: 100%;
    height: 200px;
`;

// data chartjs
const rand = () => Math.floor(Math.random() * 255); // random data
const genData = () => ({
  labels: ["Mon", "Tue", "Wed", "Fri", "Fri", "Thu", "Sun"],
  datasets: [
    {
      type: "line",
      label: "In progress",
      borderColor: `#1E53BD`,
      borderWidth: 2,
      fill: false,
      data: [rand(), rand(), rand(), rand(), rand(), rand(), rand()],
    },
    {
      type: "bar",
      label: "Complete",
      backgroundColor: `#28A745`,
      data: [rand(), rand(), rand(), rand(), rand(), rand(), rand()],
      borderColor: "white",
      borderWidth: 2,
    },
    {
        type: "line",
        label: "Overdue",
        borderColor: `red`,
        borderWidth: 2,
        fill: false,
        data: [rand(), rand(), rand(), rand(), rand(), rand(), rand()],
      },
      {
        type: "line",
        label: "Number of task",
        borderColor: `#A59C87`,
        borderWidth: 2,
        fill: false,
        data: [rand(), rand(), rand(), rand(), rand(), rand(), rand()],
      },
  ],
});
const options = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
};

// end data chartjs
function ChartDashBoard(props) {
  const [data, setData] = useState(genData());
  useEffect(() => {
    setData(genData())
  }, []);

  return (
    <Container {...props}>
      <Header>
        <h3>weekly record</h3>
      </Header>
      <Chart>
        <Bar height="300px" data={data} options={options} />
      </Chart>
    </Container>
  );
}

export default ChartDashBoard;
