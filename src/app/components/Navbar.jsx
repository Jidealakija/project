import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
    <nav className=' flex flex-row bg-slate-400 h-[6rem] justify-between m-auto items-center'>
        <ul className='pl-8 text-6xl font-bold capitalize'>
            <Link href='/'><li>hustle</li></Link>
        </ul>

        <ul className='flex pr-8 gap-10 capitalize'>
            <Link href='/'><li ><button className='font-light text-xl m-auto text-center hover:bg-green-100 hover:text-green-500 rounded-lg w-32'>contact us</button></li></Link>
            <Link href='Signup'><li><button className='font-medium text-xl w-32 rounded-3xl m-auto text-center bg-green-500 hover:bg-green-700'>get started</button></li></Link>
        </ul>
    </nav>
  )
}
