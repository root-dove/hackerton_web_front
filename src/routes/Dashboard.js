import React, { useState } from "react";

import LineChartType2 from '../components/LineChartType2';
import WorldMap from '../components/WorldMap';
import WorldMap3 from "../components/WorldMap3";
import DoughnutChart2 from '../components/DoughnutChart2';
import StictChart from '../components/StictChart';
import LogShow from '../components/LogShow';
import StatusChart from "../components/StatusChart";

function Dashboard() {
  const [map, setmap] = useState(0);

  const setMapValue = (props) => {
    setmap(props);
  }
  return (
    <div className='w-full h-full'>
      <div className='h-auto w-[1612px] bg-white'>
        <div className="flex h-8">
          <div className='w-auto h-8 font-bold bo ml-7 mt-4 text-2xl block'><p>Real-Time Traffic</p></div>
        </div>
        <div className='w-auto h-full'><LineChartType2 /></div>
      </div>
      <div className='flex h-96 w-full mt-3'>
        <div className='bg-white w-[1000px] h-full'>
          <div className="w-auto h-[60px] flex">
            <div className='w-auto h-8 font-bold bo ml-7 mt-4 text-2xl block'><p>Countries Traffic</p></div>
            <div className="ml-3 w-auto h-auto content-center text-center">
              <button onClick={() => setMapValue(!map)} type="button" class="font-medium rounded-lg text-sm px-5 py-2.5 me-2 bg-gray-800 text-white border-gray-600 hover:bg-gray-700 hover:border-gray-600">View {map == 0 ? '3D' : '2D'}</button>
            </div>

          </div>

          <div className='w-[800px] h-[300px] m-auto rounded-2xl overflow-auto'>
            {
              map == 0
                ? <WorldMap />
                : <WorldMap3 />
            }
          </div>
        </div>
        <div className='bg-white w-[600px] h-full ml-3 flex'>
          <div className='w-[360px]'>
            <div className='w-auto h-8 font-bold bo ml-7 mt-4 text-2xl block'><p>Top Traffic</p></div>
            <DoughnutChart2 />
          </div>
          <div className='w-full'>
            <StictChart />
          </div>
        </div>
      </div>
      <div className='flex h-80 w-full mt-3'>
        <div className='bg-white w-[1000px]'>
          <div className='w-auto h-8 font-bold bo ml-7 mt-4 text-2xl block'><p>Real-Time Threat</p></div>
          <LogShow />
        </div>
        <div className='bg-white w-[600px] ml-3'>
          <div className='w-auto h-8 font-bold bo ml-7 mt-4 text-2xl block'><p>Real-Time Log</p></div>
          <StatusChart />
        </div>
      </div>
    </div>
  )
}

export default Dashboard