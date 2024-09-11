import './App.css';
import {Route, Routes} from "react-router-dom";

import Layout from './components/Layout';
import LogPage from './routes/network/LogPage';
import LogAllPage from './routes/network/LogAllPage';
import Dashboard from './routes/Dashboard';
import PolicyList from './components/Policy/PolicyList';
import AddPolicy from './components/Policy/AddPolicy'
import Status from './components/Network/Status';
import Tools from './components/Network/Tools';
// import NotificationProvider from './components/alert/NotificationContents'; // 내가 만든거 
import AutoToastNotification from './components/alert/AutoToastNotification';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AdminPage from './routes/setting/AdminPage';

function App(){ 
  
  return (
    <div className='overflow-hidden'>
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
        
        <Route path='/Setting/Admin' element={<Layout><AdminPage/></Layout>}/>
      </Routes>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <AutoToastNotification />
    </div>
  );
}
export default App;