import React from 'react'

function Article(props) {
  const logList = [];
  for (let i = 0; i < 8; i++) {
    if (i % 2 == 0) {
      logList.push(
        <div className='bg-gray-300 w-full h-5'></div>
      )
    } else {
      logList.push(
        <div className='bg-white w-full h-5'></div>
      )
    }
  }
  return <article className='w-[800px] bg-gray-200'>
    <div className='h-[15px] article-top-extra'></div>
    <div className='w-[780px] h-[410px] m-auto article-top-content'>
      <div className='h-[200px] flex'>
        <div className='h-full w-[380px] flex bg-white article-top-left-content'>
          <div className='w-2 h-full left-extra'></div>
          <div className='w-full'>
            <div className='w-full h-7 text-sm'><p>Top Threats</p></div>
            <div className='w-full h-16 '></div>
            <div className='w-full h-7 text-sm'><p>Threats Timeline</p></div>
          </div>
        </div>
        <div className='h-full w-[380px] bg-white ml-[10px] article-top-right-content'></div>
      </div>
      <div className='bg-white w-[770px] h-[200px] mt-3 article-bottom-content'>
        <div className='h-6 text-sm ml-2'><p>Log Event</p></div>
        <div className='bg-black w-[100px] h-1'></div>
        <div className='flex h-7 align-bottom text-center'>
          <div className='text-[10px] leading-[40px] w-16 ml-2'>Date</div>
          <div className='text-[10px] leading-[40px] w-10'>NC</div>
          <div className='text-[10px] leading-[40px] w-16'>IP</div>
          <div className='text-[10px] leading-[40px] w-[220px]'>Vulnable Content</div>
          <div className='text-[10px] leading-[40px] w-[220px]'>Payload</div>
        </div>
        {logList}
      </div>
    </div>
  </article>
}

export default Article