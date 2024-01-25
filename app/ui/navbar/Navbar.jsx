import Image from 'next/image'
import React from 'react'
import Logo from '../../../assets/LOGO.png';

function Navbar() {
  return (
    <div className='w-screen h-5 fixed z-20 bg-transparent'>
      <div className='flex flex-row items-center justify-between px-32 py-10'>
        <Image src={Logo} alt="logo" className='w-20' />
        <div className='flex flex-row items-center gap-5'>
          <span className='text-white font-extralight cursor-pointer'>Menu 1</span>
          <span className='text-white font-extralight cursor-pointer'>Menu 2</span>
          <button className='border-[1px] border-[#ffffff70] rounded-md text-white font-extralight px-6 py-2'>Register</button>
          <button className='border-[1px] border-[#FFFFFF70] rounded-md text-white font-extralight px-6 py-2'>Login</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar