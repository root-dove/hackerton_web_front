import React, { useState, useEffect, useRef } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import data from "../data/DoughnutData.json"

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart2 = () => {
    const [chartData, setChartData] = useState(data);
    const chartRef = useRef(null);

    const options = {
        plugins: {
          responsive: true,
          legend: {
            display: false,
          }
        },
        cutout: chartData.map((item) => item.cutout),
    };
    
    const finalData = {
        labels: chartData.map((item) => item.label),
        datasets: [
            {
                data: chartData.map((item) => Math.round(item.value)),
                backgroundColor: chartData.map((item) => item.color),
                borderColor: chartData.map((item) => item.color),
                borderWidth: 1,
                dataVisibility: new Array(chartData.length).fill(true),
            },
        ],
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setChartData(prevData => 
                prevData.map(item => ({
                    ...item,
                    value: Math.max(0, Math.min(100, item.value + (Math.random() - 0.45) * 5))
                }))
            );
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        if (chartRef.current) {
            chartRef.current.update();
        }
    }, [chartData]);

    return (
        <div className="ml-7 w-64 mt-12">
            <Doughnut data={finalData} options={options} ref={chartRef} />
        </div>
    )
}

export default DoughnutChart2
