import React from 'react'
import Link from 'next/link'

export default function page() {
  return (
    <div className='items-center text-center py-32'>
      <h1 className='text-6xl font-extrabold mt-20'>
      The platform for smarter work management
      </h1>
      <p className='text-2xl font-regular mt-10'> Hustle adapts to your way of working by helping you make better decisions, <br /> work efficiently
and track progress daily.</p>
<Link href='Signup'><p><button className='capitalize mt-10 font-medium text-3xl w-52 h-[45px] rounded-3xl m-auto justify-evenly bg-green-500 hover:bg-green-700'>get started</button></p></Link>
    </div>
  )
}
