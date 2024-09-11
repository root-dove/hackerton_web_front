import React from 'react'
import data from '../../data/PolicyRuleList.json'
import SearchBar from '../SearchBar';

const PolicyItem=(props)=>{
    return (
        <ol className='w-[1530px] h-14 bg-white m-auto mt-2 shadow-xl rounded-xl flex'>
            <li className='w-[120px] h-full  content-center'>
                <p className='table m-auto text-lg font-black'>{props.id}</p>
            </li>
            <li className='w-[160px] h-full  content-center'>
                <div className='table m-auto text-lg font-black'>
                    <div className={` rounded-full w-7 h-7 shadow-2xl hover:bg-green-700`} style={{ backgroundColor : props.status }}></div>
                </div>
            </li>
            <li className='w-[200px] h-full  content-center'>
                <p className='table m-auto text-lg font-black'>{props.sip}</p>
            </li>
            <li className='w-auto h-full  content-center'>
                <div className={`w-[30px] h-[10px] table m-auto text-lg font-black rounded-2xl hover:bg-green-700` } style={{ backgroundColor : props.status }}></div>
            </li>
            <li className='w-[200px] h-full  content-center'>
                <p className='table m-auto text-lg font-black'>{props.dip}</p>
            </li>
            <li className='w-[15px] h-full  content-center'>
                
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
                <SearchBar/>
            </div>
            <div className='w-full h-[800px] bg-gray-200 rounded-lg shadow-2xl '>
                <ol className='w-[1550px] h-14 border-b-2 border-4 border-b-gray-200 m-auto flex text-2xl font-bold content-center'>
                    <li className='w-[80px] h-full  content-center ml-[40px]'>
                        <p className='border-r-2 border-gray-300'>No.</p>
                    </li>
                    <li className='w-[110px] h-full  content-center ml-[40px]'>
                        <p className='border-r-2 border-gray-300'>Status</p>
                    </li>
                    <li className='w-36 h-full  content-center ml-[80px]'>
                        <p className='border-r-2 border-gray-300'>SIP</p>
                    </li>
                    <li className='w-36 h-full  content-center ml-[80px]'>
                        <p className='border-r-2 border-gray-300'>DIP</p>
                    </li>
                    <li className='w-[400px] h-full  content-center ml-[210px]'>
                        <p className='border-r-2 border-gray-300'>DESCRIPTION</p>
                    </li>
                    <li className='w-auto h-full  content-center ml-[80px]'>
                        <p className=''>ETC</p>
                    </li>
                </ol>
                <ol className='w-[1570px] h-[300px] m-auto overflow-auto'>
                {
                    data.map((t,i)=>(
                        <PolicyItem key={i} sip={t.sip} dip={t.dip} descript={t.descript} id={t.id} status={t.status}/>

                    ))
                }
                </ol>
                <div className='w-[1550px] h-[400px] m-auto mt-6'>
                    <div className='w-full h-[50px] flex space-x-10'>
                        <div className='w-[750px] h-full bg-black flex'>
                            <div className='w-[220px] h-full bg-gray-900 text-2xl font-bold content-center text-white'>
                                <p className='table m-auto'>Name</p>
                            </div>
                            <div className='w-[580px] h-full bg-white'>

                            </div>
                        </div>
                        <div className='w-[750px] h-full flex'>
                            <div className='w-[220px] h-full bg-gray-900 text-2xl font-bold content-center text-white'>
                                <p className='table m-auto'>No.</p>
                            </div>
                            <div className='w-[580px] h-full bg-white'>

                            </div>
                        </div>
                    </div>

                    <div className='w-full h-[50px] flex space-x-10 mt-4'>
                        <div className='w-[750px] h-full bg-black flex'>
                            <div className='w-[220px] h-full bg-gray-900 text-2xl font-bold content-center text-white'>
                                <p className='table m-auto'>SIP</p>
                            </div>
                            <div className='w-[580px] h-full bg-white'>

                            </div>
                        </div>
                        <div className='w-[750px] h-full flex'>
                            <div className='w-[220px] h-full bg-gray-900 text-2xl font-bold content-center text-white'>
                                <p className='table m-auto'>DIP</p>
                            </div>
                            <div className='w-[580px] h-full bg-white'>

                            </div>
                        </div>
                    </div>

                    <div className='w-full h-[50px] flex mt-4'>
                        <div className='w-full h-full flex'>
                            <div className='w-[206px] h-full bg-gray-900 text-2xl font-bold content-center text-white'>
                                <p className='table m-auto'>Description</p>
                            </div>
                            <div className='w-[1333px] h-full bg-white'>

                            </div>
                        </div>
                    </div>
                    <div className='w-[1540px] h-[230px] flex mt-4 space-x-20'>
                        <div className='w-[600px] h-[200px]'>
                            <div className='w-full h-[50px] flex'>
                                <div className='w-[206px] h-full bg-gray-900 text-2xl font-bold content-center text-white'><p className='table m-auto'>PORT</p></div>
                                <div className='h-full w-[394px] bg-white'></div>
                            </div>
                            <div className='w-full h-[120px] bg-white border-t-2 border-b-2'>

                            </div>
                            <div className='w-full h-[30px] flex'>
                                <div className='w-[520px] h-full bg-white'></div>
                                <div className='h-full w-[80px] bg-gray-500 text-lg font-bold content-center text-white'><p className='table m-auto'>Add</p></div>
                            </div>
                        </div>
                        <div className='w-[600px] h-[200px] '>
                            <div className='h-[50px] w-[206px] bg-gray-900 text-2xl font-bold content-center text-white'>
                                <p className='table m-auto'>Protocol</p>
                            </div>
                            <div className='h-[150px] w-full bg-white'>
                                <div className='h-[50px] w-full flex'>
                                    <div className='h-full w-[150px] border-2 text-base font-bold content-center text-gray-900'><p className='table m-auto'>HTTP</p></div>
                                    <div className='h-full w-[150px] border-2 text-base font-bold content-center text-gray-900'><p className='table m-auto'>SMTP</p></div>
                                    <div className='h-full w-[150px] border-2 text-base font-bold content-center text-gray-900'><p className='table m-auto'>FTP</p></div>
                                    <div className='h-full w-[150px] border-2 text-base font-bold content-center text-gray-900'><p className='table m-auto'>TELNET</p></div>
                                </div>
                                <div className='h-[50px] w-full flex'>
                                    <div className='h-full w-[150px] border-2 text-base font-bold content-center text-gray-900'><p className='table m-auto'>HTTPS</p></div>
                                    <div className='h-full w-[150px] border-2 text-base font-bold content-center text-gray-900'><p className='table m-auto'>FTPS</p></div>
                                    <div className='h-full w-[150px] border-2 text-base font-bold content-center text-gray-900'><p className='table m-auto'>SSH</p></div>
                                    <div className='h-full w-[150px] border-2 text-base font-bold content-center text-gray-900'><p className='table m-auto'>VNET</p></div>
                                </div>
                                <div className='h-[50px] w-full flex'>
                                    <div className='h-full w-[150px] border-2 text-base font-bold content-center text-gray-900'><p className='table m-auto'>SMMT</p></div>
                                    <div className='h-full w-[150px] border-2 text-base font-bold content-center text-gray-900'><p className='table m-auto'>Group A</p></div>
                                    <div className='h-full w-[150px] border-2 text-base font-bold content-center text-gray-900'><p className='table m-auto'>Group B</p></div>
                                    <div className='h-full w-[150px] border-2 text-base font-bold content-center text-gray-900'><p className='table m-auto'></p></div>
                                </div>
                            </div>
                        </div>
                        <div className='w-[206px] h-[200px] content-end'>
                            <div className='bg-blue-900 h-[50px] w-full text-base font-bold content-center text-white'><p className='table m-auto'>ADD</p></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
        
    )
}

export default PolicyList