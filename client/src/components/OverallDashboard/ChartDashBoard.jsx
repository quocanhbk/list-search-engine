import styled from "styled-components";
import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";

const Container = styled.div`
  width: 100%;
`;
const Chart = styled.div`
  width: 100%;
  height: 200px;
`;
const StyleTitle = styled.div`
    border-bottom: 1px solid;
    font-size: 1rem;
    text-transform: uppercase;
`
// data chartjs
const rand = () => Math.floor(Math.random() * 255); // random data
const genData = () => ({
  labels: ["Mon", "Tue", "Wed", "Fri", "Fri", "Thu", "Sun"],
  datasets: [
    {
      type: "line",
      label: "In progress",
      borderColor: `rgba(30, 83, 189, 1)`,
      borderWidth: 2,
      fill: false,
      data: [rand(), rand(), rand(), rand(), rand(), rand(), rand()],
    },
    {
      type: "bar",
      label: "Complete",
      backgroundColor: `rgba(40, 167, 69, 0.5)`,
      data: [rand(), rand(), rand(), rand(), rand(), rand(), rand()],
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
    setData(genData());
  }, []);

  return (
    <Container {...props}>
      <StyleTitle>Weekly record</StyleTitle>
      <Chart>
        <Bar height="300px" data={data} options={options} />
      </Chart>
    </Container>
  );
}

export default ChartDashBoard;
