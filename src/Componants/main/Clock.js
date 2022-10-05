import React, { useEffect, useState } from 'react'

export const Clock = () => {
    const [current, setCurrent] = useState(new Date());

    function tick() { setCurrent(new Date()) };

    useEffect(() => {
        var currentTime = setInterval(() => tick(), 1000);
        return function cleanup() {
            clearInterval(currentTime);
        };
    });

    return (
        <div className='font-bold text-7xl text-gray-900 flex justify-center px-4 py-8'>
            <p>{(current.getHours() < 10 ? "0" : "") + current.getHours()}
                <span className='text-3xl'>:</span>
                {(current.getMinutes() < 10 ? "0" : "") + current.getMinutes()}
                <span className='text-3xl'>:</span>
                {(current.getSeconds() < 10 ? "0" : "") + current.getSeconds()}
            </p>
            <p className='font-extrabold text-gray-800 text-2xl'>{current.getHours() > 12 ? "PM" : "AM"}</p>
        </div>
    )
}


export default Clock