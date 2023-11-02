import React from 'react'
// import logo from '../../public/'
const Navbar = () => {
  return (
    <div className='bg-[#FA1D7C] flex justify-between items-center'>
        <div>
        <img className='w-[7rem] h-[5rem]' 
        src='/logo.png' alt="" />
        </div>
        <div className='flex gap-20 mr-8 '>
            <h1 className='text-[20px] hover:underline font-semibold cursor-pointer'>E-Sport</h1>
            <h1 className='text-[20px] hover:underline font-semibold cursor-pointer'>About</h1>
            <h1 className='text-[20px] hover:underline font-semibold cursor-pointer'>Contact</h1>
            <h1 className='text-[20px] hover:underline font-semibold cursor-pointer'>Team</h1>
        </div>
    </div>
  )
}

export default Navbar