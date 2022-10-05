import React from 'react'
import Button from '../common/Button'
import { FiSettings } from 'react-icons/fi'
import { GrGithub, GrInstagram } from 'react-icons/gr'

const Footer = () => {
    return (
        <footer className='flex items-center justify-between px-8 w-full bg-gradient-to-t from-slate-400 to-slate-300'>
            <div className='p-2 rounded hover:bg-slate-100'>
                <FiSettings size={25} />
            </div>
            <p >
                Designed by <span className='font-bold'>Moncef</span>
            </p>
            <div className=' flex items-center gap-3 p-2 rounded'>
                <GrGithub size={25} className='p-2 hover:bg-opacity-20 hover:bg-slate-100 rounded-lg w-auto h-auto' />
                <GrInstagram size={25} className='p-2 hover:bg-opacity-20 hover:bg-slate-100 rounded-lg w-auto h-auto' />
            </div>

        </footer>
    )
}

export default Footer