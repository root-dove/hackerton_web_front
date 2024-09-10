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
        <div className=' w-[1570px] h-[570px] content-center flex m-auto relative' onClick={notify}>
          <div className='h-full w-[270px]'>
            <div className='absolute bg-[url("./img/cloud.png")] w-[150px] h-[180px] top-[200px] left-[110px]' />
          </div>
          <div className='h-full w-[100px] '>
            <div className='absolute bg-[url("./img/wifi.png")] w-[80px] h-[80px] top-[230px] ' />
          </div>
          <div className='h-full w-[1150px]'>
            <div className='w-full h-[50px]'></div>
            <div className='w-full h-[150px] flex'>
              <div className='h-full w-[330px] rounded-tl-[50px] border-r-2 border-t-[12px] border-l-[12px] border-r-gray-400 border-t-blue-950 border-l-blue-950 relative'>
                <div className='absolute bg-[url("./img/switch.png")] w-[120px] h-[105px] top-[-0px] right-[150px]' />
                <div className='absolute bg-[url("./img/pc.png")] w-[106px] h-[105px] bottom-[10px] right-[-50px] bg-white' />
              </div>
              <div className='h-full w-[200px]  border-r-2 border-gray-400 border-t-blue-950 border-t-[12px] relative'>
                
              </div>
              <div className='h-[100px] w-[200px]  border-r-[12px] border-blue-950 border-t-blue-950 border-t-[12px] rounded-tr-[50px] border-b-[12px] border-b-green-400 relative'>
                <div className='absolute bg-[url("./img/pc.png")] w-[106px] h-[105px] top-[25px] left-[-50px] bg-white' />
              </div>
              <div className='h-[100px] w-[200px] border-b-[12px] border-b-green-400  relative'>
                <div className='absolute bg-[url("./img/router.png")] w-[95px] h-[95px] bottom-[-55px] left-[-55px] bg-white' />
                <div className='absolute bg-[url("./img/db.png")] w-[75px] h-[105px] bottom-[-55px] right-[-30px] ' />
              </div>
            </div>
            <div className='w-full h-[75px] border-l-[12px] border-blue-950 flex'>
              <div className='h-full w-[330px] border-b-[12px] border-b-green-400 relative'>
                <div className='absolute bg-[url("./img/server.png")] w-[100px] h-[105px] top-[15px] right-[290px]' />
              </div>
              <div className='h-full w-[200px] border-b-[12px] border-b-green-400 relative'>
                <div className='absolute bg-[url("./img/pc.png")] w-[106px] h-[105px] bottom-[-50px] right-[165px] bg-white' />
                <div className='absolute bg-[url("./img/pc.png")] w-[106px] h-[105px] bottom-[-50px] right-[-35px] bg-white' />
              </div>
            </div>
            <div className='w-full h-[75px] border-l-[12px] border-green-400 relative'>
              <div className='absolute bg-[url("./img/switch.png")] w-[120px] h-[105px] top-[-60px] left-[50px]' />
            </div>
            <div className='w-full h-[150px] flex'>
              <div className='h-full w-[330px] border-r-2 border-r-gray-400 border-b-[12px] rounded-bl-[50px] border-b-green-400 border-l-green-400 border-l-[12px] relative  '>
                <div className='absolute bg-[url("./img/switch.png")] w-[120px] h-[105px] bottom-[-60px] left-[50px]' />
                <div className='absolute bg-[url("./img/pc.png")] w-[106px] h-[105px] top-[0px] right-[-50px] bg-white' />
              </div>
              <div className='h-full w-[200px]  border-r-2 border-r-gray-400 border-b-[12px] border-b-green-400 relative'>
                <div className='absolute bg-[url("./img/pc.png")] w-[106px] h-[105px] top-[0px] right-[-50px] bg-white' />
              </div>
              <div className='h-full w-[200px]  border-r-2 border-r-gray-400 border-b-[12px] border-b-green-400 relative'>
                <div className='absolute bg-[url("./img/pc.png")] w-[106px] h-[105px] top-[0px] right-[-50px] bg-white' />
              </div>
              <div className='h-full w-[200px]  border-r-[12px] border-green-400 border-b-[12px] rounded-br-[50px] relative'>
                <div className='absolute bg-[url("./img/pc.png")] w-[106px] h-[105px] top-[0px] right-[-50px] bg-white' />
              </div>
            </div>
            
          </div>
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