import React from 'react'
import data from '../../data/PolicyRuleList.json'
import SearchBar from '../SearchBar';

const PolicyItem = (props) => {
    return (
        <ol className='w-[1530px] h-14 bg-white m-auto mt-2 shadow-xl rounded-xl flex'>
            <li className='w-[120px] h-full  content-center'>
                <p className='table m-auto text-lg font-black'>{props.id}</p>
            </li>
            <li className='w-[160px] h-full  content-center'>
                <div className='table m-auto text-lg font-black'>
                    <div className={` rounded-full w-7 h-7 shadow-2xl hover:bg-green-700`} style={{ backgroundColor: props.status }}></div>
                </div>
            </li>
            <li className='w-[200px] h-full  content-center'>
                <p className='table m-auto text-lg font-black'>{props.sip}</p>
            </li>
            <li className='w-[200px] h-full  content-center'>
                <p className='table m-auto text-lg font-black'>{props.dip}</p>
            </li>
            <li className='w-[610px] h-full  content-center'>
                <p className='table m-auto text-lg font-black'>{props.descript}</p>
            </li>
            <li className='w-[200px] h-full flex place-items-center'>
                <div className='bg-gray-500 rounded-3xl border-4 h-[40px] w-[80px] content-center m-auto hover:bg-gray-600 active:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-200'>
                    <div className='text-white m-auto table'>Edit</div>
                </div>
                <div className='bg-red-400 rounded-3xl border-4 h-[40px] w-[80px] content-center m-auto hover:bg-red-600 active:bg-red-700 focus:outline-none focus:ring focus:ring-red-200'>
                    <div className='text-white m-auto table'>Delete</div>
                </div>
            </li>
        </ol>
    )
}

const PolicyList = () => {
    return (
        <>
            <div className='w-full h-full bg-white p-5'>
                <div className='flex w-auto h-16'>
                    <div className='w-auto h-full font-normal text-4xl block content-center'><p className='w-[1350px]'>&nbsp;&nbsp;Rule List</p></div>
                    <SearchBar />
                </div>
                <div className='w-full h-[800px] bg-gray-200 rounded-lg shadow-2xl '>
                    <ol className='w-[1530px] h-14 border-b-2 border-4 border-b-gray-200 m-auto flex text-2xl font-bold content-center'>
                        <li className='w-[120px] h-full  content-center text-center'>
                            <p className='border-r-2 border-gray-300'>No.</p>
                        </li>
                        <li className='w-[160px] h-full  content-center text-center'>
                            <p className='border-r-2 border-gray-300'>Status</p>
                        </li>
                        <li className='w-[200px] h-full  content-center text-center'>
                            <p className='border-r-2 border-gray-300'>SIP</p>
                        </li>
                        <li className='w-[200px] h-full  content-center text-center'>
                            <p className='border-r-2 border-gray-300'>DIP</p>
                        </li>
                        <li className='w-[610px] h-full  content-center text-center'>
                            <p className='border-r-2 border-gray-300'>DESCRIPTION</p>
                        </li>
                        <li className='w-[200px] h-full  content-center text-center'>
                            <p className=''>ETC</p>
                        </li>
                    </ol>
                    <ol className='w-[1570px] h-[700px] m-auto overflow-auto'>
                        {
                            data.map((t, i) => (
                                <PolicyItem key={i} sip={t.sip} dip={t.dip} descript={t.descript} id={t.id} status={t.status} />

                            ))
                        }
                    </ol>
                </div>
            </div>
        </>

    )
}

export default PolicyList