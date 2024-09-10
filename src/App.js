import './App.css';
import {Route, Routes} from "react-router-dom";

import Layout from './components/Layout';
import Article from './components/Article';
import LineChart from './components/LineChart';
import LogPage from './routes/network/LogPage';
import LogAllPage from './routes/network/LogAllPage';
import Dashboard from './routes/Dashboard';
import PolicyList from './components/Policy/PolicyList';
import AddPolicy from './components/Policy/AddPolicy'
import Status from './components/Network/Status';
import Tools from './components/Network/Tools';
import Status2 from './components/Network/Status copy'

function App(){ 
  
  return (
    <Routes>
      <Route path='/' element={<Layout>
          <Dashboard/>
        </Layout>}/>
      <Route path='/log' element={<Layout><LogPage/></Layout>}/>
      <Route path='/logAll' element={<Layout><LogAllPage/></Layout>}/>

      <Route path='/Policy/PolicyList' element={<Layout><PolicyList/></Layout>}/>
      <Route path='/Policy/AddPolicy' element={<Layout><AddPolicy/></Layout>}/>

      <Route path='/Network/Status' element={<Layout><Status/></Layout>}/>
      <Route path='/Network/Tools' element={<Layout><Tools/></Layout>}/>
    </Routes>
  );
}
export default App;