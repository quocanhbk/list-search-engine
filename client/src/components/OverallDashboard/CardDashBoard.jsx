/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import endOfWeek from 'date-fns/endOfWeek';
import startOfWeek from 'date-fns/startOfWeek';
import { format } from 'date-fns';
import { useGetProjectPerformance, useGetProjectPerformanceByDate } from '../../hooks/taskServices/useGetProjectPerformance';
import { getFader } from '../../utils/color';
import ChartDashBoard from './ChartDashBoard';
import TableDashboard from './TableDashboard';

const Container = styled.div`
  background-color: ${(props) => props.theme.color.background.secondary};
  box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%),
    0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);
  border-radius: 0.5rem;
  border: 1px solid ${(props) => props.theme.color.border.primary};
  flex: 1;
  display: flex;
  flex-direction: column;
`;
const Title = styled.h3`
  font-weight: 500;
  border-bottom: 1px solid ${(props) => props.theme.color.border.primary};
  padding: 0.5rem;
  text-align: center;
  background-color: ${(props) =>
    getFader(props.theme.color.border.primary, 0.5)};
`;
const CardDashBoard = (props) => {
  const today = new Date();
  const weekStart = format(startOfWeek(today), 'Y-MM-dd');
  const weekEnd = format(endOfWeek(today), 'Y-MM-dd');
  const [overallData, loading] = useGetProjectPerformance(props.project.value);
  const [byDateData, loading2] = useGetProjectPerformanceByDate(props.project.value, weekStart, weekEnd);
  console.log(byDateData);
  return loading || loading2 ? (
    <div> Loading...</div>
  ) : (
    <Container {...props}>
      <Title>{props.project.name}</Title>
      <TableDashboard data={overallData}/>
      <ChartDashBoard data={byDateData}/>
    </Container>
  );
};

export default CardDashBoard;
