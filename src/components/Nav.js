import React from 'react'

function Nav(props){
    return <nav className=' w-auto h-auto nav'>
        <div className='leading-10 w-auto text-left text-sm text-blue-800 pl-4 mt-4'>DASHBOARDS</div>
        <div className='leading-10 w-auto text-left text-sm pl-5 h-8'>Monitoring</div>
        <div className='leading-10 w-auto text-left text-sm pl-5 h-8'>Network</div>
        <div className='leading-10 w-auto text-left text-sm pl-5 h-8'>Policy</div>
        <div className='leading-10 w-auto text-left text-sm pl-5 h-8'>Admin</div>
    </nav>
}

export default Nav