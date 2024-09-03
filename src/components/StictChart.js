import React from 'react'

const StictChart = () => {
  return (
    <div className='w-full h-full'>
        <div className='w-auto h-8 font-bold ml-7 mt-20 text-2xl block'>
            <p>China</p>
        </div>
        <div className='flex w-[250px] h-5 ml-7 mt-4'>
            <div className='w-[140px] h-full bg-gray-700 rounded-l-lg'/>
            <div className='w-[110px] h-full bg-gray-200 rounded-r-lg'/>
        </div>
        <div className='w-auto h-8 font-bold ml-7 mt-4 text-sm block '>
            <p>USA</p>
        </div>
        <div className='flex w-[250px] h-3 ml-7'>
            <div className='w-[60px] h-full bg-gray-400 rounded-l-lg'/>
            <div className='w-[190px] h-full bg-gray-200 rounded-r-lg'/>
        </div>
        <div className='w-auto h-8 font-bold ml-7 mt-4 text-sm block'>
            <p>Rusia</p>
        </div>
        <div className='flex w-[250px] h-3 ml-7'>
            <div className='w-[60px] h-full bg-gray-400 rounded-l-lg'/>
            <div className='w-[190px] h-full bg-gray-200 rounded-r-lg'/>
        </div>
        <div className='w-auto h-8 font-bold ml-7 mt-4 text-sm block'>
            <p>Korea</p>
        </div>
        <div className='flex w-[250px] h-3 ml-7'>
            <div className='w-[60px] h-full bg-gray-400 rounded-l-lg'/>
            <div className='w-[190px] h-full bg-gray-200 rounded-r-lg'/>
        </div>
    </div>
    
  )
}

export default StictChart