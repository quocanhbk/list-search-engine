import React from 'react';
import { Radar } from 'react-chartjs-2';
import styled from 'styled-components';


const StyleContainer = styled.div`

`

const data = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple'],
    datasets: [
      {
        data: [12, 19, 3, 5, 2],
        backgroundColor: [
          '#28A745',
          '#174091',
          '#FFC107',
          '#B00020',
          '#C4C4C4',
        ],
        borderWidth: 0,
      },
    ],
  };

const options = {
  scale: {
    ticks: { beginAtZero: true },
  },
};

const RadarChart = () => {
    
    return(
        <StyleContainer>
            <Radar data={data} options={options} />
        </StyleContainer>
    )
}

export default RadarChart