import React from 'react'

export default function Form() {
  return (
  <section className='main-container py-14'>
    <div className="w-full">
        <form className="w-full h-full flex flex-col gap-4 bg-cover bg-center bg-no-repeat">
            <p className='text-red-500 text-center'>Contact Us</p>
          <h1 className="text-4xl font-bold text-white  text-center py-1">
          Drop Us A Message For Any Query
          </h1>
          <div className="flex flex-row gap-3 w-full">
            <input
              className="shadow appearance-none border rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Your Name"
            />

            <input
              className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="Email"
              type="Email"
              placeholder="Your Email"
            />
          </div>

          <div className="flex flex-row gap-3 w-full">
            <input
              className="shadow appearance-none border rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Your Phone"
            />

            <input
              className="shadow appearance-none border  rounded w-full py-2  px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="Email"
              type="Email"
              placeholder="Your Message"
            />
          </div>

          

          <input
            type="text"
            className="border border-gray-300  w-full rounded-md h-44 py-3 px-3 focus:outline-none focus:border-blue-500"
            placeholder="Enter your text"
          />
          <span className="w-full flex items-center justify-start gap-4 text-white">
          <input type="checkbox" name="" id="" />
          <p>i am not robort</p>
          </span>
          <div className="flex items-center justify-between ">
            <button className="bg-red-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              Submit
            </button>
          </div>
        </form>
      </div>
  </section>
  )
}