import React, { useEffect, useState } from 'react'
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '8be0ded608msha1e3eed26306a0ep1db7bajsnddda6e14468f',
        'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
    }
};


const Weather = () => {
    const [currentWeather, setCurrentWeather] = useState([]);

    useEffect(() => {
        fetch('https://weatherapi-com.p.rapidapi.com/forecast.json?q=London&days=3', options)
            .then(response => response.json())
            .then(response => {
                console.log(response);
                setCurrentWeather(response.forecast.forecastday[0].hour);

            })
            .finally(
                console.log("---", currentWeather)
            )
            .catch(err => console.error(err));
    }, [])



    return (
        <div className='flex text-sm snap-y snap-mandatory flex-col justify-start gap-2 items-center overflow-scroll  scrollbar-hide max-h-72 rounded-md px-1 py-8 mt-4 mx-2  w-4/5'>
            {
                currentWeather.map((data, index) => <>
                    <div key={index} className="flex flex-row justify-between items-center snap-center bg-slate-400 my-[1px] w-full rounded-md px-1 ">
                        <span key={`${index}-sp`}>{index}:00</span>
                        <p key={`${index}-p`} className='text-center font-verse'>{data.condition.text}</p>
                        <img key={`${index}-mg`} src={data.condition.icon}
                            width={32} height={32} />
                    </div>
                </>)
            }
        </div>
    )
}

export default Weather