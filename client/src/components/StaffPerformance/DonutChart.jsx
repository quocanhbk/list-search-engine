import React from 'react';
import {Doughnut} from 'react-chartjs-2'
import styled from 'styled-components';

const data = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple'],
    datasets: [
      {
        data: [12, 19, 3, 5, 2],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
        ],
        borderWidth: 1,
        hoverOffset: 4,
      },
    ],
  };

const StyleContainer = styled.div`
    flex: 1;
`;

DonutChart.propTypes = {
    
};

function DonutChart() {
    return (
        <StyleContainer>
            <Doughnut 
            data={data}
            width={400}
            height={200}
            options={{ maintainAspectRatio: false }}
            />
        </StyleContainer>
    );
}

export default DonutChart;