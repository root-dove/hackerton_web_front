import React from 'react'
import data from '../data/contryPoint.json'

const WorldItem=(props)=>{
  console.log(props)
  return (
    <span
    style={{
      top: props.x,
      left: props.y
    }}
    className={`inline-block animate-ping rounded-full p-2 bg-red-500 text-white text-xs absolute `}
    
    id={props.label}>
          <svg className="w-1 h-1 mx-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 13l-7 7-7-7m14-8l-7 7-7-7" />
          </svg>
      </span>

  )
}

const WorldMapPing = () => {

  return (
    <>
    {
      data.map((t,i)=>(
        <WorldItem key={i} x={t.x} y={t.y} label={t.label}/>

      ))
    }
      {/* {pingList} */}
      {/* {lst} */}
    </>
  )
}

export default WorldMapPing