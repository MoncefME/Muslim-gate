import React from 'react'

const Button = ({ text, onClick }) => {
    return (
        <button onClick={onClick} className='text-gray-800  rounded-md font-medium hover:bg-gray-600 hover:bg-opacity-10 px-4 py-2 transition duration-300'>
            {text}
        </button>
    )
}

export default Button