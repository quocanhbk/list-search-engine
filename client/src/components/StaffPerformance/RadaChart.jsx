import React from "react";
import { Radar } from "react-chartjs-2";
import styled from "styled-components";
import Context from "../../Context";
import theme from "../../utils/theme";

const StyleContainer = styled.div`
  
`;


const RadarChart = () => {

  const {themeContext} = Context.useContainer()
  const currentTheme = themeContext.isDark ? theme.dark : theme.light

   const RadarData = {
    labels: [
      "Strategy",
      "Design",
      "Construction",
      "MEPF",
      "Tender",
      "Payment",
      "Contract",
      "Cost",
      "Project Legal",
      "Sales",
      "Marketing",
      "Report",
      "Milestones",
      "Plan",
    ],
    datasets: [
      {
        label: "Complete",
        data: [2, 2, 3, 1, 2, 2, 2, 3, 1, 2, 2, 2, 3, 1],
        backgroundColor: "rgba(40, 167, 69, 0.5)",
        borderColor: "rgba(40, 167, 69, 1)",
        borderWidth: 1,
      },
      {
        label: "Overdue",
        data: [2, 1, 1, 1, 1, 2, 1, 1, 1, 1, 2, 1, 1, 1],
        backgroundColor: "rgba(176, 0, 32, 1)",
        borderColor: "rgba(176, 0, 32, 1)",
        borderWidth: 1,
      },
      {
        label: "Total task",
        data: [5, 6, 4, 4, 3, 5, 7, 8, 3, 4, 5, 5, 6, 4],
        backgroundColor: "rgba(165, 156, 135, 0.5)",
        borderColor: "rgba(165, 156, 135, 1)",
        borderWidth: 1,
      },
    ],
  };
  
   const RadarOptions = {
    elements: {
      point:{
          radius: 0
      }
    },
    scale: {
      angleLines:{
        lineWidth: 5
      },
      ticks: {
        maxTicksLimit: 1,
        beginAtZero: true,
      },
    },
    reponsive: true,
    plugins: {
      legend: {
        labels: {
            color: currentTheme.color.text.secondary,
            boxWidth: 12,
            padding: 10
        }
      },
    }
  };

  return (
    <StyleContainer>
      <Radar data={RadarData} options={RadarOptions} />
    </StyleContainer>
  );
};

export default RadarChart;
