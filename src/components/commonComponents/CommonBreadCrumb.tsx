import React from 'react'

type prop = {
  data: {
    title:string,
    cont1:string,
    cont2:string
  }
}

export default function CommonBreadCrumb({data}: prop) {
  return (
    <section className='w-full h-96 bg-[#191919] flex flex-col gap-3 justify-center items-center'>
    <h1 className='text-4xl text-white font-semibold'>{data.title}</h1>
   <div className='flex gap-2 cursor-pointer'>
       <p className='text-white text-md hover:text-yellow-600 transition-all duration-500 ease-in-out'>{data.cont1}</p>
       <p className='text-white text-md'>/</p>
       <p className='text-white text-md hover:text-yellow-600 transition-all duration-500 ease-in-out'>{data.cont2}</p>
   </div>
  </section>
  )
}
