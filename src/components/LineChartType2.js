import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import "chart.js/auto";

import revenueData from "../data/revenueData.json";

const LineChartType2 = () => {
  const [data, setData] = useState(revenueData);

  useEffect(() => {
    const interval = setInterval(() => {
      setData(prevData => {
        const newEntry = {
          label: `${parseInt(prevData[prevData.length - 1].label, 10) + 1}`,
          revenue: Math.max(0, prevData[prevData.length - 1].revenue + Math.floor(Math.random() * 50000) - 25000),
          cost: Math.max(0, prevData[prevData.length - 1].cost + Math.floor(Math.random() * 50000) - 25000),
        };
        if (prevData.length >= 100) {
          prevData.shift();
          return [...prevData, newEntry];
        }
        return [...prevData, newEntry];
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="chart w-[1556px] m-auto">
      <div className="dataCard revenueCard h-72">
        <Line
          data={{
            labels: data.map((item) => item.label),
            datasets: [
              {
                label: "In Bound",
                data: data.map((item) => item.revenue),
                backgroundColor: "#064FF0",
                borderColor: "#064FF0",
              },
              {
                label: "Out Bound",
                data: data.map((item) => item.cost),
                backgroundColor: "#FF3030",
                borderColor: "#FF3030",
              },
            ],
          }}
          options={{
            responsive: true,
            maintainAspectRatio: false,
            elements: {
              line: {
                tension: 0.5,
              },
            },
            plugins: {
              title: {
                text: "Monthly Revenue & Cost",
              },
            },
          }}
        />
      </div>
    </div>
  );
};

export default LineChartType2;