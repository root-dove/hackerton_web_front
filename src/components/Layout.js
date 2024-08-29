import React from 'react'
import Header from './Header'


function Layout({ children }){
  return (
    <div className="App w-[1920px] h-[945px] flex bg-gray-200">
        <div className='left-side'>
            <Header/>
        </div>
        <div className='w-full h-full p-4'>
            { children }
        </div>
    </div>
  )
}

export default Layout