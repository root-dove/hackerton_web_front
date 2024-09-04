import React from 'react'
import data from '../../data/PolicyRuleList.json'

const PolicyList = () => {
    const pList = [];
    for(let i=0; i<data.length;i++){
        let t = data[i];

        pList.push(
            <ol className='w-full h-14 bg-white m-auto mt-2 shadow-xl rounded-xl flex'>
                <li className='w-[120px] h-full  content-center'>
                    <p className='table m-auto text-lg font-black'>{t.id}</p>
                </li>
                <li className='w-[160px] h-full  content-center'>
                    <div className='table m-auto text-lg font-black'>
                        <div className={t.status+'rounded-full w-7 h-7 shadow-2xl hover:bg-green-700'}></div>
                    </div>
                </li>
                <li className='w-[200px] h-full  content-center'>
                    <p className='table m-auto text-lg font-black'>{t.sip}</p>
                </li>
                <li className='w-auto h-full  content-center'>
                    <div className={t.status+'w-[30px] h-[10px] table m-auto text-lg font-black rounded-2xl hover:bg-green-700'}></div>
                </li>
                <li className='w-[200px] h-full  content-center'>
                    <p className='table m-auto text-lg font-black'>{t.dip}</p>
                </li>
                <li className='w-[15px] h-full  content-center'>
                    
                </li>
                <li className='w-[610px] h-full  content-center'>
                    <p className='table m-auto text-lg font-black'>{t.descript}</p>
                </li>
                <li className='w-[200px] h-full flex place-items-center'>
                    <div className='bg-gray-500 rounded-3xl border-4 h-[40px] w-[80px] content-center m-auto hover:bg-gray-700'>
                        <div className='text-white m-auto table'>Edit</div>
                    </div>
                    <div className='bg-red-400 rounded-3xl border-4 h-[40px] w-[80px] content-center m-auto hover:bg-red-600'>
                        <div className='text-white m-auto table'>Delete</div>
                    </div>
                </li>
            </ol>
        )
    }


    return (
        <div className='w-full h-full bg-white p-5'>
            <div className='w-auto h-16 font-bold text-2xl block content-center'><p>Rule List</p></div>
            <div className='w-full h-[800px] bg-gray-200 rounded-lg shadow-lg'>
                <ol className='w-[1550px] h-14 border-b-2 border-4 border-b-gray-600 m-auto flex text-2xl font-bold content-center'>
                    <li className='w-[80px] h-full  content-center ml-[40px]'>
                        <p className='border-r-2 border-gray-600'>No.</p>
                    </li>
                    <li className='w-[110px] h-full  content-center ml-[40px]'>
                        <p className='border-r-2 border-gray-600'>Status</p>
                    </li>
                    <li className='w-36 h-full  content-center ml-[80px]'>
                        <p className='border-r-2 border-gray-600'>SIP</p>
                    </li>
                    <li className='w-36 h-full  content-center ml-[80px]'>
                        <p className='border-r-2 border-gray-600'>DIP</p>
                    </li>
                    <li className='w-[400px] h-full  content-center ml-[210px]'>
                        <p className='border-r-2 border-gray-600'>DESCRIPTION</p>
                    </li>
                    <li className='w-auto h-full  content-center ml-[80px]'>
                        <p className=''>ETC</p>
                    </li>
                </ol>
                <ol className='w-[1550px] h-[700px] m-auto'>
                    {pList}
                </ol>
            </div>
        </div>
    )
}

export default PolicyList