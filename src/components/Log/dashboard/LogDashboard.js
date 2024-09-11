import React from 'react';
import LogStatistics from './LogStatistics';
import StorageAndMemoryStats from './StorageAndMemoryStats';
import logs from '../../../data/Logs/allLogs.json';
import { Line, Bar, Doughnut } from 'react-chartjs-2';
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

  const lineChartData = logs.map((log, index) => ({
    x: index,
    y: log.id, // 예를 들어 로그의 id를 시퀀스화하여 사용 (실제 시간 데이터를 사용할 수 있음)
  }));

  // 데이터 설정
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
    labels: lineChartData.map((data) => data.x),
    datasets: [
      {
        label: '시간에 따른 로그 발생 수',
        data: lineChartData.map((data) => data.y),
        borderColor: '#36A2EB',
        fill: false,
      },
    ],
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
            <Doughnut
              data={protocolData}
              options={{
                responsive: true,
                plugins: { legend: { position: 'top' } },
              }}
            />
          </div>
        </div>

        <div className="bg-white p-4 shadow rounded flex-grow" style={{ flexBasis: '60%', maxWidth: '60%' }}>
          <Line
            data={lineData}
            options={{
              responsive: true,
              plugins: { legend: { position: 'top' } },
            }}
          />
        </div>
      </div>
    </>
  );
};

export default LogDashboard;
