import React from "react";
import { Radar } from "react-chartjs-2";
import styled from "styled-components";

const StyleContainer = styled.div``;
const color = "red";
const data = {
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

const options = {
  element:{
    borderColor: "#FFFFFF",
    color: "#FFFFFF",
    backgroundColor: "#FFFFFF"
  },
  scale: {
    ticks: {
      maxTicksLimit: 1,
      beginAtZero: true,
      backgroundColor: color
    },
  },
  gridLines: {
    display: false,
  },
  reponsive: true,
};

const RadarChart = () => {
  return (
    <StyleContainer>
      <Radar data={data} options={options} />
    </StyleContainer>
  );
};

export default RadarChart;
