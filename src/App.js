import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

import image from './img/image.png';
import navImage from './img/nav.png';

function Header(props){
  
  return <header className='w-auto'>
    <div className='text-xl h-10 flex bg-blue-950 content-center'>
      <div className='w-[100px] text-white text-center leading-10 pl-[15px]'>CASPER</div>
      <div className='h-full w-5 text-right'>
        <div className='w-full h-3'></div>
        <div className='w-full h-4 content-center rounded-md bg-gray-300'><img src={navImage} className='w-3 h-2 m-auto'></img></div>
        <div className='w-full h-3'></div>
      </div>
        
    </div>
  </header>
}

function Nav(props){
  return <nav className=' w-auto h-auto nav'>
    <div className='leading-10 w-auto text-left text-sm text-blue-800 pl-4 mt-4'>DASHBOARDS</div>
    <div className='leading-10 w-auto text-left text-sm pl-5 h-8'>Monitoring</div>
    <div className='leading-10 w-auto text-left text-sm pl-5 h-8'>Network</div>
    <div className='leading-10 w-auto text-left text-sm pl-5 h-8'>Admin</div>
  </nav>
}

function Article(){
  // 위에 메뉴들
  const topics = [
    {id:1, title:'Log'},
    {id:2, title:'All Log'}
  ];
  const lis = [];
  for(let i=0; i< topics.length; i++){
    let t = topics[i];
    lis.push(<li key={t.id} className='text-sm w-20 h-full leading-10 text-center'>
      <a id={t.id} href={'/read/'+t.id} onClick={(event)=>{
        event.preventDefault();
      }}>{t.title}</a>
      </li>)
  }

  //밑의 로그 부분
  const logList = [];
  for(let i = 0; i < 8;i++){
    if(i%2==0){
      logList.push(
        <div className='bg-gray-300 w-full h-5'></div>
      )
    }else{
      logList.push(
        <div className='bg-white w-full h-5'></div>
      )
    }
  }
  return <article className='w-[800px] bg-gray-200'>
    {/* 위의 메뉴바들 */}
    <div className='top-menu w-full h-10 flex bg-white'> 
      
      {/* <div className='h-6 text-gray-600 ml-4  mb-2'>DASHBOARDS</div> */}
      <ol className='flex h-full w-full'>
        {lis}
      </ol>
    </div>
    
    <div className='h-[15px] article-top-extra'></div>
    <div className='w-[780px] h-[410px] m-auto article-top-content'>
      <div className='h-[200px] flex'>
        <div className='h-full w-[380px] flex bg-white article-top-left-content'>
          <div className='w-2 h-full left-extra'></div>
          <div className='w-full'>
            <div className='w-full h-7 text-sm'><p>Top Threats</p></div>
            <div className='w-full h-16 '></div>
            <div className='w-full h-7 text-sm'><p>Threats Timeline</p></div>
          </div>
        </div>
        
        <div className='h-full w-[380px] bg-white ml-[10px] article-top-right-content'>
          
        </div>
      </div>
      <div className='bg-white w-[770px] h-[200px] mt-3 article-bottom-content'>
        <div className='h-6 text-sm ml-2'><p>Log Event</p></div>
        <div className='bg-black w-[100px] h-1'></div>
        <div className='flex h-7 align-bottom text-center'>
          <div className='text-[10px] leading-[40px] w-16 ml-2'>Date</div>
          <div className='text-[10px] leading-[40px] w-10'>NC</div>
          <div className='text-[10px] leading-[40px] w-16'>IP</div>
          <div className='text-[10px] leading-[40px] w-[220px]'>Vulnable Content</div>
          <div className='text-[10px] leading-[40px] w-[220px]'>Payload</div>
        </div>
        {logList}
      </div>
    </div>
    
  </article>
}



function App(){ 
  const [mode, setMode] = useState('WELCOME'); 
  const [id, setId] = useState(null)
  
  const [nextId, setNextId] = useState(4);
  let contextControl = null;
  let content = null;
  return (
    <div className="App w-[950px] h-[400px] flex">
      <div className='w-[144px] left-side'>
        <Header title="REACT" onChangeMode={()=>{
          setMode('WELCOME');

        }}></Header>
        <Nav onChangeMode={(id)=>{
          setMode('READ');
          setId(id);
        }}></Nav>
      </div>
      <div class="main" className='w-full h-full'>
        
        <Article></Article>
      </div>
    </div>
  );
}

export default App;