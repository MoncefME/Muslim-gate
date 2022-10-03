import React from 'react'

const Header = () => {
    return (
        <div className='absolute flex top-0 w-full bg-red-100 p-2'>
            <p className='h-10 flex items-center px-4 bg-red-200'>October 3</p>
            <button className='h-10 px-4 inline-flex items-center justify-center bg-red-300'>Quick Links</button>
            <div className='flex flex-row items-center relative '>
                <div>
                    <button>Buttom</button>
                </div>
                <p>Paragraph is here</p>
                <button>I'm a Buttom</button>
            </div>
        </div>
    )
}

export default Header