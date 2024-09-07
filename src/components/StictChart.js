import React, { useState, useEffect } from 'react'

const StictChart = () => {
  const [barWidths, setBarWidths] = useState([140, 60, 60, 60]);

  useEffect(() => {
    const interval = setInterval(() => {
      setBarWidths(prevWidths => 
        prevWidths.map(width => {
          const change = Math.floor(Math.random() * 21) - 10; // -10에서 10 사이의 랜덤 값
          return Math.max(10, Math.min(240, width + change)); // 10에서 240 사이로 제한
        })
      );
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const countries = ['China', 'USA', 'Russia', 'Korea'];

  return (
    <div className='w-full h-full'>
      {countries.map((country, index) => (
        <React.Fragment key={country}>
          <div className={`w-auto h-8 font-bold ml-7 ${index === 0 ? 'mt-20' : 'mt-4'} ${index === 0 ? 'text-2xl' : 'text-sm'} block`}>
            <span>{country}</span>
          </div>
          <div className='flex w-[250px] h-5 ml-7 mt-2'>
            <div 
              className={`h-full ${index === 0 ? 'bg-gray-700' : 'bg-gray-400'} rounded-l-lg`} 
              style={{width: `${barWidths[index]}px`}}
            />
            <div 
              className='h-full bg-gray-200 rounded-r-lg' 
              style={{width: `${250 - barWidths[index]}px`}}
            />
          </div>
        </React.Fragment>
      ))}
    </div>
  )
}

export default StictChart
