import React from 'react'

import LineChart from '../components/LineChart';
import LineChartType2 from '../components/LineChartType2';
import LineChartType3 from '../components/LineChartType3';
import WorldMap from '../components/WorldMap';
import WorldMapPing from '../components/WorldMapPing';

function Dashboard(){
  return (
    <div className='w-full h-full'>
        <div className='h-auto w-[1612px] bg-white'>
          <div className='w-auto h-12 font-bold content-center ml-7 text-2xl block'><p>Real-Time Traffic</p></div>
          <LineChartType2/>
          <div className='w-auto h-2'></div>
        </div>      
        <div className='flex h-96 w-full mt-3'>
            <div className='bg-white w-[1000px] h-full'>
              <div className='w-auto h-8 font-bold bo ml-7 mt-4 text-2xl block'><p>Contry Traffic</p></div>
              <WorldMap/>
            </div>
            <div className='bg-white w-[600px] h-full ml-3'>
            </div>
        </div>
        <div className='bg-white w-[800px]'>

        </div>
        
    </div>
  )
}

export default Dashboard