import React from 'react'
import data from '../../data/Asset.json'

const AssetData = (props) =>{
    return (
        <ol className='w-[1500px] h-[40px] m-auto flex mt-1'>
            <li className='w-[100px] h-[40px]  bg-white content-center text-1xl font-bold'><p className='table w-auto m-auto'>{props.Id}</p></li>
            <li className='w-[200px] h-[40px]  bg-white content-center text-1xl font-bold'><p className='table w-auto m-auto'>{props.Device}</p></li>
            <li className='w-[300px] h-[40px]  bg-white content-center text-1xl font-bold'><p className='table w-auto m-auto'>{props.Ip}</p></li>
            <li className='w-[150px] h-[40px]  bg-white content-center text-1xl font-bold'><p className='table w-auto m-auto'>{props.Port}</p></li>
            <li className='w-[400px] h-[40px]  bg-white content-center text-1xl font-bold'><p className='table w-auto m-auto'>{props.Description}</p></li>
            <li className='w-[220px] h-[40px]  bg-white content-center text-1xl font-bold'><p className='table w-auto m-auto'>{props.Date}</p></li>
            <li className='w-[150px] h-[40px]  bg-white content-center text-1xl font-bold text-green-600'><p className='table w-auto m-auto'>{props.Status}</p></li>
        </ol>
    )
}

const InfomationAsset = () => {
  return (
    <>
        <div className='w-full h-[60px] text-1xl font-bold content-center'><p>기기선택</p></div>
        <div className='w-[1530px] h-[180px] overflow-auto'>
            {
                data.map((d,i)=>(
                    <AssetData key={i} Id={i} Device={d.Device} Date={d.Date} Description={d.Description} Ip={d.IP} Status={d.Status} Port={d.PORT}/>
                ))
            }
        </div>
    </>
  )
}

export default InfomationAsset