import React, { useState } from 'react';
import { toast } from 'react-toastify';

const LogSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterOptions, setFilterOptions] = useState({
    ip: '',
    port: '',
    eventType: '',
    dateRange: '',
  });

  const handleSearch = () => {
    console.log('검색 실행', searchTerm, filterOptions);
  };

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilterOptions((prevOptions) => ({
      ...prevOptions,
      [name]: value,
    }));
  };

  const log = () => {
    toast.success('로그가 내보내졌다!')
  }
  const backup = () => {
    toast.warning('경고!! 백업 기능 구현 안함 ㅋ')
  }
  const save = () => {
    toast.info('해주겠니?')
  }
  return (
    <div className="p-4 bg-white shadow-md rounded-lg">
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-bold">로그 검색 및 필터링</h3>
        <div className="flex gap-2">
          <button className="bg-green-500 text-white p-2 rounded" onClick={save}>로그 저장 및 보관</button>
          <button className="bg-yellow-500 text-white p-2 rounded" onClick={backup}>로그 백업 및 복원</button>
          <button className="bg-blue-500 text-white p-2 rounded" onClick={log}>로그 내보내기</button>
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-4 mb-4">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="검색어를 입력하세요"
          className="flex-1 min-w-0 border p-2"
        />

        <input
          type="text"
          name="ip"
          value={filterOptions.ip}
          onChange={handleFilterChange}
          placeholder="IP 주소"
          className="flex-1 min-w-0 border p-2"
        />

        <input
          type="number"
          name="port"
          value={filterOptions.port}
          onChange={handleFilterChange}
          placeholder="포트 번호"
          className="flex-1 min-w-0 border p-2"
        />

        <select
          name="eventType"
          value={filterOptions.eventType}
          onChange={handleFilterChange}
          className="flex-1 min-w-0 border p-2"
        >
          <option value="">이벤트 유형</option>
          <option value="traffic">트래픽 로그</option>
          <option value="security">보안 이벤트 로그</option>
          <option value="system">시스템 로그</option>
          <option value="admin">관리자 활동 로그</option>
        </select>

        <input
          type="date"
          name="dateRange"
          value={filterOptions.dateRange}
          onChange={handleFilterChange}
          className="flex-1 min-w-0 border p-2"
        />

        <button
          onClick={handleSearch}
          className="bg-blue-500 text-white p-2 rounded flex-shrink-0"
        >
          검색
        </button>
      </div>
    </div>
  );
};

export default LogSearch;
