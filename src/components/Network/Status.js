import React from 'react'
import InfomationBox from './InfomationBox' 
import InfomationAsset from './InfomationAsset'

const Status = () => {
  return (
    <div className='bg-white w-full h-full'>
        <div className=' w-full h-[200px] flex'>
          <div className='h-full w-[350px]  m-auto content-center'>
            <div className='w-full h-[130px] '>
              <InfomationBox title="네트워크 정보"/>
            </div>
          </div>
          <div className='h-full w-[350px] m-auto content-center'>
            <div className='w-full h-[130px] '>
              <InfomationBox title="네트워크 성능"/>
            </div>
          </div>
          <div className='h-full w-[350px] m-auto content-center'>
            <div className='w-full h-[130px] '>
              <InfomationBox title="대역폭 사용량"/>
            </div>
          </div>
          <div className='h-full w-[350px] m-auto content-center'>
            <div className='w-full h-[130px] '>
              <InfomationBox title="연결 상태"/>
            </div>
          </div>
        </div>
        <div className=' w-full h-[450px]'>

        </div>
        <div className='bg-white w-full h-[250px]'>
          <div className='bg-gray-200 w-[1570px] h-full m-auto pl-4'>
            <InfomationAsset/>
          </div>
        </div>
    </div>
  )
}

export default Status