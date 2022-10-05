import React from 'react'
import Clock from './Clock'
import Prayers from './Prayers'
import Verse from './Verse'
import Weather from './Weather'


const Main = () => {
    return (
        <div className='grid grid-cols-12 flex-1'>
            <div className='col-span-2 h-full flex flex-col items-center justify-center' >
                <Weather />
            </div>
            <div className='col-span-8 h-full flex flex-col'>
                <Clock />
                <Verse />
            </div>
            <Prayers />
        </div>
    )
}

export default Main