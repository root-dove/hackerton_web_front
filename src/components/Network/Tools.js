import React from 'react';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';


function Tools(){
  const notify = () => toast("단말기 10.100.10.184 에서 이상 행위 탐지");

  return (
    <div>
      <button onClick={notify}>Notify !</button>
      
    </div>
  );
}
  
export default Tools;