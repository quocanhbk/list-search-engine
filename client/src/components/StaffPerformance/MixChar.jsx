import React, { useEffect, useState } from 'react';
import {Bar} from 'react-chartjs-2'
import styled from 'styled-components';

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
    // maintainAspectRatio: true,
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

const StyleContainer = styled.div`
    flex: 1;
    height: 85%;
    position: relative;
    display:flex;
`;

const ContainerDonnut = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display:flex;
  align-items: center;
  padding: 0.3rem;
  margin: 0.5rem;
`;

function MixChart() {
    const [data, setData] = useState(genData());
    useEffect(() => {
      setData(genData());
    }, []);


    return (
        <StyleContainer>
            <ContainerDonnut>
                <Bar height="220" data={data} options={options}/>
            </ContainerDonnut>
        </StyleContainer>
    );
}

export default MixChart;