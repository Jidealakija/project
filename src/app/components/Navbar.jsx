"use client"
import Link from 'next/link'
import React, { useState } from 'react'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className='fixed inset-x-0 flex flex-col md:flex-row md:py-6 bg-slate-400 md:h-[6rem] justify-between border-b-black border-b-2 opacity-100'>
      <div className='flex justify-between p-4 md:p-0'>
        <Link href='/'>
          <p className='text-5xl font-bold capitalize pl-5 md:text-5xl'>hustle</p>
        </Link>
        <button
          onClick={toggleMenu}
          className='md:hidden text-xl hover:bg-slate-300'
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
</svg>
        </button>
      </div>

      <ul className={`md:flex md:space-x-10 ${isMenuOpen ? 'block' : 'hidden'} md:mt-0 md:mb-0`}>
        <li className='mt-4 md:mt-0'>
          <Link href='Contact'>
            <button className='block font-light text-xl hover:bg-green-100 hover:text-green-500 rounded-lg md:w-32 capitalize'>
              contact us
            </button>
          </Link>
        </li>
        <li className='mt-4 md:mt-0 pr-5'>
          <Link href='Signup'>
            <button className='block font-medium text-xl rounded-3xl md:w-32 text-center bg-green-500 hover:bg-green-700 capitalize'>
              get started
            </button>
          </Link>
        </li>
      </ul>
    </nav>
  )
}
