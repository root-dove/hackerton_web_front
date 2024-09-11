import React, { useState, useEffect } from 'react'

//크게 24시간 내 들어온 공격 개수
//EX) 공격 수: 3K 우측에 2개 정도로 위 아래 나눠서 확인해야할 공격 개수 , 하나는 미정(4x4에서 좌측 세로 2개 병합) 
// 우측은 세로 2개로 분할해서 위에는 확인해야할 공격 개수, 아래는 미정

const StatusChart = () => {
    let [data, setData] = useState(0);
    useEffect(() => {
        data = 0;
        setData(data);
        const interval = setInterval(() => {
            data = data + Math.floor(Math.random() * 100) / 10 - 2;
            setData(data.toFixed(1));
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className='w-full m-auto'>
            <div className='dataCard'>
                <div className='grid grid-cols-2 grid-rows-2 gap-4 h-full w-full'>
                    <div className='row-span-2 align-middle h-full'>
                        <div>
                            <div className='text-2xl font-bold'>Detected Threats(24h)</div>
                            <div className='text-4xl font-bold'>{data}K</div>
                        </div>
                    </div>
                    <div className='h-full'>
                        <div>
                            <div className='text-2xl font-bold'>Possible Attacks</div>
                            <div className='text-4xl font-bold'>10</div>
                        </div>
                    </div>
                    <div className='col-start-2 row-start-2 h-full'>
                        <div>
                            <div className='text-2xl font-bold'>Temporarily Blocked</div>
                            <div className='text-4xl font-bold'>5</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StatusChart;