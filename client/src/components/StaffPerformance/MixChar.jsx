import React, { useEffect, useState } from 'react';
import {Bar} from 'react-chartjs-2'
import styled from 'styled-components';
import Context from '../../Context';
import theme from '../../utils/theme';

const rand = () => Math.floor(Math.random() * 50); // random data



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
    const {themeContext} = Context.useContainer()
    const currentTheme = themeContext.isDark ? theme.dark : theme.light


    const getData = () => ({
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
    const [data, setData] = useState(getData());

    useEffect(() => {
      setData(getData());
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