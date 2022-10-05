import React, { useState } from 'react'
import { GrVolume, GrVolumeMute } from 'react-icons/gr';
import Button from '../common/Button';
import { Coordinates, CalculationMethod, PrayerTimes } from 'adhan';
var moment = require('moment');

const coordinates = new Coordinates(36.750089, 3.055932);
const params = CalculationMethod.MoonsightingCommittee();
const date = new Date();
const prayerTimes = new PrayerTimes(coordinates, date, params);

const Prayers = () => {


    // console.log(prayerTimes);
    var current = prayerTimes.currentPrayer();
    var next = prayerTimes.nextPrayer();
    next = (next === 'none') ? "fajr" : "";
    var nextPrayerTime = prayerTimes.timeForPrayer(next);
    var currentPrayerTime = prayerTimes.timeForPrayer(current);
    // console.log(nextPrayerTime, currentPrayerTime);


    const prayersAr = ["الصبج", "الظهر", "العصر", "المغرب", "العشاء"];
    const prayersEn = ["fajr", "dhuhr", "asr", "maghrib", "isha"];

    const [nextPrayer, setNextPrayer] = useState(0);
    const [volumeOn, setVolumeOn] = useState(true);
    return (
        <div className='col-span-2 flex flex-col items-center justify-center gap-2 w-full'>
            <ul className='bg-gray-300 rounded-md mt-4 mx-2 py-3 w-4/5'>
                {prayersEn.map((prayer, index) =>
                    <li key={index} >
                        <div className='flex flex-col items-center w-full '>
                            <p>{prayersAr[index]}</p>
                            <p>{moment(prayerTimes[prayersEn[index]]).format('HH:mm a')}</p>
                            {(next === prayersEn[index]) ? <div className='w-full h-1  bg-green-500' /> : ""}
                        </div>
                    </li>
                )}
            </ul>
            <Button onClick={() => setVolumeOn(!volumeOn)} text={volumeOn ? <GrVolumeMute size={25} /> : <GrVolume size={25} />} />
        </div>
    )
}

export default Prayers