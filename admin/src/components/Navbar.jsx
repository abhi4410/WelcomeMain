import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = ({ setToken }) => {
  return (
    <div className='flex items-center py-2 px-[4%] justify-between'>
      <div className="text-2xl font-semibold tracking-tight">
        Welcome Furniture<span className="text-rose-500">.</span>
      </div>
      <button onClick={() => setToken('')} className='bg-gray-600 text-white px-5 py-2 sm:px-7 sm:py-2 rounded-full text-xs sm:text-sm'>Logout</button>
    </div>
  )
}

export default Navbar