import React, { useState, useEffect } from 'react'

const LogShow = () => {
    const [logList, setLogList] = useState([]);

    const generateRandomLog = () => {
        // YY-MM-DD HH:MM:SS.ms
        const date = new Date().toISOString().slice(0, 19).replace('T', ' ').slice(2) + '.' + String((new Date().getMilliseconds() + Math.floor(Math.random() * 100)) % 1000).padStart(3, '0');
        const nc = Math.random() < 0.2 ? 'KR' : 'CN';
        const ip = `${Math.floor(Math.random() * 256)}.${Math.floor(Math.random() * 256)}.${Math.floor(Math.random() * 256)}.${Math.floor(Math.random() * 256)}`;
        // const vulnerability = Math.random() < 0.5 ? `CVE-${new Date().getFullYear() - Math.floor(Math.random() * 10)}-${Math.floor(Math.random() * 10000)}` : `KVE-${new Date().getFullYear() - Math.floor(Math.random() * 10)}-${Math.floor(Math.random() * 10000)}`;
        const randomPayloads = [
            `id=${Math.floor(Math.random() * 100)}`,
            `name=${Math.random() < 0.5 ? 'admin' : 'user'}`,
            `password=${Math.random() < 0} ? '1234' : 'password'`,
            `email=${Math.random() < 0.5 ? 'admin' : 'example@example.com'}`,
            `phone=+8210-1234-5678`,
            `address=${Math.random() < 0.5 ? 'Seoul' : 'Beijing'}`,
            `content=<script>alert('XSS')</script>`,
            `content=<img src='https://example.com/image.jpg'>`,
            `content=<iframe src='https://example.com'></iframe>`,
            `content=' OR 1=1; --`,
            `X-Forwarded-For: ${Math.floor(Math.random() * 256)}.${Math.floor(Math.random() * 256)}.${Math.floor(Math.random() * 256)}.${Math.floor(Math.random() * 256)}`,
            `Host: ${Math.random() < 0.5 ? '127.0.0.1' : 'localhost'}`,
        ];
        const payload = randomPayloads[Math.floor(Math.random() * randomPayloads.length)];
        return { date, nc, ip/*, vulnerability*/, payload };
    }

    useEffect(() => {
        const initialLogs = Array(100).fill().map(() => generateRandomLog());
        setLogList(initialLogs);
    }, []);

    const addRandomLog = () => {
        setLogList(prevLogs => [generateRandomLog(), ...prevLogs.slice(0, 100)]);
    }

    useEffect(() => {
        const interval = setInterval(addRandomLog, 100);
        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            <div className='flex h-8 align-bottom text-center border-t-4'>
                <div className='text-[15px] leading-[25px] w-[160px] ml-2'>Date</div>
                <div className='text-[15px] leading-[25px] w-[160px]'>NC</div>
                <div className='text-[15px] leading-[25px] w-[160px]'>IP</div>
                {/* <div className='text-[15px] leading-[25px] w-[520px]'>Vulnable Content</div> */}
                <div className='text-[15px] leading-[25px] w-[420px]'>Payload</div>
            </div>
            <div className='h-max overflow-auto'>
                {logList.map((log, index) => (
                    <div key={index} className={`${index % 2 === 0 ? 'bg-gray-300' : 'bg-white'} w-full h-5 flex align-bottom text-center`}>
                        <div className='text-[15px] w-[160px] ml-2'>{log.date}</div>
                        <div className='text-[15px] w-[160px]'>{log.nc}</div>
                        <div className='text-[15px] w-[160px]'>{log.ip}</div>
                        {/* <div className='text-[15px] w-[520px]'>{log.vulnerability}</div> */}
                        <div className='text-[15px] w-[420px]'>{log.payload}</div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default LogShow
