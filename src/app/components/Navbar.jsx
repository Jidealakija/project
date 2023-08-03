import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
    <nav className=' flex flex-row bg-slate-400 h-[6rem] justify-between m-auto items-center'>
        <ul className='pl-8 text-6xl font-bold capitalize'>
            <Link href='/'><li>hustle</li></Link>
        </ul>

        <ul className='flex pr-8 gap-10 capitalize'>
            <Link href='/'><li className='font-light text-xl m-auto text-center hover:bg-green-100 hover:text-green-500 w-40 rounded-lg'>contact us</li></Link>
            <Link href='Signup'><li className='font-medium text-xl w-40 h-[30px] rounded-3xl m-auto text-center
             bg-green-500 hover:bg-green-700'>get started</li></Link>
        </ul>
    </nav>
  )
}
