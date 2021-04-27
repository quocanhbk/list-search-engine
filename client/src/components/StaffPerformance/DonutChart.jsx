import React from 'react';
import {Doughnut} from 'react-chartjs-2'
import styled from 'styled-components';

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
    responsive: true,
    plugins: {
      legend: {
        display: false
      },
      
    },
  };

const StyleContainer = styled.div`
    flex: 1;
    position: relative;
    display:flex;
`;

const ContainerDonnut = styled.div`
  flex: 1;
  position: relative;

  padding: 0.3rem;
`;

const CountTask = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  & p{
    text-align: center;
    line-height: 1.5;

    &:first-child{
      font-size: 0.7rem;
    }
    
    &:last-child{
      
    }
  }
`;

//font text color donut chart
const color = []

data.datasets[0].backgroundColor.map((value) =>{
  color.push(value)
}) 

const Annotate = styled.div`
  flex: 1;
  display:flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0.3rem 0;
  padding-left: 0.5rem;
`;

const AnnotateItem = styled.div`
  
  & p{
    text-align: center;

    &:first-child{
      font-size: 0.7rem;
    }
  }
`
function DonutChart() {
    return (
        <StyleContainer>
            <ContainerDonnut>
              <Doughnut 
              data={data}
              options={options}
              width = {200}
              />
              <CountTask>
                <p>Number of Task</p>
                <p>12</p>
              </CountTask>
            </ContainerDonnut>
            <Annotate>
              <AnnotateItem>
                <p>Complete</p>
                <p style={{color: color[0]}}>10(20%)</p>
              </AnnotateItem>
              <AnnotateItem>
                <p>Block</p>
                <p style={{color: color[1]}}>10(20%)</p>
              </AnnotateItem>
              <AnnotateItem>
                <p>InProcess</p>
                <p style={{color: color[2]}}>10(20%)</p>
              </AnnotateItem>
              <AnnotateItem>
                <p>Complete</p>
                <p style={{color: color[3]}}>10(20%)</p>
              </AnnotateItem>
              <AnnotateItem>
                <p>Complete</p>
                <p style={{color: color[4]}}>10(20%)</p>
              </AnnotateItem>
            </Annotate>
        </StyleContainer>
    );
}

export default DonutChart;