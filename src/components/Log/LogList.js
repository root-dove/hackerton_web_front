// src/components/LogList.js
import React, { useState } from 'react';
import logs from '../../data/Logs/allLogs.json';
import LogDetail from './LogDetail';

const exampleLogs = logs;

const LogList = () => {
  const [logs] = useState(exampleLogs);
  const [selectedLog, setSelectedLog] = useState(null);

  const handleLogClick = (log) => {
    setSelectedLog(log);
  };

  return (
    <div className="p-4 bg-white shadow-md rounded-lg">
      <h3 className="font-bold mb-2">로그 리스트</h3>
      <div className="overflow-x-auto max-h-96">
        <table className="min-w-full bg-white">
          <thead className="bg-gray-100 sticky top-0">
            <tr>
              <th className="py-2 px-4 text-left">출발지 IP</th>
              <th className="py-2 px-4 text-left">목적지 IP</th>
              <th className="py-2 px-4 text-left">포트 번호</th>
              <th className="py-2 px-4 text-left">프로토콜</th>
              <th className="py-2 px-4 text-left">트래픽 유형</th>
              <th className="py-2 px-4 text-left">차단 여부</th>
            </tr>
          </thead>
          <tbody>
            {logs.map((log, index) => (
              <tr
                key={index}
                className="border-t cursor-pointer hover:bg-gray-50"
                onClick={() => handleLogClick(log)}
              >
                <td className="py-2 px-4">{log.sourceIP}</td>
                <td className="py-2 px-4">{log.destinationIP}</td>
                <td className="py-2 px-4">{log.port}</td>
                <td className="py-2 px-4">{log.protocol}</td>
                <td className="py-2 px-4">{log.trafficType}</td>
                <td className="py-2 px-4">
                    {log.blocked === "allow" ? (
                        <p className="rounded-full bg-green-500 w-4 h-4 mt-1"></p>
                    ) : (
                        <p className="rounded-full bg-red-500 w-4 h-4 mt-1"></p>
                    )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <LogDetail log={selectedLog} />
    </div>
  );
};

export default LogList;
