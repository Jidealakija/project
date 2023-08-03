"use client"
import { useState } from 'react';
import Link from 'next/link';

const Login = () => {
  const [formData, setFormData] = useState({
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
      const response = await fetch('/api/login', {
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
    <section className='bg-[url(/office.jpg)] h-screen bg-cover'>
      <div className='w-[40rem] h-80 align-middle m-auto bg-neutral-600 rounded-xl'>
      <form onSubmit={handleSubmit} className='pt-10 text-center'>
        <div>
          <label htmlFor="email" className='font-bold text-xl text-white'>Email:</label>
          <input
            className='rounded-lg'
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email address"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className='mt-4'>
          <label htmlFor="password" className='font-bold text-xl text-white'>Password:</label>
          <input
            className='rounded-lg'
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className='mt-6 font-medium text-xl w-40 h-[30px] rounded-3xl m-auto text-center
             bg-green-500 hover:bg-green-700'>Log In</button>
      </form>
      <p className='text-center mt-10'>
        Don't have an account yet?
        <Link href="/Signup" className='pl-1 m-auto text-center
             hover:text-green-700'>
          Sign up
        </Link>
      </p>
      </div>
    </section>
  );
};

export default Login;
