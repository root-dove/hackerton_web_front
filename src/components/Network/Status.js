import React from 'react'
import InfomationBox from './InfomationBox' 
import InfomationAsset from './InfomationAsset'
import { px } from 'framer-motion'
import GIF from '../../assets/NetWork.gif'
import { ToastContainer, toast } from 'react-toastify';

const Status = () => {

  const notify = () => toast("단말기 10.100.10.184 에서 이상 행위 탐지");

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
        <div className=' w-full h-[570px]'>
          <img src={GIF} className='w-full h-full' onClick={notify}></img>
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