import React from 'react'
import WorldMapPing from './WorldMapPing'
import { render } from '@testing-library/react'

const WorldMap = () => {
    const mystyle = {
        backgroundSize : "1000px 384px;" 
    }
    
    return (
        
        <div className='w-full h-[336px] bg-[url("./img/worldMap2.png")] static' style={{backgroundSize: "1000px 336px" }}>
            <WorldMapPing/>
        </div>
        
    )
}

export default WorldMap