import React, { useEffect, useState } from 'react';


const Verse = () => {
    const [surah, setSurah] = useState({ surahID: "", ayahID: "", content: "" });

    const [surahID, setSurahID] = useState("2");
    const [ayahID, setAyahID] = useState("3");
    const [verseContnet, setVerseContent] = useState("");
    const [verseContnetEn, setVerseContentEn] = useState("");

    const options = {
        method: 'GET',
        headers: {

            'X-RapidAPI-Host': 'al-quran1.p.rapidapi.com'
        }
    };

    const fetchQuran = () => {
        const randomSurahId = Math.floor(Math.random() * 114); // 0->144
        setSurahID(randomSurahId);
        //to know how many verses in the surah
        fetch('https://raw.githubusercontent.com/semarketir/quranjson/master/source/surah.json')
            .then(response => response.json())
            .then(response => {
                const randomVerse = Math.floor(Math.random() * response[randomSurahId].count);
                setAyahID(randomVerse);
            })
            .then(data => {
                console.log("just before", surahID, ayahID);
                return fetch(`https://al-quran1.p.rapidapi.com/${surahID}/${ayahID}`, options)
            })
            .then(response => response.json())
            .then(response => {
                console.log(response.content);
                setVerseContent(response.content);
                setVerseContentEn(response.translation_eng);

            })
            .catch(err => console.error("I couldnt find this "));




        //********************************************** */
    }


    useEffect(() => fetchQuran(), []);


    return (
        <div className='flex flex-col  justify-between items-center flex-1  py-4  w-full h-10' >
            <div className='flex flex-col py-2 px-8'>
                <p>
                    {verseContnet}
                </p>

                <p>
                    {verseContnetEn}
                </p>

            </div>
            <div>
                <div>
                    <ol>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ol>
                </div>
                <p>
                    Sourat
                </p>

            </div>
        </div >
    )
}

export default Verse