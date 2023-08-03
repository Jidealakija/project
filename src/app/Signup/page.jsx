"use client"
import { useState } from 'react';
import Link from 'next/link';

const Signup = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Do any client-side validation here

    try {
      // Send the form data to your server-side logic (e.g., Next.js API route)
      const response = await fetch('/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      // Handle the response here (e.g., show success message, redirect, etc.)
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <section className='bg-[url(/office2.jpg)] h-screen bg-cover'>
      <div className='w-[40rem] h-80 align-middle m-auto bg-neutral-600 rounded-xl'>
      <form onSubmit={handleSubmit} className='pt-7 text-center'>
        <div>
          <p><label htmlFor="username" className='font-bold text-xl text-white'>Username</label></p>
          <input
          className='rounded-lg text-center'
            type="text"
            id="username"
            name="username"
            placeholder="Enter your username"
            value={formData.username}
            onChange={handleChange}
          />
        </div>
        <div className='mt-4'>
          <p><label htmlFor="email" className='font-bold text-xl text-white'>Email</label></p>
          <input
          className='rounded-lg text-center'
            type="email"
            id="email"
            name="email"
            placeholder="Enter you email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className='mt-4'>
          <p><label htmlFor="password" className='font-bold text-xl text-white'>Password</label></p>
          <input
          className='rounded-lg text-center'
            type="password"
            id="password"
            name="password"
            placeholder="Enter you password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className='mt-6 font-medium text-xl w-24 rounded-3xl m-auto text-center
             bg-green-500 hover:bg-green-700'>Sign Up</button>
      </form>
      <p className='text-center mt-5'>
        Already have an account?
        <Link href="/Login" className='pl-1 m-auto text-center
             hover:text-green-700'>
          Login
        </Link>
      </p>
      </div>
    </section>
  );
};

export default Signup;
