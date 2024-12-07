import React from 'react'
type prop = {
    data: {
      title:string,
      desc:string
    }
  }
  

export default function CommonBlog({data}: prop) {
  return (
 <section className=''>
      <div className="w-full flex  ">
        <div className="w-[70%] h-[25%] bg-[#191919] p-6 relative border rounded-md">
          <p className="font-bold text-2xl text-white">
            {data.title}
            <div className="absolute rounded-md top-14 left-[7%] w-14 h-1 bg-red-600 mt-1"></div>
          </p>
          <div className="w-full h-[30%] mt-7">
           <p className='text-gray-300 text-sm'>{data.desc}</p>
          </div>
        </div>
      </div>
 </section>
  )
}
