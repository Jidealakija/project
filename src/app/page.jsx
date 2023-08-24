import React from 'react'
import Link from 'next/link'

export default function page() {
  return (
    <div className='items-center text-center py-20'>
      <h1 className='text-6xl font-extrabold mt-10'>
      The platform for smarter work management
      </h1>
      <p className='text-2xl font-regular mt-10'> Hustle adapts to your way of working by helping you make better decisions, <br /> work efficiently
and track progress daily.</p>
<Link href='Signup'><p><button className='capitalize mt-10 font-medium text-3xl w-52 h-[45px] rounded-3xl m-auto justify-evenly bg-green-500 hover:bg-green-700'>get started</button></p></Link>

<div className="container mx-auto p-8 grid grid-cols-1 md:grid-cols-3 gap-6 pt-24">
    <div className="bg-slate-400 p-6 rounded-lg shadow-md text-center hover:shadow-green-700">
      <img src="/taskcreation.svg" alt="task creation" width={400} height={400}/>
      <h3 className="text-3xl font-semibold mb-2">Easy Task Creation</h3>
      <p className="text-xl">Create tasks quickly and efficiently with our intuitive interface.</p>
    </div>
    <div className="bg-slate-400 p-6 rounded-lg shadow-md text-center hover:shadow-green-700">
      <img src="/customize.svg" alt="customization" width={400} height={400}/>
      <h3 className="text-3xl font-semibold mb-2">Customizable Categories</h3>
      <p className="text-xl">Organize your tasks by creating customizable categories and labels.</p>
    </div>
    <div className="bg-slate-400 p-6 rounded-lg shadow-md text-center hover:shadow-green-700">
      <img src="/progress.svg" alt="progress tracking" width={400} height={400}/>
      <h3 className="text-3xl font-semibold mb-2">Progress Tracking</h3>
      <p className="text-xl">Track your task completion progress and stay motivated.</p>
    </div>
  </div>
  <Link href='Signup'><p><button className='capitalize mt-10 font-medium text-3xl w-52 h-[45px] rounded-3xl m-auto justify-evenly bg-green-500 hover:bg-green-700'>get started</button></p></Link>
    </div>
  )
}
