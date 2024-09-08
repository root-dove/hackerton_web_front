import React, { useState, useEffect, useRef } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import data from "../data/DoughnutData.json"

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart2 = () => {
    const [chartData, setChartData] = useState(data);
    const chartRef = useRef(null);
    const plugins = [{
        beforeDraw: function (chart) {
            var width = chart.width,
                height = chart.height,
                ctx = chart.ctx;
            ctx.restore();
            var fontSize = (height / 200).toFixed(2);
            ctx.font = fontSize + "em sans-serif";
            ctx.textBaseline = "top";
            // find largest value
            let largestValue = 0, total = 0;
            chart.data.datasets[0].data.forEach((value) => {
                if (value > largestValue) {
                    largestValue = value;
                }
                total += value;
            });
            let text = (largestValue / total * 100).toFixed(0) + "%",
            measure = ctx.measureText(text),
            textX = Math.round((width - measure.width) / 2),
                textY = (height - measure.actualBoundingBoxAscent - measure.actualBoundingBoxDescent) / 2;
            ctx.fillText(text, textX, textY);
            ctx.save();
        }
    }]
    const options = {
        plugins: {
            responsive: true,
            legend: {
                display: false,
            },
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
                    value: Math.max(0, Math.min(100, item.value + (Math.random() - 0.5) * 5))
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
            <Doughnut data={finalData} options={options} ref={chartRef} plugins={plugins} />
        </div>
    )
}

export default DoughnutChart2
