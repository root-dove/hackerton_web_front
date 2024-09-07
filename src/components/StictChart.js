import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const StictChart = () => {
  const [barWidths, setBarWidths] = useState([140, 60, 60, 60]);
  const [countries, setCountries] = useState(['China', 'USA', 'Russia', 'Korea']);

  useEffect(() => {
    const interval = setInterval(() => {
      setBarWidths(prevWidths => {
        const newWidths = prevWidths.map(width => {
          const change = Math.floor(Math.random() * 21) - 10;
          return Math.max(10, Math.min(240, width + change));
        });
        
        const sortedPairs = countries.map((country, index) => ({
          country,
          width: newWidths[index]
        })).sort((a, b) => b.width - a.width);

        setCountries(sortedPairs.map(pair => pair.country));
        return sortedPairs.map(pair => pair.width);
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [countries]);

  return (
    <div className='w-full h-full'>
      {countries.map((country, index) => (
        <motion.div
          key={country}
          layout
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 30
          }}
        >
          <div className={`w-auto h-8 font-bold ml-7 ${index === 0 ? 'mt-20' : 'mt-4'} ${index === 0 ? 'text-2xl' : 'text-sm'} block`}>
            <span>{country}</span>
          </div>
          <div className='flex w-[250px] h-5 ml-7 mt-2'>
            <motion.div 
              className={`h-full ${index === 0 ? 'bg-gray-700' : 'bg-gray-400'} rounded-l-lg`} 
              style={{width: `${barWidths[index]}px`}}
              layout
            />
            <motion.div 
              className='h-full bg-gray-200 rounded-r-lg' 
              style={{width: `${250 - barWidths[index]}px`}}
              layout
            />
          </div>
        </motion.div>
      ))}
    </div>
  )
}

export default StictChart
