import React from 'react'

const Navbar = () => {
  return (
    <div className='bg-purple-400 flex justify-between items-center'>
        <div>
        <img className='w-[7rem] h-[5rem]' 
        src='https://o.remove.bg/downloads/5a833ba1-ddd6-4c56-afa8-33808ae5d44b/pngtree-esports-free-png-and-vector-picture-image_3629319-removebg-preview.png' alt="" />
        </div>
        <div className='flex gap-4 mr-5 '>
            <h1 className='text-xl hover:underline'>E-Sport</h1>
            <h1 className='text-xl hover:underline'>About</h1>
            <h1 className='text-xl hover:underline'>Contact</h1>
            <h1 className='text-xl hover:underline'>Team</h1>
        </div>
    </div>
  )
}

export default Navbar