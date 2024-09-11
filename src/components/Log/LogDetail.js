// src/components/LogDetail.js
import React from 'react';

const LogDetail = ({ log }) => {
  if (!log) {
    return <div className="p-4 bg-white shadow-md rounded-lg">로그를 선택하세요.</div>;
  }
  else{
    console.log(log.packet)
  }
  return (
    <div className="p-4 bg-white shadow-md rounded-lg mt-4 flex">
        <div className="w-1/2 pr-4">
            <h3 className="font-bold mb-4">로그 상세 보기</h3>
            <div className="mb-4">
            <p>
                <strong>출발지 IP:</strong> {log.sourceIP}
            </p>
            <p>
                <strong>목적지 IP:</strong> {log.destinationIP}
            </p>
            <p>
                <strong>포트 번호:</strong> {log.port}
            </p>
            <p>
                <strong>프로토콜:</strong> {log.protocol}
            </p>
            <p>
                <strong>트래픽 유형:</strong> {log.trafficType}
            </p>
            <p>
                <strong>차단 여부:</strong> {log.blocked}
            </p>
            </div>
        </div>
        <div className="w-1/2 pl-4 border-l">
        <h4 className="font-bold mb-2">네트워크 패킷</h4>
        {/* <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto max-h-64"></pre> */}
        <pre className="bg-gray-900 text-green-200 p-4 rounded text-sm overflow-x-auto max-h-64 font-mono whitespace-pre-wrap">
            {log.packet || '패킷 데이터를 불러올 수 없습니다.'}
        </pre>
        </div>

    </div>
  );
};

export default LogDetail;
