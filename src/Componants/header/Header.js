import React, { memo } from 'react'
import Button from '../common/Button'

const Header = () => {


    return (
        <header className='px-8 py-2 flex items-center justify-between w-full'>
            <div className='flex items-center gap-2'>
                <p className='text-gray-800 font-medium drop-shadow w-fit'>{new Date().toLocaleDateString()}</p>
                <Button text={"Quick Links"} />
            </div>
            <div className='flex items-center gap-2 font-medium'>
                <Button text={"Adhkar 🤲"} />
                <p>٨ ربيع الأول ١٤٤٤ هـ</p>
            </div>
        </header>
    )
}

export default memo(Header)
