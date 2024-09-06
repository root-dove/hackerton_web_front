import React,{useState} from "react";

import LineChart from '../components/LineChart';
import LineChartType2 from '../components/LineChartType2';
import LineChartType3 from '../components/LineChartType3';
import WorldMap from '../components/WorldMap';
import WorldMap3 from "../components/WorldMap3";
import WorldMapPing from '../components/WorldMapPing';
import DoughnutChart from '../components/DoughnutChart';
import DoughnutChart2 from '../components/DoughnutChart2';
import StictChart from '../components/StictChart';
import LogShow from '../components/LogShow';

function Dashboard(){
  let mapArray = [true, false];
  const [map, setmap] = useState(0);
  const [show, setShow] = useState(true);

  const setMapValue = (props) => {
      setmap(props);
  } 
  return (
    <div className='w-full h-full'>
        <div className='h-auto w-[1612px] bg-white'>
          <div className='w-auto h-12 font-bold content-center ml-7 text-2xl block'><p>Real-Time Traffic</p></div>
          <LineChartType2/>
          <div className='w-auto h-2'></div>
        </div>      
        <div className='flex h-96 w-full mt-3'>
            <div className='bg-white w-[1000px] h-full'>
              <div className="w-auto h-[60px] flex">
                <div className='h-full font-bold bo ml-7  text-2xl block content-center'><p>Contry Traffic</p></div>
                <div className="ml-3 w-auto h-auto content-center text-center">
                  <button onClick={()=>setMapValue(0)} type="button" class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Light</button>
                  <button onClick={()=>setMapValue(1)} type="button" class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Light</button>
                </div>
                   
              </div>
              
              <div className='w-[800px] h-[300px] m-auto rounded-2xl overflow-auto'>
                {
                  map == 0
                  ? <WorldMap/>
                  : <WorldMap3/>
                }
              </div>
            </div>
            <div className='bg-white w-[600px] h-full ml-3 flex'>
              <div className='w-[360px]'>
                <div className='w-auto h-8 font-bold bo ml-7 mt-4 text-2xl block'><p>Top Traffic</p></div>
                <DoughnutChart2/>
              </div>
              <div className='w-full'>
                <StictChart/>
              </div>
            </div>
        </div>
        <div className='bg-white w-[1612px] h-[250px] mt-3'>
          <LogShow/>
        </div>
        
    </div>
  )
}

export default Dashboard