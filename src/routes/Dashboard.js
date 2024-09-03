import React from 'react'

import LineChart from '../components/LineChart';
import LineChartType2 from '../components/LineChartType2';
import LineChartType3 from '../components/LineChartType3';
import WorldMap from '../components/WorldMap';
import WorldMapPing from '../components/WorldMapPing';

function Dashboard(){
  return (
    <div className='w-full h-full'>
        <div className='h-96 w-[1612px] bg-white'>
          <LineChartType2/>
        </div>      
        <div className='flex h-96 w-full mt-3'>
            <div className='bg-white w-[800px] h-full'>
              <WorldMap/>
            </div>
            <div className='bg-white w-[800px] h-full ml-3'>
              
            </div>
        </div>
        <div className='bg-white w-[800px]'>

        </div>
        
    </div>
  )
}

export default Dashboard