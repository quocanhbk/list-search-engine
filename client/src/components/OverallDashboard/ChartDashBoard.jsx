import styled from "styled-components";
import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";

const Container = styled.div`
  width: 100%;
  display:flex;
  flex-direction: column;
  padding: 2% 0;
`;
const Chart = styled.div`
  width: 100%;
  display:flex;
  padding: 10% 0;
`;
const StyleTitle = styled.div`
    border-bottom: 1px solid;
    font-family: Roboto;
    font-style: normal;
    font-size: 1rem;
    padding: 0.5rem 0;
    font-weight: bold;
    text-transform: uppercase;
`
// data chartjs
const rand = () => Math.floor(Math.random() * 50); // random data
const genData = () => ({
  labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
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
  responsive: true,
  maintainAspectRatio: true,
  scale:{
      ticks: {
        maxTicksLimit: 10,
        stepSize: 10,
        beginAtZero: true,
      },
  },
  legend: {
    labels: {
        fontColor: "red",
        fontSize: 18,
        fill: false
    },
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
}
}

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
        <Bar height="220" data={data} options={options} />
      </Chart>
    </Container>
  );
}

export default ChartDashBoard;
