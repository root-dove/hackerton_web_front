import React, { useState, useEffect } from 'react'

//크게 24시간 내 들어온 공격 개수
//EX) 공격 수: 3K 우측에 2개 정도로 위 아래 나눠서 확인해야할 공격 개수 , 하나는 미정(4x4에서 좌측 세로 2개 병합) 
// 우측은 세로 2개로 분할해서 위에는 확인해야할 공격 개수, 아래는 미정

const StatusChart = () => {
    const [data, setData] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setData(Math.floor(Math.random() * 10000));
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className='w-full m-auto'>
            <div className='dataCard'>
                <div className='grid grid-cols-2 grid-rows-2 gap-4 h-full w-full'>
                    <div className='row-span-2 h-max'>
                        <div className='text-2xl font-bold'>24시간 내 들어온 공격 개수</div>
                        <div className='text-4xl font-bold'>{data}K</div>
                    </div>
                    <div>
                        <div className='text-2xl font-bold'>우측에 2개 정도로 위 아래 나눠서 확인해야할 공격 개수</div>
                        <div className='text-4xl font-bold'>미정</div>
                    </div>
                    <div className='col-start-2 row-start-2 h-full'>
                        <div className='text-2xl font-bold'>우측에 2개 정도로 위 아래 나눠서 확인해야할 공격 개수</div>
                        <div className='text-4xl font-bold'>미정</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StatusChart;