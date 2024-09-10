import React from 'react'
import WorldMapPing from './WorldMapPing'
import { render } from '@testing-library/react'

const WorldMap = () => {
    const mystyle = {
        backgroundSize: "1000px 384px;"
    }

    return (
        <div className='w-[1000px] h-auto'>
            <div className='w-[800px] h-auto m-auto'>
                <div className='w-auto h-[336px] bg-[url("./img/worldmap2.jpg")] relative' style={{ backgroundSize: "800px 336px" }}>
                    <WorldMapPing />
                </div>
            </div>
        </div>
    )
}

export default WorldMap