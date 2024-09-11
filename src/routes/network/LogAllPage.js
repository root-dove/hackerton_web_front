import React from 'react'
import LogSearch from '../../components/Log/LogSearch'
import LogList from '../../components/Log/LogList'


const LogAllPage = () => {
  return (
    <div className="flex">
      <div className="flex-1 p-4 space-y-4">
        <LogSearch />
        <LogList />
      </div>
    </div>
  )
}

export default LogAllPage