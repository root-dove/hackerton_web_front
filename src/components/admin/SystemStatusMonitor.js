import React, { useEffect, useState } from 'react';
import { Line, Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, LineElement, ArcElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  LineElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

const SystemStatusMonitor = () => {
  const [cpuUsage, setCpuUsage] = useState(0);
  const [memoryUsage, setMemoryUsage] = useState(0);
  const [diskUsage, setDiskUsage] = useState(0);

  // 더미 데이터 업데이트 함수 (실제 API 호출로 대체 가능)
  const fetchSystemData = () => {
    setCpuUsage(Math.random() * 100); // 0~100 사이의 랜덤 값
    setMemoryUsage(Math.random() * 100); // 0~100 사이의 랜덤 값
    setDiskUsage(Math.random() * 100); // 0~100 사이의 랜덤 값
  };

  useEffect(() => {
    // 10초마다 데이터 업데이트
    const interval = setInterval(fetchSystemData, 10000);
    return () => clearInterval(interval);
  }, []);

  const cpuData = {
    labels: ['CPU 사용량'],
    datasets: [
      {
        data: [cpuUsage, 100 - cpuUsage],
        backgroundColor: ['#FF6384', '#E0E0E0'],
        borderColor: ['#FF6384', '#E0E0E0'],
        borderWidth: 1,
      },
    ],
  };

  const memoryData = {
    labels: ['메모리 사용량'],
    datasets: [
      {
        data: [memoryUsage, 100 - memoryUsage],
        backgroundColor: ['#36A2EB', '#E0E0E0'],
        borderColor: ['#36A2EB', '#E0E0E0'],
        borderWidth: 1,
      },
    ],
  };

  const diskData = {
    labels: ['디스크 사용량'],
    datasets: [
      {
        data: [diskUsage, 100 - diskUsage],
        backgroundColor: ['#FFCE56', '#E0E0E0'],
        borderColor: ['#FFCE56', '#E0E0E0'],
        borderWidth: 1,
      },
    ],
  };

  const lineData = {
    labels: Array.from({ length: 10 }, (_, i) => `T-${10 - i}`),
    datasets: [
      {
        label: 'CPU 사용량',
        data: Array.from({ length: 10 }, () => Math.random() * 100),
        borderColor: '#FF6384',
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        fill: true,
      },
      {
        label: '메모리 사용량',
        data: Array.from({ length: 10 }, () => Math.random() * 100),
        borderColor: '#36A2EB',
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        fill: true,
      },
      {
        label: '디스크 사용량',
        data: Array.from({ length: 10 }, () => Math.random() * 100),
        borderColor: '#FFCE56',
        backgroundColor: 'rgba(255, 206, 86, 0.2)',
        fill: true,
      },
    ],
  };

  return (
    <div className="p-4 bg-white shadow-md rounded-lg">
      <h1 className="text-2xl font-bold mb-4">시스템 상태 모니터링</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
        <div className="bg-white p-4 shadow rounded flex items-center justify-center">
          <div className="w-48 h-48">
            <Doughnut data={cpuData} options={{ responsive: true, plugins: { legend: { position: 'top' } } }} />
          </div>
          <div className="text-center mt-2">
            <h3 className="text-xl font-semibold">CPU 사용량</h3>
            <p className="text-2xl font-bold">{cpuUsage.toFixed(2)}%</p>
          </div>
        </div>

        <div className="bg-white p-4 shadow rounded flex items-center justify-center">
          <div className="w-48 h-48">
            <Doughnut data={memoryData} options={{ responsive: true, plugins: { legend: { position: 'top' } } }} />
          </div>
          <div className="text-center mt-2">
            <h3 className="text-xl font-semibold">메모리 사용량</h3>
            <p className="text-2xl font-bold">{memoryUsage.toFixed(2)}%</p>
          </div>
        </div>

        <div className="bg-white p-4 shadow rounded flex items-center justify-center">
          <div className="w-48 h-48">
            <Doughnut data={diskData} options={{ responsive: true, plugins: { legend: { position: 'top' } } }} />
          </div>
          <div className="text-center mt-2">
            <h3 className="text-xl font-semibold">디스크 사용량</h3>
            <p className="text-2xl font-bold">{diskUsage.toFixed(2)}%</p>
          </div>
        </div>
      </div>

      <div className="bg-white p-4 shadow rounded h-60">
        <Line data={lineData} options={{ responsive: true, maintainAspectRatio: false, plugins: { legend: { position: 'top' } } }} />
      </div>
    </div>
  );
};

export default SystemStatusMonitor;
