import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const ResourceUsageChart = () => {
  const storageUsage = 60.1;
  const memoryUsage = 45.4;

  const storageData = {
    labels: ['Used Storage', 'Free Storage'],
    datasets: [
      {
        data: [storageUsage, 100 - storageUsage],
        backgroundColor: ['#FF6384', '#36A2EB'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB'],
      },
    ],
  };

  const memoryData = {
    labels: ['Used Memory', 'Free Memory'],
    datasets: [
      {
        data: [memoryUsage, 100 - memoryUsage],
        backgroundColor: ['#FFCE56', '#4BC0C0'],
        hoverBackgroundColor: ['#FFCE56', '#4BC0C0'],
      },
    ],
  };

  const plugins = (usage) => [{
    beforeDraw: (chart) => {
      const { ctx, width, height } = chart;
      ctx.restore();
      const fontSize = Math.min(width / 8, 20);
      ctx.font = `${fontSize}px sans-serif`;
      ctx.textBaseline = 'middle';
      ctx.fillStyle = '#333';

      const text = `${usage}%`;
      const textX = Math.round((width - ctx.measureText(text).width) / 2);
      const textY = height / 2;

      ctx.fillText(text, textX, textY);
      ctx.save();
    },
  }]

  const createDoughnutOptions = (usage) => ({
    maintainAspectRatio: true,
    plugins: {
      legend: { display: false },
      tooltip: { enabled: false },
      beforeDraw: (chart) => {
        const { ctx, width, height } = chart;
        ctx.restore();
        const fontSize = Math.min(width / 8, 20);
        ctx.font = `${fontSize}px sans-serif`;
        ctx.textBaseline = 'middle';
        ctx.fillStyle = '#333';

        const text = `${usage}%`;
        const textX = Math.round((width - ctx.measureText(text).width) / 2);
        const textY = height / 2;

        ctx.fillText(text, textX, textY);
        ctx.save();
      },
    },
  });

  return (
    <div className="p-4 bg-white shadow-md rounded-lg flex flex-col gap-4">
      <h3 className="font-bold mb-2">시스템 자원 사용 현황</h3>
      <div className="flex flex-col md:flex-row gap-4 justify-between">
        <div className="w-full md:w-1/2 bg-white p-4 shadow rounded text-center">
          <h4 className="text-lg font-bold mb-2">저장 용량 사용 현황</h4>
          <div className="flex justify-center items-center" style={{ height: '250px' }}>
            <Doughnut data={storageData} options={createDoughnutOptions(storageUsage)} plugins={plugins(storageUsage)} />
          </div>
        </div>
        <div className="w-full md:w-1/2 bg-white p-4 shadow rounded text-center">
          <h4 className="text-lg font-bold mb-2">메모리 사용 현황</h4>
          <div className="flex justify-center items-center" style={{ height: '250px' }}>
            <Doughnut data={memoryData} options={createDoughnutOptions(memoryUsage)} plugins={plugins(memoryUsage)}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResourceUsageChart;
