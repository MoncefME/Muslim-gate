import React, { useEffect, useState } from 'react';
import { GrFormNextLink, GrFormPreviousLink } from 'react-icons/gr';
import Button from '../common/Button';


// Random Number
function generateRandomNum() {
    return Math.floor(Math.random() * 6236)
}


const Verse = () => {

    const [randomVerse, setRandomVerse] = useState({});
    const [verseId, setVerseId] = useState(generateRandomNum());
    // useEffect(() => {
    //     setInterval(() => setVerseId(prev => prev + 1), 3000)

    // }, [])

    useEffect(() => {
        // Fetching API
        const arabicApi = `https://api.alquran.cloud/v1/ayah/${verseId}/ar.alafasy`;
        const englishApi = `http://api.alquran.cloud/v1/ayah/${verseId}/en.asad`;

        fetch(arabicApi)
            .then(blob => blob.json())
            .then(data => {
                setRandomVerse(prev => ({
                    ...prev, surahID: data.data.surah.name,
                    surahEnID: data.data.surah.englishName,
                    inSurahNumber: data.data.numberInSurah
                }));
                setRandomVerse(prev => ({ ...prev, arText: data.data.text }))
            })
        fetch(englishApi)
            .then(blob => blob.json())
            .then(data => {

                setRandomVerse(prev => ({ ...prev, enText: data.data.text }))
            })


    }, [verseId])


    return (
        <div className='flex flex-col  justify-start items-center flex-1  py-4  w-full h-10' >
            <div className='flex flex-col  justify-center w-full text-center py-2 px-8 gap-5'>
                <div className=' flex flex-col gap-4  p-2 w-full bg-gray-200 rounded-2xl overflow-y-scroll scrollbar-hide max-h-52 '>
                    <p className='font-quran text-2xl'>
                        {randomVerse.arText}
                    </p>
                    <p className='font-verse text-xl'>
                        {randomVerse.enText}
                    </p>
                </div>
                <div className='flex justify-center items-center gap-4'>
                    <Button text={<GrFormPreviousLink size={25} />} onClick={() => setVerseId(verseId + 1)} />
                    <div className='font-quran text-xl text-gray-800 font-extrabold'>
                        <p>{randomVerse.surahID}</p>
                        <p>{randomVerse.inSurahNumber}</p>
                    </div>
                    <Button text={<GrFormNextLink size={25} />} onClick={() => setVerseId(verseId - 1)} />
                </div>
            </div>
        </div >
    )
}

export default Verse