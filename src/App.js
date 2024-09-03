import './App.css';
import {Route, Routes} from "react-router-dom";

import Layout from './components/Layout';
import Article from './components/Article';
import LineChart from './components/LineChart';
import LogPage from './routes/network/LogPage';
import LogAllPage from './routes/network/LogAllPage';
import Dashboard from './routes/Dashboard';

function App(){ 
  
  return (
    <Routes>
      <Route path='/' element={<Layout>
          <Dashboard/>
        </Layout>}/>
      <Route path='/log' element={<Layout><LogPage/></Layout>}/>
      <Route path='/logAll' element={<Layout><LogAllPage/></Layout>}/>
    </Routes>
  );
}
export default App;