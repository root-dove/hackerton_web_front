import './App.css';
import { useState } from 'react';

import Article from './components/Article';
import Header from './components/Header';
import Nav from './components/Nav';
import Dropdown from './components/Dropdown';
import SideBar from './components/SideBar';


function App(){ 
  
  return (
    <div className="App w-[1920px] h-[945px] flex bg-gray-200">
      <div className='w-[259px] left-side'>
        <SideBar></SideBar>
      </div>
      <div className='w-full h-full'>
        
        
      </div>
    </div>
  );
}

export default App;