import React from 'react'
import data from '../data/contryPoint.json'

const WorldMapPing = () => {
  const pingList = [];
  for(let i = 0; i<data.length; i++){
    let t = data[i];
    pingList.push(
      <span className={"inline-block animate-ping rounded-full p-2 bg-red-500 text-white text-xs relative top-["+t.x+"] left-["+t.y+"]"} id={t.label}>
          <svg className="w-1 h-1 mx-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 13l-7 7-7-7m14-8l-7 7-7-7" />
          </svg>
      </span>
    )
  }


  return (
    <>
      {pingList}
      {/* {lst} */}
    </>
  )
}

export default WorldMapPing