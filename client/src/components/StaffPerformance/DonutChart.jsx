import React from 'react';
import {Doughnut} from 'react-chartjs-2'
import styled from 'styled-components';
import Context from '../../Context';
import theme from '../../utils/theme'


const StyleContainer = styled.div`
    flex: 1;
    position: relative;
    display:flex;
    height: 90%;
    padding: 1rem 0;
`;

const ContainerDonnut = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex: 2;
  position: relative;
  align-items: center;
  justify-content: center;
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
      color: ${props => props.theme.color.text.secondary};
    }
    
    &:last-child{
      color: ${props => props.theme.color.text.primary};
    }
  }
`;


const Annotate = styled.div`
  flex: 1;
  display:flex;
  flex-direction: column;
  justify-content: space-between;
  padding-left: 0.5rem;
`;

const AnnotateItem = styled.div`
  
  & p{
    text-align: center;

    &:first-child{
      font-size: 0.7rem;
      color: ${props => props.theme.color.text.primary};
    }
  }
`



function DonutChart() {
  const {themeContext} = Context.useContainer()
  const currentTheme = themeContext.isDark ? theme.dark : theme.light
  const data = {
    labels: ['Completed', 'In Progress', 'Pending', 'Blocked', 'Behind'],
    datasets: [
      {
        data: [12, 19, 3, 5, 2],
        backgroundColor: [
          currentTheme.color.fill.success,
          currentTheme.color.fill.info,
          currentTheme.color.fill.warning,
          currentTheme.color.fill.danger,
          currentTheme.color.text.secondary,
        ],
        borderWidth: 0,
        
      },
    ],
  };
  
  //font text color donut chart
  const color = []
  
  data.datasets[0].backgroundColor.map((value) =>{
    color.push(value)
  }) 
  
    const options = {
      responsive: true,
      cutoutPercentage: 50,
      maintainAspectRatio: true,
      plugins: {
        legend: {
          display: false
        },
        
      },
    };
    return (
        <StyleContainer>
            <ContainerDonnut>
              <Doughnut 
              data={data}
              options={options}
              width = "100"
              cutoutPercentage={10}
              />
              <CountTask>
                <p>Number of Task</p>
                <p>12</p>
              </CountTask>
            </ContainerDonnut>
            <Annotate>
              <AnnotateItem>
                <p>Completed</p>
                <p style={{color: color[0]}}>10(20%)</p>
              </AnnotateItem>
              <AnnotateItem>
                <p>In Progress</p>
                <p style={{color: color[1]}}>10(20%)</p>
              </AnnotateItem>
              <AnnotateItem>
                <p>Pending</p>
                <p style={{color: color[2]}}>10(20%)</p>
              </AnnotateItem>
              <AnnotateItem>
                <p>Blocked</p>
                <p style={{color: color[3]}}>10(20%)</p>
              </AnnotateItem>
              <AnnotateItem>
                <p>Behind</p>
                <p style={{color: color[4]}}>10(20%)</p>
              </AnnotateItem>
            </Annotate>
        </StyleContainer>
    );
}

export default DonutChart;