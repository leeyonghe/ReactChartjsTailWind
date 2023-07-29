import React from "react";
// import logo from "./logo.svg";
import "./App.css";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import { Bar } from "react-chartjs-2";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function App() {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "Chart.js Bar Chart",
      },
    },
  };

  const labels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
  ];

  const data = {
    labels,
    datasets: [
      {
        label: "Dataset 1",
        data: labels.map(() => 1),
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: "Dataset 2",
        data: labels.map(() => 2),
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };

  return (
    <div className="App w-screen p-0 m-0 grid grid-cols-2">
      <div>
        <Bar options={options} data={data} />
      </div>
      <div>
        <Bar options={options} data={data} />
      </div>
      <div>
        <Bar
          options={{
            indexAxis: "y" as const,
            elements: {
              bar: {
                borderWidth: 2,
              },
            },
            responsive: true,
            plugins: {
              legend: {
                position: "right" as const,
              },
              title: {
                display: true,
                text: "Chart.js Horizontal Bar Chart",
              },
            },
          }}
          data={{
            labels,
            datasets: [
              {
                label: "Dataset 1",
                data: labels.map(() => 1),
                borderColor: "rgb(255, 99, 132)",
                backgroundColor: "rgba(255, 99, 132, 0.5)",
              },
              {
                label: "Dataset 2",
                data: labels.map(() => 2),
                borderColor: "rgb(53, 162, 235)",
                backgroundColor: "rgba(53, 162, 235, 0.5)",
              },
            ],
          }}
        />
      </div>
      <div>
      <Bar
          options={{
            indexAxis: "y" as const,
            elements: {
              bar: {
                borderWidth: 2,
              },
            },
            responsive: true,
            plugins: {
              legend: {
                position: "right" as const,
              },
              title: {
                display: true,
                text: "Chart.js Horizontal Bar Chart",
              },
            },
          }}
          data={{
            labels,
            datasets: [
              {
                label: "Dataset 1",
                data: labels.map(() => 1),
                borderColor: "rgb(255, 99, 132)",
                backgroundColor: "rgba(255, 99, 132, 0.5)",
              },
              {
                label: "Dataset 2",
                data: labels.map(() => 2),
                borderColor: "rgb(53, 162, 235)",
                backgroundColor: "rgba(53, 162, 235, 0.5)",
              },
            ],
          }}
        />
      </div>
    </div>
  );
}

export default App;
