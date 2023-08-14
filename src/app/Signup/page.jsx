"use client"
import { useState } from 'react';
import Link from 'next/link';
import axios from 'axios';

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

    try {
      const response = await axios.post('/api/signup', formData);

      if (response.status === 200) {
        console.log('User created successfully!');
        window.location.href = '/Todoapp';
      } else {
        console.log('Error creating user:', response.data);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <section className='bg-[url(/office2.jpg)] h-screen bg-cover flex justify-center items-center'>
      <div className='w-96 md:w-[40rem] h-auto p-6 bg-neutral-600 rounded-xl'>
      <form onSubmit={handleSubmit} className='space-y-4 text-center'>
        <div>
          <label htmlFor="username" className='block font-bold text-xl text-white'>Username</label>
          <input
            className='w-full rounded-lg text-center md:w-96 h-10'
            type="text"
            id="username"
            name="username"
            placeholder="Enter your username"
            value={formData.username}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="email" className='block font-bold text-xl text-white'>Email</label>
          <input
            className='w-full rounded-lg text-center md:w-96 h-10'
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="password" className='block font-bold text-xl text-white'>Password</label>
          <input
            className='w-full rounded-lg text-center md:w-96 h-10'
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <Link href="/Todoapp"><button type="submit" className='w-fit mt-6 font-medium text-xl rounded-3xl py-2 px-4
          bg-green-500 hover:bg-green-700 md:w-64'>Sign Up</button></Link>
      </form>
      <p className='text-center mt-5'>
        Already have an account?
        <Link href="/Login" className='block pl-1 m-auto hover:text-green-700'>
          Login
        </Link>
      </p>
      </div>
    </section>
  );
};

export default Signup;
