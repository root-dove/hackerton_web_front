import './App.css';
import {Route, Routes} from "react-router-dom";

import Layout from './components/Layout';
import Article from './components/Article';
import LogPage from './routes/network/LogPage';
import LogAllPage from './routes/network/LogAllPage';

function App(){ 
  
  return (
    <Routes>
      <Route path='/' element={<Layout><Article/></Layout>}/>
      <Route path='/log' element={<Layout><LogPage/></Layout>}/>
      <Route path='/logAll' element={<Layout><LogAllPage/></Layout>}/>
    </Routes>
  );
}
export default App;