import React from 'react';
import logs from '../../../data/Logs/allLogs.json';

const LogStatistics = () => {
  const totalLogs = logs.length;

  const trafficTypesCount = logs.reduce((acc, log) => {
    acc[log.trafficType] = (acc[log.trafficType] || 0) + 1;
    return acc;
  }, {});

  const protocolCount = logs.reduce((acc, log) => {
    acc[log.protocol] = (acc[log.protocol] || 0) + 1;
    return acc;
  }, {});

  return (
    <div className="p-4 bg-white shadow-md rounded-lg max-w-md w-1/3">
      <h3 className="font-bold mb-4">로그 통계</h3>
      <div className="grid grid-cols-1 gap-4">
        <div className="flex flex-col gap-4">
          <div className="bg-white p-4 shadow rounded text-center">
            <h4 className="text-xl font-bold">총 로그 수</h4>
            <p className="text-3xl font-semibold text-blue-600">{totalLogs}</p>
          </div>

          <div className="bg-white p-4 shadow rounded">
            <h4 className="text-lg font-bold mb-2">트래픽 유형별 로그 수</h4>
            <ul className="space-y-1">
              {Object.entries(trafficTypesCount).map(([type, count]) => (
                <li key={type} className="flex justify-between">
                  <span>{type}:</span>
                  <span className="font-semibold text-gray-800">{count}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white p-4 shadow rounded">
            <h4 className="text-lg font-bold mb-2">프로토콜별 로그 수</h4>
            <ul className="space-y-1">
              {Object.entries(protocolCount).map(([protocol, count]) => (
                <li key={protocol} className="flex justify-between">
                  <span>{protocol}:</span>
                  <span className="font-semibold text-gray-800">{count}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogStatistics;
