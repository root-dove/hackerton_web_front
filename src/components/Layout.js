import Header from './Header'
// import NotificationProvider from './alert/NotificationContents'

import React from 'react';

function Layout({ children }){
  return (
    <div className="App w-[1920px] h-screen flex bg-gray-200">
        <div className='left-side'>
            <Header/>
        </div>
        <div className='w-full h-full p-4'>
          {/* <NotificationProvider> */}
          {children}
          {/* </NotificationProvider> */}
        </div>
    </div>
  )
}

export default Layout