import React from 'react'

export default function BreadCrumb() {
  return (
    <section className='w-full h-96  flex flex-col gap-3 justify-center items-center'>
    <h1 className='text-4xl text-white font-semibold'>Contact Us</h1>
   <div className='flex gap-2 cursor-pointer'>
       <p className='text-white text-md hover:text-yellow-600 transition-all duration-500 ease-in-out'>Home</p>
       <p className='text-white text-md'>/</p>
       <p className='text-white text-md hover:text-yellow-600 transition-all duration-500 ease-in-out'>Contact</p>
   </div>
  </section>
  )
}
