import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import data from "../data/DoughnutData.json"

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart2 = () => {
    const options = {
        plugins: {
          responsive: true,
          legend: {
            display: false,
          }
        },
        cutout: data.map((item) => item.cutout),
    };
    
    const finalData = {
        labels: data.map((item) => item.label),
        datasets: [
            {
                data: data.map((item) => Math.round(item.value)),
                backgroundColor: data.map((item) => item.color),
                borderColor: data.map((item) => item.color),
                borderWidth: 1,
                dataVisibility: new Array(data.length).fill(true),
            },
        ],
    };
    return (
        <div className="ml-7 w-64 mt-12">
            <Doughnut data={finalData} options={options} />
        </div>
    )
}

export default DoughnutChart2