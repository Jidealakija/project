"use client";
import React, { useState } from "react";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();

    const data = {
      name,
      email,
      message,
    };

    console.log("Sending contact form data:", data);

    setTimeout(() => {
      setSubmitted(true);
    }, 1000);
  };

  return (
    <div className="p-4 md:p-8">
      <h1 className="text-xl md:text-2xl font-semibold mb-4 pt-20 md:text-center">Contact Us</h1>
      {submitted ? (
        <div className="flex items-center text-green-600">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="h-5 w-5 mr-2"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          Form submitted successfully!
        </div>
      ) : (
        <form onSubmit={onSubmit} className="space-y-4 md:text-center md:content-center">
          <div>
            <label htmlFor="name" className="block mb-1 font-medium">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className=" md:w-96 w-full p-2 border rounded-md focus:outline-none focus:ring focus:border-green-700"
            />
          </div>
          <div>
            <label htmlFor="email" className="block mb-1 font-medium">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="md:w-96 w-full p-2 border rounded-md focus:outline-none focus:ring focus:border-green-700"
            />
          </div>
          <div>
            <label htmlFor="message" className="block mb-1 font-medium">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              placeholder="Your message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="md:w-96 w-full p-2 border rounded-md focus:outline-none focus:ring focus:border-green-700"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-green-500 text-black py-2 px-4 rounded-md hover:bg-green-600 focus:outline-none focus:ring focus:ring-green-700 w-full md:w-96"
          >
            Submit
          </button>
        </form>
      )}
    </div>
  );
};

export default ContactForm;
