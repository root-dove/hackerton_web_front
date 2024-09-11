import React from 'react';

const StorageAndMemoryStats = ({ storageUsage, memoryUsage }) => {
  return (
    <div className="bg-white p-4 shadow rounded w-1/3">
      <h4 className="text-xl font-bold mb-4">시스템 자원 사용 현황</h4>
      <div className="flex flex-col gap-4">
        <div className="bg-gray-100 p-4 rounded">
          <h5 className="text-lg font-semibold">로그 저장 용량</h5>
          <p className="text-blue-600 font-bold">{storageUsage} GB 사용 중</p>
        </div>
        <div className="bg-gray-100 p-4 rounded">
          <h5 className="text-lg font-semibold">메모리 사용량</h5>
          <p className="text-blue-600 font-bold">{memoryUsage} GB 사용 중</p>
        </div>
      </div>
    </div>
  );
};

export default StorageAndMemoryStats;
