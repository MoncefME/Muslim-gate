import React from 'react'
import Clock from './Clock'
import PrayerTimes from './PrayerTimes'
import VerseContent from './VerseContent'

const AppContainer = () => {
    return (
        <div className='flex flex-row gap-7'>
            <Clock />
            <VerseContent />
            <PrayerTimes />
        </div>
    )
}

export default AppContainer