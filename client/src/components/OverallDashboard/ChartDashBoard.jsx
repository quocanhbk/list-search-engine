import styled from "styled-components";
import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import theme from "../../utils/theme";
import Context from "../../Context";
import PaginationDate from "./PaginationDate";

const Container = styled.div`
  width: 100%;
  display:flex;
  flex-direction: column;
  padding: 0.5rem;
  flex: 1;
`;
const Chart = styled.div`
  width: 100%;
  flex: 1;
  padding: 0.5rem;
  border: 1px solid ${props => props.theme.color.border.primary};
  border-radius: 0.5rem;
  background: ${props => props.theme.color.background.primary};
`;
const StyleHeader = styled.div`
  display:flex;
  justify-content: space-between;
  align-items: center;
`
const StyleTitle = styled.div`
    padding: 0.5rem 0;
    font-weight: 700;
`
// data chartjs
const rand = () => Math.floor(Math.random() * 50); // random data


// end data chartjs
function ChartDashBoard(props) {
  const {themeContext} = Context.useContainer()
  const currentTheme = themeContext.isDark ? theme.dark : theme.light

  const genData = () => ({
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        type: "line",
        label: "In progress",
        borderColor: `#76D7EA`,
        borderWidth: 2,
        fill: false,
        data: [rand(), rand(), rand(), rand(), rand(), rand(), rand()],
      },
      {
        type: "bar",
        barThickness: 15,
        borderRadius: 99,
        label: "Complete",
        order: 1,
        backgroundColor: `#56C26A`,
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
        label: "# of task",
        borderColor: `#A59C87`,
        borderWidth: 2,
        fill: false,
        data: [rand(), rand(), rand(), rand(), rand(), rand(), rand()],
      },
    ],
  });
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scale:{
        ticks: {
          maxTicksLimit: 10,
          stepSize: 10,
          beginAtZero: true,
        },
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
    plugins: {
      legend: {
        labels: {
            color: currentTheme.color.text.secondary,
            boxWidth: 12,
            padding: 10
        }
      },
    }
  }

  const [data, setData] = useState(genData());
  useEffect(() => {
    setData(genData());
  }, []);

  return (
    <Container {...props}>
      <StyleHeader>
        <StyleTitle>Weekly Record</StyleTitle>
        <PaginationDate/>
      </StyleHeader>
      <Chart>
        <Bar data={data} options={options} />
      </Chart>
    </Container>
  );
}

export default ChartDashBoard;
