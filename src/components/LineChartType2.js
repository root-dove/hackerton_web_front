import React from 'react'
import { Bar, Doughnut, Line} from "react-chartjs-2"
import { Chart } from 'react-chartjs-2'
import "chart.js/auto"

import revenueData from "../data/revenueData.json"
import sourceData from "../data/sourceData.json"

const LineChartType2 = () => {
    
    return (
        <div className="chart">
      <div className="dataCard revenueCard h-96">
        <Line
          data={{
            labels: revenueData.map((data) => data.label),
            datasets: [
              {
                label: "Revenue",
                data: revenueData.map((data) => data.revenue),
                backgroundColor: "#064FF0",
                borderColor: "#064FF0",
              },
              {
                label: "Cost",
                data: revenueData.map((data) => data.cost),
                backgroundColor: "#FF3030",
                borderColor: "#FF3030",
              },
            ],
          }}
        //   width={"500%"}
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
    )
}

export default LineChartType2