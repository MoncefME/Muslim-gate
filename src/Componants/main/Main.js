import React from 'react'
import Clock from './Clock'
import Prayers from './Prayers'
import Verse from './Verse'


const Main = () => {
    return (
        <div className='grid grid-cols-12 flex-1'>
            <div className='col-span-2  bg-blue-400' />
            <div className='col-span-8 flex flex-col'>
                <Clock />
                <Verse />
            </div>
            <Prayers />
        </div>
    )
}

export default Main