import React, { useState } from 'react';
import data from '../../data/PolicyRuleList.json';
import SearchBar from '../SearchBar';

const PolicyItem = ({ id, status, sip, dip, descript, onEdit }) => {
    return (
        <ol className='w-[1530px] h-14 bg-white m-auto mt-2 shadow-xl rounded-xl flex'>
            <li className='w-[120px] h-full content-center'>
                <p className='table m-auto text-lg font-black'>{id}</p>
            </li>
            <li className='w-[160px] h-full content-center'>
                <div className='table m-auto text-lg font-black'>
                    <div className={`rounded-full w-7 h-7 shadow-2xl`} style={{ backgroundColor: status }}></div>
                </div>
            </li>
            <li className='w-[200px] h-full content-center'>
                <p className='table m-auto text-lg font-black'>{sip}</p>
            </li>
            <li className='w-auto h-full content-center'>
                <div className={`w-[30px] h-[10px] table m-auto text-lg font-black rounded-2xl`} style={{ backgroundColor: status }}></div>
            </li>
            <li className='w-[200px] h-full content-center'>
                <p className='table m-auto text-lg font-black'>{dip}</p>
            </li>
            <li className='w-[15px] h-full content-center'></li>
            <li className='w-[610px] h-full content-center'>
                <p className='table m-auto text-lg font-black'>{descript}</p>
            </li>
            <li className='w-[200px] h-full flex place-items-center'>
                <div
                    onClick={() => onEdit({ id, status, sip, dip, descript })}
                    className='bg-gray-500 rounded-3xl border-4 h-[40px] w-[80px] content-center m-auto hover:bg-gray-600 active:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-200 cursor-pointer'
                >
                    <div className='text-white m-auto table'>Edit</div>
                </div>
                <div className='bg-red-400 rounded-3xl border-4 h-[40px] w-[80px] content-center m-auto hover:bg-red-600 active:bg-red-700 focus:outline-none focus:ring focus:ring-red-200'>
                    <div className='text-white m-auto table'>Delete</div>
                </div>
            </li>
        </ol>
    );
};

const PolicyList = () => {
    const [policies, setPolicies] = useState(data);
    const [selectedPolicy, setSelectedPolicy] = useState(null);

    const handleEdit = (policy) => {
        setSelectedPolicy(policy);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setSelectedPolicy(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = () => {
        setPolicies(prev => prev.map(p => p.id === selectedPolicy.id ? selectedPolicy : p));
        setSelectedPolicy(null);
    };

    return (
        <>
            <div className='w-full h-full bg-white p-5'>
                <div className='flex items-center justify-between w-full h-16 p-4 '>
                    <h3 className='text-4xl font-bold text-gray-900'>Rule List</h3>
                    <div className='flex-shrink-0'>
                        <SearchBar />
                    </div>
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
                    <ol className='w-[1570px] h-1/2 m-auto overflow-auto'>
                        {policies.map(policy => (
                            <PolicyItem
                                key={policy.id}
                                {...policy}
                                onEdit={handleEdit}
                            />
                        ))}
                    </ol>
                    <div className='w-[1550px] h-[400px] m-auto mt-6'>
                        <div className='w-full h-[50px] flex space-x-10'>
                            <div className='w-[750px] h-full bg-black flex'>
                                <div className='w-[220px] h-full bg-gray-900 text-2xl font-bold content-center text-white'>
                                    <p className='table m-auto'>Name</p>
                                </div>
                                <div className='w-[580px] h-full bg-white'>
                                    <input
                                        type='text'
                                        name='sip'
                                        value={selectedPolicy ? selectedPolicy.sip : ''}
                                        onChange={handleChange}
                                        className='w-full p-2 border border-gray-300 rounded'
                                        placeholder='SIP'
                                    />
                                </div>
                            </div>
                            <div className='w-[750px] h-full flex'>
                                <div className='w-[220px] h-full bg-gray-900 text-2xl font-bold content-center text-white'>
                                    <p className='table m-auto'>No.</p>
                                </div>
                                <div className='w-[580px] h-full bg-white'>
                                    <input
                                        type='text'
                                        name='id'
                                        value={selectedPolicy ? selectedPolicy.id : ''}
                                        onChange={handleChange}
                                        className='w-full p-2 border border-gray-300 rounded'
                                        placeholder='ID'
                                        disabled
                                    />
                                </div>
                            </div>
                        </div>

                        <div className='w-full h-[50px] flex space-x-10 mt-4'>
                            <div className='w-[750px] h-full bg-black flex'>
                                <div className='w-[220px] h-full bg-gray-900 text-2xl font-bold content-center text-white'>
                                    <p className='table m-auto'>SIP</p>
                                </div>
                                <div className='w-[580px] h-full bg-white'>
                                    <input
                                        type='text'
                                        name='sip'
                                        value={selectedPolicy ? selectedPolicy.sip : ''}
                                        onChange={handleChange}
                                        className='w-full p-2 border border-gray-300 rounded'
                                        placeholder='SIP'
                                    />
                                </div>
                            </div>
                            <div className='w-[750px] h-full flex'>
                                <div className='w-[220px] h-full bg-gray-900 text-2xl font-bold content-center text-white'>
                                    <p className='table m-auto'>DIP</p>
                                </div>
                                <div className='w-[580px] h-full bg-white'>
                                    <input
                                        type='text'
                                        name='dip'
                                        value={selectedPolicy ? selectedPolicy.dip : ''}
                                        onChange={handleChange}
                                        className='w-full p-2 border border-gray-300 rounded'
                                        placeholder='DIP'
                                    />
                                </div>
                            </div>
                        </div>

                        <div className='w-full h-[50px] flex mt-4'>
                            <div className='w-full h-full flex'>
                                <div className='w-[206px] h-full bg-gray-900 text-2xl font-bold content-center text-white'>
                                    <p className='table m-auto'>Description</p>
                                </div>
                                <div className='w-[1333px] h-full bg-white'>
                                    <input
                                        type='text'
                                        name='descript'
                                        value={selectedPolicy ? selectedPolicy.descript : ''}
                                        onChange={handleChange}
                                        className='w-full p-2 border border-gray-300 rounded'
                                        placeholder='Description'
                                    />
                                </div>
                            </div>
                        </div>
                        <div className='w-full h-[50px] flex mt-4'>
                            <div className='w-full h-full flex'>
                                <button
                                    onClick={handleSubmit}
                                    className='bg-blue-900 h-[50px] w-full text-base font-bold content-center text-white rounded'
                                >
                                    <p className='table m-auto'>Save</p>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PolicyList;
