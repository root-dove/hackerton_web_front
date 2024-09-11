import React from 'react';
import LogStatistics from './LogStatistics';
import StorageAndMemoryStats from './StorageAndMemoryStats';
import logs from '../../../data/Logs/allLogs.json';
import { Line, Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement, PointElement, LineElement } from 'chart.js';
import ResourceUsageChart from './ResourceUsageChart';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  PointElement,
  LineElement
);

const getLogCountsByTime = (logs) => {
  const logCounts = logs.reduce((acc, log) => {
    try {
      const date = new Date(log.timestamp);
      if (isNaN(date.getTime())) throw new Error("Invalid Date");

      const time = date.toISOString().slice(11, 16);
      acc[time] = (acc[time] || 0) + 1;
    } catch (error) {
      console.error("Error processing timestamp:", log.timestamp, error);
    }
    return acc;
  }, {});

  const labels = Object.keys(logCounts);
  const data = Object.values(logCounts);

  return { labels, data };
};

const LogDashboard = () => {
  const totalLogs = logs.length;

  const trafficTypesCount = logs.reduce((acc, log) => {
    acc[log.trafficType] = (acc[log.trafficType] || 0) + 1;
    return acc;
  }, {});

  const protocolCount = logs.reduce((acc, log) => {
    acc[log.protocol] = (acc[log.protocol] || 0) + 1;
    return acc;
  }, {});

  const { labels: lineChartLabels, data: lineChartData } = getLogCountsByTime(logs);

  const trafficData = {
    labels: Object.keys(trafficTypesCount),
    datasets: [
      {
        label: '트래픽 유형별 로그 수',
        data: Object.values(trafficTypesCount),
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
      },
    ],
  };

  const protocolData = {
    labels: Object.keys(protocolCount),
    datasets: [
      {
        label: '프로토콜별 로그 수',
        data: Object.values(protocolCount),
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
      },
    ],
  };

  const lineData = {
    labels: lineChartLabels,
    datasets: [
      {
        label: 'Log Count',
        data: lineChartData,
        fill: false,
        borderColor: 'rgba(75,192,192,1)',
        tension: 0.1,
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
    scales: {
      x: {
        title: {
          display: true,
          text: 'Time',
        },
      },
      y: {
        title: {
          display: true,
          text: 'Log Count',
        },
        beginAtZero: true,
      },
    },
    plugins: {
      legend: {
        display: true,
      },
    },
  };

  const storageUsage = 120;
  const memoryUsage = 8;

  return (
    <>
      <div className="flex flex-col lg:flex-row gap-4 w-full">
        <LogStatistics
          totalLogs={totalLogs}
          trafficData={trafficData}
          protocolData={protocolData}
          trafficTypesCount={trafficTypesCount}
          protocolCount={protocolCount}
        />

        <StorageAndMemoryStats storageUsage={storageUsage} memoryUsage={memoryUsage} />
        <ResourceUsageChart />
      </div>

      <div className="flex justify-center mt-4 gap-4">
        <div className="bg-white p-4 shadow rounded flex flex-col gap-4 w-full max-w-md flex-grow">
          <div className="w-full h-60 flex justify-center items-center">
            <Bar
              data={trafficData}
              options={{
                responsive: true,
                plugins: { legend: { position: 'top' } },
              }}
            />
          </div>
          <div className="w-full h-60 flex justify-center items-center">
            <Bar
              data={protocolData}
              options={{
                responsive: true,
                plugins: { legend: { position: 'top' } },
              }}
            />
          </div>
        </div>

        <div className="bg-white p-4 shadow rounded flex-grow h-108">
          <Line
            data={lineData}
            options={options}
          />
        </div>
      </div>
    </>
  );
};

export default LogDashboard;
