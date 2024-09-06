import React from 'react'

const InfomationBox = (props) => {
  return (
    <div className='bg-gray-200 h-full w-full pl-7'>
        <div className='h-[50px] w-[300px] text-gray-400 content-end text-lg m-auto'><p>{props.title}</p></div>
        <div className='w-[300px] h-[70px]  text-4xl font-bold content-center m-auto'><p>1.51 M</p></div>
    </div>
  )
}

export default InfomationBox