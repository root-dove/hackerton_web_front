import React from 'react'

const LogShow = () => {
    const logList = [];
    for(let i = 0; i < 7;i++){
        if(i%2==0){
        logList.push(
            <div className='bg-gray-300 w-full h-5 flex align-bottom text-center'>
                <div className='text-[15px] w-[160px] ml-2'>24.10.8 12:03</div>
                <div className='text-[15px] w-[160px]'>KR</div>
                <div className='text-[15px] w-[160px]'>160.182.0.3</div>
                <div className='text-[15px] w-[520px]'>CVE-2024-3320</div>
                <div className='text-[15px] w-[420px]'>img src="#" onerror=alert(document.cookie)</div>
            </div>
        )
        }else{
        logList.push(
            <div className='bg-white w-full h-5 flex align-bottom text-center'>
                <div className='text-[15px] w-[160px] ml-2'>24.10.8 12:03</div>
                <div className='text-[15px] w-[160px]'>China</div>
                <div className='text-[15px] w-[160px]'>80.130.120.3</div>
                <div className='text-[15px] w-[520px]'>KVE-2023-3320</div>
                <div className='text-[15px] w-[420px]'>iframe src="#" onerror=alert(document.cookie)</div>
            </div>
        )
        }
    }
  return (
    <div>
        <div className='w-auto h-16 font-bold ml-7 mt-4 text-2xl block content-center'><p>Top Traffic</p></div>
        <div className='flex h-8 align-bottom text-center'>
          <div className='text-[15px] leading-[40px] w-[160px] ml-2'>Date</div>
          <div className='text-[15px] leading-[40px] w-[160px]'>NC</div>
          <div className='text-[15px] leading-[40px] w-[160px]'>IP</div>
          <div className='text-[15px] leading-[40px] w-[520px]'>Vulnable Content</div>
          <div className='text-[15px] leading-[40px] w-[420px]'>Payload</div>
        </div>
        {logList}
    </div>
  )
}

export default LogShow